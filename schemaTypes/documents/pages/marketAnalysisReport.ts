import {defineField, defineType} from 'sanity'
import {TrendingUp} from 'lucide-react'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const marketAnalysisReport = defineType({
  name: 'marketAnalysisReport',
  icon: TrendingUp,
  title: 'Market Analysis Report',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      validation: (R) => R.required(),
    }),

    // ─── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({name: 'body', title: 'Body', type: 'text', validation: (R) => R.required()}),
        defineField({
          name: 'badges',
          title: 'Badges',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'label'}},
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'iconPicker',
                  validation: (R) => R.required(),
                }),
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

    // ─── Strategic Implications ───────────────────────────────────────────────
    defineField({
      name: 'strategicImplications',
      title: 'Strategic Implications',
      type: 'object',
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'opportunities',
          title: 'Opportunities',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'heading'}},
              fields: [
                defineField({
                  name: 'emoji',
                  title: 'Emoji',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'heading',
                  title: 'Heading',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'body',
                  title: 'Body',
                  type: 'text',
                  validation: (R) => R.required(),
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'whyChooseHeading',
          title: 'Why Choose Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'whyChooseItems',
          title: 'Why Choose Items',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'bold'}},
              fields: [
                defineField({
                  name: 'bold',
                  title: 'Bold Text',
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
      ],
    }),

    // ─── Product Catalog ──────────────────────────────────────────────────────
    defineField({
      name: 'productCatalog',
      title: 'Product Catalog',
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
          name: 'sections',
          title: 'Sections',
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
                  name: 'accent',
                  title: 'Accent Color',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Green', value: 'bg-brand-green'},
                      {title: 'Green Dark', value: 'bg-brand-green-dark'},
                      {title: 'Sky', value: 'bg-brand-sky'},
                      {title: 'Mist', value: 'bg-brand-mist'},
                    ],
                  },
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'products',
                  title: 'Products',
                  type: 'array',
                  validation: (R) => R.required().min(1),
                  of: [
                    {
                      type: 'object',
                      preview: {select: {title: 'title'}},
                      fields: [
                        imageWithAlt('image', 'Image'),
                        defineField({
                          name: 'badgeText',
                          title: 'Badge Text',
                          type: 'string',
                          validation: (R) => R.required(),
                        }),
                        defineField({
                          name: 'badgeColor',
                          title: 'Badge Color',
                          type: 'string',
                          options: {
                            list: [
                              {title: 'Cream', value: 'cream'},
                              {title: 'Mist', value: 'mist'},
                            ],
                          },
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
                          name: 'metaRows',
                          title: 'Meta Rows',
                          type: 'array',
                          validation: (R) => R.required().min(1),
                          of: [
                            {
                              type: 'object',
                              preview: {select: {title: 'entries.0.label'}},
                              fields: [
                                defineField({
                                  name: 'entries',
                                  title: 'Entries',
                                  type: 'array',
                                  validation: (R) => R.required().min(1),
                                  of: [
                                    {
                                      type: 'object',
                                      fields: [
                                        defineField({
                                          name: 'label',
                                          title: 'Label',
                                          type: 'string',
                                          validation: (R) => R.required(),
                                        }),
                                        defineField({
                                          name: 'value',
                                          title: 'Value',
                                          type: 'string',
                                          validation: (R) => R.required(),
                                        }),
                                      ],
                                    },
                                  ],
                                }),
                              ],
                            },
                          ],
                        }),
                      ],
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── Emerging Brands ──────────────────────────────────────────────────────
    defineField({
      name: 'brands',
      title: 'Emerging Brands',
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
              name: 'tagline',
              title: 'Tagline',
              type: 'text',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'innovation',
              title: 'Innovation',
              type: 'text',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'accent',
              title: 'Accent Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Green', value: 'green'},
                  {title: 'Amber', value: 'amber'},
                  {title: 'Purple', value: 'purple'},
                  {title: 'Rose', value: 'rose'},
                  {title: 'Teal', value: 'teal'},
                  {title: 'Neutral', value: 'neutral'},
                ],
              },
              validation: (R) => R.required(),
            }),
          ],
        },
      ],
    }),

    // ─── Private Label Bulk Supply ────────────────────────────────────────────
    defineField({
      name: 'privateLabelBulkSupply',
      title: 'Private Label Bulk Supply',
      type: 'object',
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({name: 'body', title: 'Body', type: 'text', validation: (R) => R.required()}),
        defineField({
          name: 'cta',
          title: 'CTA Button',
          type: 'cta',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'disclaimer',
          title: 'Disclaimer',
          type: 'text',
          validation: (R) => R.required(),
        }),
        imageWithAlt('image', 'Image'),
      ],
    }),

    // ─── Private Label Sachet Service ─────────────────────────────────────────
    defineField({
      name: 'privateLabelSachetService',
      title: 'Private Label Sachet Service',
      type: 'object',
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          validation: (R) => R.required(),
        }),
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
          name: 'bulletPoints',
          title: 'Bullet Points',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'cta',
          title: 'CTA Button',
          type: 'cta',
          validation: (Rule) => Rule.required(),
        }),
        imageWithAlt('image', 'Image'),
      ],
    }),
  ],
  preview: {select: {title: 'title'}},
})
