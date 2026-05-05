import {defineField, defineType} from 'sanity'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const certificationSection = defineType({
  name: 'certificationSection',
  title: 'Certification',
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            imageWithAlt('logo', 'Logo'),
          ],
          preview: {select: {title: 'name'}},
        },
      ],
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
