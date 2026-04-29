import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ?? "kknhy9ol";
export const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export interface SanityImageReference {
  _type: "image";
  asset: { _type: "reference"; _ref: string };
  alt: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Limit concurrent uploads to stay under Sanity's 25 req/sec rate limit
const MAX_CONCURRENT_UPLOADS = 4;
let activeUploads = 0;
const uploadQueue: Array<() => void> = [];

function drainUploadQueue(): void {
  while (activeUploads < MAX_CONCURRENT_UPLOADS && uploadQueue.length > 0) {
    activeUploads++;
    uploadQueue.shift()!();
  }
}

function withUploadSlot<T>(fn: () => Promise<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    uploadQueue.push(() => {
      fn()
        .then((r) => { activeUploads--; drainUploadQueue(); resolve(r); })
        .catch((e) => { activeUploads--; drainUploadQueue(); reject(e); });
    });
    drainUploadQueue();
  });
}

export async function uploadImage(
  relativePath: string,
  alt: string,
  maxRetries = 5,
): Promise<SanityImageReference | undefined> {
  const imagePath = path.resolve(__dirname, "..", relativePath);

  if (!fs.existsSync(imagePath)) {
    console.warn(`  [WARN] Image not found, skipping upload: ${imagePath}`);
    return undefined;
  }

  const filename = path.basename(relativePath);
  console.log(`  Uploading ${filename}...`);

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const asset = await withUploadSlot(() =>
        client.assets.upload("image", fs.createReadStream(imagePath), { filename }),
      );
      return {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt,
      };
    } catch (err: unknown) {
      const e = err as { statusCode?: number; code?: string; response?: { headers?: { "retry-after"?: string } } };
      const isRateLimit = e.statusCode === 429;
      const isReset = e.code === "ECONNRESET";
      if ((isRateLimit || isReset) && attempt < maxRetries) {
        const retryAfterSec = isRateLimit ? parseInt(e.response?.headers?.["retry-after"] ?? "2") : 2;
        const delayMs = (retryAfterSec + 1) * 1000;
        console.log(`  ${isRateLimit ? "Rate limited" : "Connection reset"} uploading ${filename}, retrying in ${delayMs}ms (attempt ${attempt + 1}/${maxRetries})...`);
        await sleep(delayMs);
      } else {
        throw err;
      }
    }
  }
}
