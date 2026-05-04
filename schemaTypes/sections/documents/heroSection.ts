import {defineField, defineType} from 'sanity'
import {ctaField} from '../../objects/cta'
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
    defineField({name: 'subheading', title: 'Subheading', type: 'text'}),
    ctaField('primaryCta', 'Primary CTA'),
    ctaField('secondaryCta', 'Secondary CTA'),
    defineField({
      name: 'trustBullets',
      title: 'Trust Bullets',
      type: 'array',
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
