import {defineField, defineType} from 'sanity'
import {imageWithAlt} from '../../objects/imageWithAlt'
import {linkField} from '../../objects/link'

export const ingredientCapabilitiesSection = defineType({
  name: 'ingredientCapabilitiesSection',
  title: 'Ingredient Capability',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Name',
      type: 'string',
      description: 'Editor-only label. Not shown on the website.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({
      name: 'browseLabel',
      title: 'Browse Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', type: 'text'}),
            linkField('link', 'Link'),
            imageWithAlt('image', 'Image'),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
