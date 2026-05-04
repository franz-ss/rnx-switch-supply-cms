import {defineField, defineType} from 'sanity'
import {ctaField} from '../../objects/cta'

export const marketReportBannerSection = defineType({
  name: 'marketReportBannerSection',
  title: 'Market Report Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Name',
      type: 'string',
      description: 'Editor-only label. Not shown on the website.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    ctaField('cta', 'CTA'),
  ],
  preview: {select: {title: 'title', subtitle: 'heading'}},
})
