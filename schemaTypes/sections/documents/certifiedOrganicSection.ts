import {defineField, defineType} from 'sanity'
import {ctaField} from '../../objects/cta'
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
    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text'}),
    ctaField('cta', 'CTA'),
    imageWithAlt('supplyChainImage', 'Supply Chain Image'),
    defineField({name: 'organicHeading', type: 'string'}),
    defineField({name: 'organicDescription', type: 'text'}),
    defineField({
      name: 'organicCertifications',
      title: 'Organic Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            imageWithAlt('logo', 'Logo'),
            defineField({name: 'name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', type: 'text'}),
          ],
          preview: {select: {title: 'name'}},
        },
      ],
    }),
    ctaField('certificationsCta', 'Certifications CTA'),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
