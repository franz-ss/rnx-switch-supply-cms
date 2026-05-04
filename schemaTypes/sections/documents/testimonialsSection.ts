import {defineField, defineType} from 'sanity'

export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
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
    defineField({name: 'subheading', type: 'text'}),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
