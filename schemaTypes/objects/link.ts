import {defineField, defineType} from 'sanity'

export const staticRouteOptions = [
  {title: 'Home', value: '/'},
  {title: 'About', value: '/about'},
  {title: 'Ingredients', value: '/ingredients'},
  {title: 'Ingredients / Certified Organic', value: '/ingredients/certified-organic'},
  {title: 'Ingredients / Herbs & Botanicals', value: '/ingredients/herbs-botanicals-spices'},
  {title: 'Ingredients / Extracts & Superfoods', value: '/ingredients/extract-powders-superfoods'},
  {title: 'Ingredients / Sweeteners', value: '/ingredients/sweeteners'},
  {title: 'Ingredients / Juices & Puree', value: '/ingredients/juices-puree'},
  {title: 'Contact', value: '/contact'},
  {title: 'Quality', value: '/quality'},
  {title: 'Quality / Certifications', value: '/quality#certifications'},
  {title: 'Private Label', value: '/private-label'},
  {title: 'Market Analysis Report', value: '/market-analysis-report'},
  {title: 'Blog', value: '/blog'},
  {title: 'Blog / Functional Nutrition Demand', value: '/blog/functional-nutrition-demand'},
  {title: 'Blog / Supply Chain Volatility', value: '/blog/supply-chain-volatility'},
  {title: 'Blog / Clean Label Reformulation', value: '/blog/clean-label-reformulation'},
  {title: 'Blog / Sustainability Traceability', value: '/blog/sustainability-traceability'},
]

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'kind',
      title: 'Link Type',
      type: 'string',
      initialValue: 'static',
      options: {
        layout: 'radio',
        list: [
          {title: 'Internal Document', value: 'internal'},
          {title: 'Static Route', value: 'static'},
          {title: 'External URL', value: 'external'},
          {title: 'Email', value: 'email'},
          {title: 'Phone', value: 'phone'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internal',
      title: 'Internal Document',
      type: 'reference',
      to: [
        {type: 'homePage'},
        {type: 'certifiedOrganicPage'},
        {type: 'privateLabelPage'},
        {type: 'marketAnalysisReport'},
        {type: 'ingredientCategory'},
        {type: 'blogPost'},
      ],
      hidden: ({parent}) => parent?.kind !== 'internal',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {kind?: string} | undefined

          return parent?.kind === 'internal' && !value ? 'Select an internal document' : true
        }),
    }),
    defineField({
      name: 'staticRoute',
      title: 'Static Route',
      type: 'string',
      options: {list: staticRouteOptions},
      hidden: ({parent}) => parent?.kind !== 'static',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {kind?: string} | undefined

          return parent?.kind === 'static' && !value ? 'Select a static route' : true
        }),
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({parent}) => parent?.kind !== 'external',
      validation: (Rule) =>
        Rule.uri({scheme: ['https']}).custom((value, context) => {
          const parent = context.parent as {kind?: string} | undefined

          return parent?.kind === 'external' && !value ? 'Enter an external URL' : true
        }),
    }),
    defineField({
      name: 'emailAddress',
      title: 'Email Address',
      type: 'email',
      hidden: ({parent}) => parent?.kind !== 'email',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {kind?: string} | undefined

          return parent?.kind === 'email' && !value ? 'Enter an email address' : true
        }),
    }),
    defineField({
      name: 'emailSubject',
      title: 'Email Subject',
      type: 'string',
      hidden: ({parent}) => parent?.kind !== 'email',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      hidden: ({parent}) => parent?.kind !== 'phone',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {kind?: string} | undefined

          return parent?.kind === 'phone' && !value ? 'Enter a phone number' : true
        }),
    }),
  ],
  preview: {
    select: {
      kind: 'kind',
      staticRoute: 'staticRoute',
      externalUrl: 'externalUrl',
      emailAddress: 'emailAddress',
      phoneNumber: 'phoneNumber',
      internalType: 'internal._type',
    },
    prepare: ({
      kind,
      staticRoute,
      externalUrl,
      emailAddress,
      phoneNumber,
      internalType,
    }: {
      kind?: string
      staticRoute?: string
      externalUrl?: string
      emailAddress?: string
      phoneNumber?: string
      internalType?: string
    }) => ({
      title:
        kind === 'external'
          ? externalUrl
          : kind === 'email'
            ? emailAddress
            : kind === 'phone'
              ? phoneNumber
              : kind === 'internal'
                ? (internalType ?? 'Internal document')
                : staticRoute,
      subtitle: kind,
    }),
  },
})
