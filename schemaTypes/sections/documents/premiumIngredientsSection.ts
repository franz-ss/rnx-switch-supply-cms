import {defineField, defineType} from 'sanity'
import {iconField} from '../../objects/icon'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const premiumIngredientsSection = defineType({
  name: 'premiumIngredientsSection',
  title: 'Premium Ingredient',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Name',
      type: 'string',
      description: 'Editor-only label. Not shown on the website.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            iconField(),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', type: 'text', validation: (Rule) => Rule.required()}),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
    }),
    imageWithAlt('imageOne', 'Image 1'),
    imageWithAlt('imageTwo', 'Image 2'),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
