import {blogPost} from './documents/blogPost'
import {ingredientCategory} from './documents/ingredientCategory'
import {testimonial} from './documents/testimonial'
import {certifiedOrganicPage} from './documents/pages/certifiedOrganicPage'
import {homePage} from './documents/pages/homePage'
import {marketAnalysisReport} from './documents/pages/marketAnalysisReport'
import {privateLabelPage} from './documents/pages/privateLabelPage'
import {siteSettings} from './documents/settings/siteSettings'
import {cta} from './objects/cta'
import {link} from './objects/link'
import {capabilitySection} from './sections/documents/capabilitySection'
import {certificationSection} from './sections/documents/certificationSection'
import {certifiedOrganicSection} from './sections/documents/certifiedOrganicSection'
import {finalCtaSection} from './sections/documents/finalCtaSection'
import {heroSection} from './sections/documents/heroSection'
import {industriesSection} from './sections/documents/industriesSection'
import {ingredientCapabilitiesSection} from './sections/documents/ingredientCapabilitiesSection'
import {marketReportBannerSection} from './sections/documents/marketReportBannerSection'
import {popularIngredientsSection} from './sections/documents/popularIngredientsSection'
import {premiumIngredientsSection} from './sections/documents/premiumIngredientsSection'
import {privateLabelSection} from './sections/documents/privateLabelSection'
import {testimonialsSection} from './sections/documents/testimonialsSection'

export const schemaTypes = [
  // Objects
  link,
  cta,

  // Documents
  blogPost,
  testimonial,
  ingredientCategory,
  siteSettings,
  homePage,
  certifiedOrganicPage,
  privateLabelPage,
  marketAnalysisReport,

  // Reusable section documents
  marketReportBannerSection,
  heroSection,
  certificationSection,
  ingredientCapabilitiesSection,
  capabilitySection,
  certifiedOrganicSection,
  privateLabelSection,
  industriesSection,
  popularIngredientsSection,
  premiumIngredientsSection,
  testimonialsSection,
  finalCtaSection,
]
