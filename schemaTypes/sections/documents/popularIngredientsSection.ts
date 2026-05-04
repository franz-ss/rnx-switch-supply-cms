import {defineField, defineType} from 'sanity'
import {ctaField} from '../../objects/cta'

export const popularIngredientsSection = defineType({
  name: 'popularIngredientsSection',
  title: 'Popular Ingredient',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Name',
      type: 'string',
      description: 'Editor-only label. Not shown on the website.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'heading', type: 'string'}),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'ingredientCategory'}]}],
    }),
    ctaField('catalogueCta', 'Catalogue CTA'),
    defineField({
      name: 'trendingLabel',
      title: 'Trending Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'viewSpecsLabel',
      title: 'View Specs Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
