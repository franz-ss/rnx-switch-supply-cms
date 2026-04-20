import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "kknhy9ol";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

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

export async function uploadImage(
  relativePath: string,
  alt: string,
): Promise<SanityImageReference | undefined> {
  const imagePath = path.resolve(__dirname, "..", relativePath);

  if (!fs.existsSync(imagePath)) {
    console.warn(`  [WARN] Image not found, skipping upload: ${imagePath}`);
    return undefined;
  }

  const filename = path.basename(relativePath);
  console.log(`  Uploading ${filename}...`);
  const asset = await client.assets.upload(
    "image",
    fs.createReadStream(imagePath),
    { filename },
  );

  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    alt,
  };
}
