import {defineField, defineType} from 'sanity'
import { Home } from 'lucide-react'

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
      of: [
        {type: 'hero'},
        {type: 'marketReportBanner'},
        {type: 'certificationSection'},
        {type: 'ingredientCapabilities'},
        {type: 'capabilitySection'},
        {type: 'certifiedOrganicSection'},
        {type: 'privateLabelSection'},
        {type: 'industriesSection'},
        {type: 'popularIngredients'},
        {type: 'premiumIngredientsSection'},
        {type: 'testimonialsSection'},
        {type: 'finalCTA'},
      ],
    }),
  ],
  preview: {select: {title: 'title'}},
})
