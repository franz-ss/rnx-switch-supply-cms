import {defineField, defineType} from 'sanity'
import {ctaField} from '../../objects/cta'
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
    defineField({name: 'label', type: 'string'}),
    defineField({name: 'heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text'}),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            iconField(),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', type: 'text'}),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
    }),
    imageWithAlt('imageOne', 'Image 1'),
    imageWithAlt('imageTwo', 'Image 2'),
    ctaField('cta', 'CTA'),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
