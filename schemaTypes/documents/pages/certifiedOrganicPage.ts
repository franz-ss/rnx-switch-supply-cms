import {defineField, defineType} from 'sanity'
import {Leaf} from 'lucide-react'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const certifiedOrganicPage = defineType({
  name: 'certifiedOrganicPage',
  title: 'Certified Organic Page',
  type: 'document',
  icon: Leaf,
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (R) => R.required().max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      validation: (R) => R.required().max(160),
    }),

    // ─── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
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
          name: 'cta',
          title: 'CTA Button',
          type: 'cta',
          validation: (Rule) => Rule.required(),
        }),
        imageWithAlt('backgroundImage', 'Background Image'),
      ],
    }),

    // ─── Certifications ───────────────────────────────────────────────────────
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      validation: (R) => R.required().min(1),
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
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'catalogueCta',
          title: 'Catalogue CTA Button',
          type: 'cta',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'categories',
          title: 'Product Categories',
          type: 'array',
          validation: (R) => R.required().min(1),
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
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (R) => R.required(),
                }),
                imageWithAlt('image', 'Image'),
                defineField({
                  name: 'products',
                  title: 'Products',
                  type: 'array',
                  validation: (R) => R.required().min(1),
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
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'qualityCommitments',
          title: 'Quality Commitments',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'title'}},
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'iconPicker',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
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
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
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
          name: 'privateLabelCard',
          title: 'Private Label Card',
          type: 'object',
          validation: (R) => R.required(),
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (R) => R.required(),
            }),
          ],
        }),
        defineField({
          name: 'customBlendCard',
          title: 'Custom Blend Card',
          type: 'object',
          validation: (R) => R.required(),
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'benefits',
              title: 'Benefits',
              type: 'array',
              validation: (R) => R.required().min(1),
              of: [{type: 'string'}],
            }),
          ],
        }),
        defineField({
          name: 'trendingLabel',
          title: 'Trending Section Label',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'premiumRangeLabel',
          title: 'Premium Range Section Label',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'cta',
          title: 'Bottom CTA',
          type: 'object',
          validation: (R) => R.required(),
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'button',
              title: 'Button',
              type: 'cta',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'products',
          title: 'Products',
          type: 'array',
          validation: (R) => R.required().min(1),
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
                defineField({
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'trending',
                  title: 'Trending',
                  type: 'boolean',
                  initialValue: false,
                  validation: (R) => R.required(),
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'privateLabelImages',
          title: 'Private Label Images',
          type: 'array',
          validation: (R) => R.required().min(1),
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
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'metrics',
          title: 'Metrics',
          type: 'array',
          validation: (R) => R.required().min(1),
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
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (R) => R.required(),
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'sourcingNetworkHeading',
          title: 'Sourcing Network Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'countries',
          title: 'Import Countries',
          type: 'array',
          validation: (R) => R.required().min(1),
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
                defineField({
                  name: 'region',
                  title: 'Region',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'flag',
                  title: 'Flag Emoji',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'partnershipHeading',
          title: 'Partnership Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'partnershipDescription',
          title: 'Partnership Description',
          type: 'text',
          validation: (R) => R.required(),
        }),
      ],
    }),

    // ─── Trust ────────────────────────────────────────────────────────
    defineField({
      name: 'trustSection',
      title: 'Trust',
      type: 'object',
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'cards',
          title: 'Trust Cards',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'title'}},
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'iconPicker',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'bullets',
                  title: 'Bullet Points',
                  type: 'array',
                  validation: (R) => R.required().min(1),
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
                  validation: (R) => R.required(),
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
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
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
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'cta',
          title: 'CTA Button',
          type: 'cta',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {select: {title: 'title'}},
})
