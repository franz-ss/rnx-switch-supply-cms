import {defineField, defineType} from 'sanity'
import {Leaf} from 'lucide-react'
import {ctaField} from '../../objects/cta'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const certifiedOrganicPage = defineType({
  name: 'certifiedOrganicPage',
  title: 'Certified Organic Page',
  type: 'document',
  icon: Leaf,
  fields: [
    defineField({name: 'title', title: 'Internal Title', type: 'string'}),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (R) => R.max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      validation: (R) => R.max(160),
    }),

    // ─── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({name: 'subheading', title: 'Subheading', type: 'text'}),
        ctaField('cta', 'CTA Button'),
        imageWithAlt('backgroundImage', 'Background Image'),
      ],
    }),

    // ─── Certifications ───────────────────────────────────────────────────────
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {select: {title: 'name'}},
          fields: [
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {hotspot: true},
              validation: (R) => R.required(),
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
              ],
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (R) => R.required(),
            }),
          ],
        },
      ],
    }),

    // ─── Product Range ────────────────────────────────────────────────────────
    defineField({
      name: 'productRange',
      title: 'Product Range',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        ctaField('catalogueCta', 'Catalogue CTA Button'),
        defineField({
          name: 'categories',
          title: 'Product Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              preview: {select: {title: 'title'}},
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                imageWithAlt('image', 'Image'),
                defineField({
                  name: 'products',
                  title: 'Products',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'qualityCommitmentsHeading',
          title: 'Quality Commitments Heading',
          type: 'string',
        }),
        defineField({
          name: 'qualityCommitments',
          title: 'Quality Commitments',
          type: 'array',
          of: [
            {
              type: 'object',
              preview: {select: {title: 'title'}},
              fields: [
                defineField({name: 'icon', title: 'Icon', type: 'iconPicker'}),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({name: 'description', title: 'Description', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── Functional Wellness Showcase ─────────────────────────────────────────
    defineField({
      name: 'functionalShowcase',
      title: 'Functional Wellness Showcase',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'subheading', title: 'Subheading', type: 'text'}),
        defineField({
          name: 'privateLabelCard',
          title: 'Private Label Card',
          type: 'object',
          fields: [
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
          ],
        }),
        defineField({
          name: 'customBlendCard',
          title: 'Custom Blend Card',
          type: 'object',
          fields: [
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({
              name: 'benefits',
              title: 'Benefits',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
        }),
        defineField({name: 'trendingLabel', title: 'Trending Section Label', type: 'string'}),
        defineField({
          name: 'premiumRangeLabel',
          title: 'Premium Range Section Label',
          type: 'string',
        }),
        defineField({
          name: 'cta',
          title: 'Bottom CTA',
          type: 'object',
          fields: [
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            ctaField('button', 'Button'),
          ],
        }),
        defineField({
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [
            {
              type: 'object',
              preview: {select: {title: 'name', subtitle: 'category'}},
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({name: 'category', title: 'Category', type: 'string'}),
                defineField({name: 'trending', title: 'Trending', type: 'boolean'}),
              ],
            },
          ],
        }),
        defineField({
          name: 'privateLabelImages',
          title: 'Private Label Images',
          type: 'array',
          of: [
            {
              type: 'object',
              preview: {select: {title: 'label'}},
              fields: [
                imageWithAlt('image', 'Image'),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── Supply Chain ─────────────────────────────────────────────────────────
    defineField({
      name: 'supplyChain',
      title: 'Global Supply Chain',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'metrics',
          title: 'Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              preview: {select: {title: 'value', subtitle: 'label'}},
              fields: [
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
              ],
            },
          ],
        }),
        defineField({
          name: 'sourcingNetworkHeading',
          title: 'Sourcing Network Heading',
          type: 'string',
        }),
        defineField({
          name: 'countries',
          title: 'Import Countries',
          type: 'array',
          of: [
            {
              type: 'object',
              preview: {select: {title: 'country', subtitle: 'region'}},
              fields: [
                defineField({
                  name: 'country',
                  title: 'Country',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({name: 'region', title: 'Region', type: 'string'}),
                defineField({name: 'flag', title: 'Flag Emoji', type: 'string'}),
              ],
            },
          ],
        }),
        defineField({name: 'partnershipHeading', title: 'Partnership Heading', type: 'string'}),
        defineField({
          name: 'partnershipDescription',
          title: 'Partnership Description',
          type: 'text',
        }),
      ],
    }),

    // ─── Trust ────────────────────────────────────────────────────────
    defineField({
      name: 'trustSection',
      title: 'Trust',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'cards',
          title: 'Trust Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              preview: {select: {title: 'title'}},
              fields: [
                defineField({name: 'icon', title: 'Icon', type: 'iconPicker'}),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({
                  name: 'bullets',
                  title: 'Bullet Points',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({
                  name: 'accent',
                  title: 'Accent Color',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Green', value: 'green'},
                      {title: 'Sky', value: 'sky'},
                      {title: 'Amber', value: 'amber'},
                    ],
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── Final CTA ────────────────────────────────────────────────────────────
    defineField({
      name: 'finalCta',
      title: 'Final CTA',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'subheading', title: 'Subheading', type: 'text'}),
        defineField({name: 'benefits', title: 'Benefits', type: 'array', of: [{type: 'string'}]}),
        ctaField('cta', 'CTA Button'),
      ],
    }),
  ],
  preview: {select: {title: 'title'}},
})
