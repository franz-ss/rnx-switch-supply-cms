import {defineField, defineType} from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      kind: 'link.kind',
      staticRoute: 'link.staticRoute',
      externalUrl: 'link.externalUrl',
      emailAddress: 'link.emailAddress',
      phoneNumber: 'link.phoneNumber',
    },
    prepare: ({
      title,
      kind,
      staticRoute,
      externalUrl,
      emailAddress,
      phoneNumber,
    }: {
      title?: string
      kind?: string
      staticRoute?: string
      externalUrl?: string
      emailAddress?: string
      phoneNumber?: string
    }) => ({
      title: title ?? 'CTA',
      subtitle: externalUrl ?? staticRoute ?? emailAddress ?? phoneNumber ?? kind,
    }),
  },
})

