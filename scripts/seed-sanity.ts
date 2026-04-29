// scripts/seed-sanity.ts
// Run with: SANITY_API_TOKEN=<token> npx tsx scripts/seed-sanity.ts

import { projectId, dataset } from "./seed/client.js";
import { seedCategories } from "./seed/categories.js";
import { seedTestimonials } from "./seed/testimonials.js";
import { seedSiteSettings } from "./seed/siteSettings.js";
import { seedHomePage } from "./seed/homePage.js";
import { seedMarketAnalysisReport } from "./seed/marketAnalysisReport/index.js";
import { seedCertifiedOrganicPage } from "./seed/certifiedOrganicPage.js";
import { seedPrivateLabelPage } from "./seed/privateLabelPage.js";
import { seedBlogPosts } from "./seed/blogPosts.js";

async function main(): Promise<void> {
  if (!process.env.SANITY_API_TOKEN) {
    console.error(
      "Error: SANITY_API_TOKEN environment variable is not set.\n" +
        "Run with: SANITY_API_TOKEN=<token> npx tsx scripts/seed-sanity.ts",
    );
    process.exit(1);
  }

  console.log(`Seeding Sanity (project: ${projectId}, dataset: ${dataset})...`);

  await Promise.all([
    seedCategories(),
    seedTestimonials(),
    seedSiteSettings(),
    seedMarketAnalysisReport(),
    seedCertifiedOrganicPage(),
    seedPrivateLabelPage(),
    seedBlogPosts(),
  ]);

  await seedHomePage();

  console.log("\nDone.");
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
