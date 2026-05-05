import {defineField} from 'sanity'

export const iconField = (name = 'icon', title = 'Icon') =>
  defineField({
    name,
    title,
    type: 'iconPicker',
    validation: (Rule) => Rule.required(),
  })
