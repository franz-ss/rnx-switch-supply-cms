import {defineField, defineType} from 'sanity'
import {iconField} from '../../objects/icon'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const certifiedOrganicSection = defineType({
  name: 'certifiedOrganicSection',
  title: 'Certified Organic',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Name',
      type: 'string',
      description: 'Editor-only label. Not shown on the website.',
      validation: (Rule) => Rule.required(),
    }),
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
    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
    imageWithAlt('supplyChainImage', 'Supply Chain Image'),
    defineField({name: 'organicHeading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'organicDescription', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'organicCertifications',
      title: 'Organic Certifications',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            imageWithAlt('logo', 'Logo'),
            defineField({name: 'name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', type: 'text', validation: (Rule) => Rule.required()}),
          ],
          preview: {select: {title: 'name'}},
        },
      ],
    }),
    defineField({
      name: 'certificationsCta',
      title: 'Certifications CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
