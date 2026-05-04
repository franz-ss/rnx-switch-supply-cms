import {defineField} from 'sanity'

export const imageWithAlt = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: {hotspot: true},
    fields: [
      defineField({
        name: 'alt',
        title: 'Alt Text',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    ],
  })
