import {defineField, defineType} from 'sanity'
import {Settings} from 'lucide-react'

const navLinkType = {
  type: 'object' as const,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {select: {title: 'label', subtitle: 'link.staticRoute'}},
}

export const siteSettings = defineType({
  name: 'siteSettings',
  icon: Settings,
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneLink',
      title: 'Phone Link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emailLink',
      title: 'Email Link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Used in the footer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [navLinkType],
    }),
    defineField({
      name: 'productLinks',
      title: 'Footer: Product Links',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [navLinkType],
    }),
    defineField({
      name: 'companyLinks',
      title: 'Footer: Company Links',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [navLinkType],
    }),
  ],
})
