import {defineField, defineType} from 'sanity'
import {ctaField} from '../../objects/cta'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const privateLabelSection = defineType({
  name: 'privateLabelSection',
  title: 'Private Label Section',
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
    defineField({name: 'description', type: 'text'}),
    defineField({name: 'moqLabel', type: 'string'}),
    defineField({name: 'moqValue', type: 'string'}),
    defineField({name: 'capabilitiesHeading', type: 'string'}),
    defineField({name: 'capabilities', type: 'array', of: [{type: 'string'}]}),
    ctaField('cta', 'CTA'),
    imageWithAlt('showcaseImage', 'Showcase Image'),
    defineField({name: 'packagingHeading', type: 'string'}),
    defineField({name: 'packagingDescription', type: 'text'}),
    defineField({
      name: 'packagingOptions',
      title: 'Packaging Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            imageWithAlt('image', 'Image'),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', type: 'text'}),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
    }),
    defineField({name: 'packagingNote', type: 'string'}),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
