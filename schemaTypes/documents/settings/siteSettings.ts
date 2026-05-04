import {defineField, defineType} from 'sanity'
import {Settings} from 'lucide-react'
import {linkField} from '../../objects/link'

const navLinkType = {
  type: 'object' as const,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => Rule.required(),
    }),
    linkField('link', 'Link'),
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
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    linkField('phoneLink', 'Phone Link'),
    defineField({name: 'email', title: 'Contact Email', type: 'string'}),
    linkField('emailLink', 'Email Link'),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Used in the footer',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [navLinkType],
    }),
    defineField({
      name: 'productLinks',
      title: 'Footer: Product Links',
      type: 'array',
      of: [navLinkType],
    }),
    defineField({
      name: 'companyLinks',
      title: 'Footer: Company Links',
      type: 'array',
      of: [navLinkType],
    }),
  ],
})
