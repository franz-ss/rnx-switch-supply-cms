import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
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
