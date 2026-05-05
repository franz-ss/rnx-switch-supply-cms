// schemaTypes/privateLabelPage.ts
import {defineField, defineType} from 'sanity'
import {Tag} from 'lucide-react'
import {imageWithAlt} from '../../objects/imageWithAlt'

export const privateLabelPage = defineType({
  name: 'privateLabelPage',
  title: 'Private Label Page',
  type: 'document',
  icon: Tag,
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
        defineField({
          name: 'bullets',
          title: 'Bullet Points',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [{type: 'string'}],
        }),
        imageWithAlt('backgroundImage', 'Background Image'),
        defineField({
          name: 'galleryImages',
          title: 'Gallery Images',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'image.alt', media: 'image.image'}},
              fields: [imageWithAlt('image', 'Image')],
            },
          ],
        }),
      ],
    }),

    // ─── Global Ingredients ───────────────────────────────────────────────────
    defineField({
      name: 'globalIngredients',
      title: 'Global Ingredients',
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
          name: 'offerLabel',
          title: 'Offer Label',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'offerItems',
          title: 'Offer Items',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'footerText',
          title: 'Footer Text',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'label', media: 'image.image'}},
              fields: [
                imageWithAlt('image', 'Image'),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'wide',
                  title: 'Wide',
                  type: 'boolean',
                  initialValue: false,
                  validation: (R) => R.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── Top Products ─────────────────────────────────────────────────────────
    defineField({
      name: 'topProducts',
      title: 'Top Products',
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
          name: 'products',
          title: 'Products',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'title', media: 'image.image'}},
              fields: [
                imageWithAlt('image', 'Image'),
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
                  name: 'badges',
                  title: 'Badges',
                  type: 'array',
                  validation: (R) => R.required().min(1),
                  of: [{type: 'string'}],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── NPD ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'npd',
      title: 'New Product Development',
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
          name: 'cards',
          title: 'Cards',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'title', media: 'image.image'}},
              fields: [
                imageWithAlt('image', 'Image'),
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
                  name: 'cta',
                  title: 'CTA Button',
                  type: 'cta',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── Packaging Formats ────────────────────────────────────────────────────
    defineField({
      name: 'packagingFormats',
      title: 'Packaging Formats',
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
          name: 'tabs',
          title: 'Tabs',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'label'}},
              fields: [
                defineField({
                  name: 'label',
                  title: 'Tab Label',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'images',
                  title: 'Images',
                  type: 'array',
                  validation: (R) => R.required().min(1),
                  of: [
                    {
                      type: 'object',
                      preview: {select: {title: 'label', media: 'image.image'}},
                      fields: [
                        imageWithAlt('image', 'Image'),
                        defineField({
                          name: 'label',
                          title: 'Caption',
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
    }),

    // ─── Sustainable Packaging ────────────────────────────────────────────────
    defineField({
      name: 'sustainablePackaging',
      title: 'Sustainable Packaging',
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
        imageWithAlt('image', 'Image'),
        defineField({
          name: 'items',
          title: 'Benefit Items',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [{type: 'string'}],
        }),
      ],
    }),

    // ─── Mid CTA ──────────────────────────────────────────────────────────────
    defineField({
      name: 'midCta',
      title: 'Mid CTA',
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
      ],
    }),

    // ─── Trending ─────────────────────────────────────────────────────────────
    defineField({
      name: 'trending',
      title: "What's Trending",
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
          name: 'featuredPost',
          title: 'Featured Post',
          type: 'object',
          validation: (R) => R.required(),
          fields: [
            imageWithAlt('image', 'Image'),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'categoryColor',
              title: 'Category Badge Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Green', value: 'green'},
                  {title: 'Mist', value: 'mist'},
                  {title: 'Cream', value: 'cream'},
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
              name: 'excerpt',
              title: 'Excerpt',
              type: 'text',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'cta',
              title: 'CTA Button',
              type: 'cta',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'posts',
          title: 'Side Posts',
          type: 'array',
          validation: (R) => R.required().min(1),
          of: [
            {
              type: 'object',
              preview: {select: {title: 'title'}},
              fields: [
                defineField({
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'categoryColor',
                  title: 'Category Badge Color',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Green', value: 'green'},
                      {title: 'Mist', value: 'mist'},
                      {title: 'Cream', value: 'cream'},
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
                  name: 'excerpt',
                  title: 'Excerpt',
                  type: 'text',
                  validation: (R) => R.required(),
                }),
                defineField({
                  name: 'cta',
                  title: 'CTA Button',
                  type: 'cta',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── Testimonials ─────────────────────────────────────────────────
    // Heading/subheading only — testimonial documents are queried separately
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials',
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
          name: 'cta',
          title: 'CTA Button',
          type: 'cta',
          validation: (Rule) => Rule.required(),
        }),
        imageWithAlt('backgroundImage', 'Background Image'),
      ],
    }),
  ],
  preview: {select: {title: 'title'}},
})
