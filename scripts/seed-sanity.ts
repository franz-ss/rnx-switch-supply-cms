// scripts/seed-sanity.ts
// Run with: SANITY_API_TOKEN=<token> pnpm seed -- <seed-key> [seed-key]

import {dataset, projectId} from './seed/client.js'
import {seedBlogPosts} from './seed/blogPosts.js'
import {seedCategories} from './seed/categories.js'
import {seedCertifiedOrganicPage} from './seed/certifiedOrganicPage.js'
import {seedHomePage} from './seed/homePage.js'
import {seedMarketAnalysisReport} from './seed/marketAnalysisReport/index.js'
import {seedPrivateLabelPage} from './seed/privateLabelPage.js'
import {seedSiteSettings} from './seed/siteSettings.js'
import {seedTestimonials} from './seed/testimonials.js'

type SeedKey =
  | 'categories'
  | 'testimonials'
  | 'site-settings'
  | 'market-report'
  | 'certified-organic'
  | 'private-label'
  | 'blog'
  | 'home'

const seedSteps: Array<{
  key: SeedKey
  label: string
  run: () => Promise<void>
}> = [
  {key: 'categories', label: 'Ingredient categories', run: seedCategories},
  {key: 'testimonials', label: 'Testimonials', run: seedTestimonials},
  {key: 'site-settings', label: 'Site settings', run: seedSiteSettings},
  {key: 'market-report', label: 'Market analysis report', run: seedMarketAnalysisReport},
  {key: 'certified-organic', label: 'Certified organic page', run: seedCertifiedOrganicPage},
  {key: 'private-label', label: 'Private label page', run: seedPrivateLabelPage},
  {key: 'blog', label: 'Blog posts', run: seedBlogPosts},
  {key: 'home', label: 'Home page', run: seedHomePage},
]

function printUsage(): void {
  console.log('Usage: pnpm seed -- <seed-key> [seed-key]')
  console.log('')
  console.log('Examples:')
  console.log('  pnpm seed -- home')
  console.log('  pnpm seed -- categories testimonials home')
  console.log('  pnpm seed -- all')
  console.log('')
  console.log('Available seed keys:')

  for (const step of seedSteps) {
    console.log(`  ${step.key.padEnd(18)} ${step.label}`)
  }

  console.log('  all                Run all seed data in dependency order')
}

function selectedSeedKeys(args: string[]): Set<SeedKey> | null {
  if (args.length === 0) return null

  const validKeys = new Set(seedSteps.map((step) => step.key))
  const invalidKeys = args.filter((arg) => !validKeys.has(arg as SeedKey))

  if (args.includes('all') && args.length > 1) {
    console.error('Use either "all" or one or more seed keys, not both.')

    return null
  }

  if (args.includes('all')) return new Set(seedSteps.map((step) => step.key))

  if (invalidKeys.length > 0) {
    console.error(`Unknown seed key${invalidKeys.length > 1 ? 's' : ''}: ${invalidKeys.join(', ')}`)

    return null
  }

  return new Set(args as SeedKey[])
}

async function main(): Promise<void> {
  const selectedKeys = selectedSeedKeys(process.argv.slice(2))

  if (!selectedKeys) {
    printUsage()
    process.exit(1)
  }

  if (!process.env.SANITY_API_TOKEN) {
    console.error(
      'Error: SANITY_API_TOKEN environment variable is not set.\n' +
        'Run with: SANITY_API_TOKEN=<token> pnpm seed -- <seed-key> [seed-key]',
    )
    process.exit(1)
  }

  console.log(`Seeding Sanity (project: ${projectId}, dataset: ${dataset})`)

  for (const step of seedSteps) {
    if (selectedKeys.has(step.key)) {
      await step.run()
    }
  }

  console.log('\nDone.')
}

main().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
