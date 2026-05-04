import {defineField, defineType} from 'sanity'
import {iconField} from '../../objects/icon'

export const industriesSection = defineType({
  name: 'industriesSection',
  title: 'Industries Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Name',
      type: 'string',
      description: 'Editor-only label. Not shown on the website.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'heading', type: 'string'}),
    defineField({
      name: 'industries',
      title: 'Industries',
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
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
