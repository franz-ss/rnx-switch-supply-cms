import {defineField, defineType} from 'sanity'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Name',
      type: 'string',
      description: 'Editor-only label. Not shown on the website.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trustBullets',
      title: 'Trust Bullets',
      type: 'array',
      validation: (R) => R.required().min(1),
      of: [{type: 'string'}],
    }),
    imageWithAlt('backgroundImage', 'Background Image'),
  ],
  preview: {
    select: {title: 'title', subtitle: 'headline'},
    prepare: ({title, subtitle}: {title?: string; subtitle?: string}) => ({
      title: title ? `Hero / ${title}` : 'Hero',
      subtitle,
    }),
  },
})
