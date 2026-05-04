import {defineField, defineType} from 'sanity'
import {ctaField} from '../../objects/cta'

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
    defineField({name: 'heading', type: 'string'}),
    defineField({name: 'subheading', type: 'text'}),
    defineField({name: 'benefits', title: 'Benefits', type: 'array', of: [{type: 'string'}]}),
    ctaField('cta', 'CTA'),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
