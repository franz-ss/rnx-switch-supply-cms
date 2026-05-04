import {Home} from 'lucide-react'
import {defineField, defineType} from 'sanity'

const sectionReferenceTypes = [
  {type: 'marketReportBannerSection'},
  {type: 'heroSection'},
  {type: 'certificationSection'},
  {type: 'ingredientCapabilitiesSection'},
  {type: 'capabilitySection'},
  {type: 'certifiedOrganicSection'},
  {type: 'privateLabelSection'},
  {type: 'industriesSection'},
  {type: 'popularIngredientsSection'},
  {type: 'premiumIngredientsSection'},
  {type: 'testimonialsSection'},
  {type: 'finalCtaSection'},
]

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: Home,
  fields: [
    defineField({name: 'title', title: 'Internal Title', type: 'string'}),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [{type: 'reference', to: sectionReferenceTypes}],
    }),
  ],
  preview: {select: {title: 'title'}},
})
