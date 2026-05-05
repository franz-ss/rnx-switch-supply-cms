import {defineField, defineType} from 'sanity'

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
    defineField({name: 'heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [{type: 'reference', to: [{type: 'ingredientCategory'}]}],
    }),
    defineField({
      name: 'catalogueCta',
      title: 'Catalogue CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
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
