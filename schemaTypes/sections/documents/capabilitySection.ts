import {defineField, defineType} from 'sanity'
import {iconField} from '../../objects/icon'

export const capabilitySection = defineType({
  name: 'capabilitySection',
  title: 'Capability',
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
      name: 'stats',
      title: 'Stats',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            iconField(),
            defineField({
              name: 'number',
              title: 'Number / Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'sublabel',
              title: 'Sub-label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {select: {title: 'label'}},
        },
      ],
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
