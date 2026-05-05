import {defineField, defineType} from 'sanity'

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
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
