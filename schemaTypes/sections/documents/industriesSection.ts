import {defineField, defineType} from 'sanity'
import {iconField} from '../../objects/icon'

export const industriesSection = defineType({
  name: 'industriesSection',
  title: 'Industry',
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
      name: 'industries',
      title: 'Industries',
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
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
