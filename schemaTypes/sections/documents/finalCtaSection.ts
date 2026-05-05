import {defineField, defineType} from 'sanity'

export const finalCtaSection = defineType({
  name: 'finalCtaSection',
  title: 'Final CTA',
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
    defineField({name: 'subheading', type: 'text'}),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
