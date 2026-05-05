import {defineField, defineType} from 'sanity'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const privateLabelSection = defineType({
  name: 'privateLabelSection',
  title: 'Private Label',
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
    defineField({name: 'description', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'moqLabel', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'moqValue', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'capabilitiesHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'capabilities',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
    imageWithAlt('showcaseImage', 'Showcase Image'),
    defineField({name: 'packagingHeading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'packagingDescription',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'packagingOptions',
      title: 'Packaging Options',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            imageWithAlt('image', 'Image'),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', type: 'text', validation: (Rule) => Rule.required()}),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
    }),
    defineField({name: 'packagingNote', type: 'string', validation: (Rule) => Rule.required()}),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
