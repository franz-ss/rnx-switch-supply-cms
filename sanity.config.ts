import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {iconPicker} from 'sanity-plugin-icon-picker'

import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'switch-supply',
  title: 'Switch Supply',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [
    iconPicker(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .schemaType('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('Certified Organic Page')
              .id('certifiedOrganicPage')
              .schemaType('certifiedOrganicPage')
              .child(
                S.document().schemaType('certifiedOrganicPage').documentId('certifiedOrganicPage'),
              ),
            S.listItem()
              .title('Market Analysis Report')
              .id('marketAnalysisReport')
              .schemaType('marketAnalysisReport')
              .child(
                S.document().schemaType('marketAnalysisReport').documentId('marketAnalysisReport'),
              ),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .schemaType('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('ingredientCategory').title('Ingredient Categories'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
          ]),
    }),
    visionTool(),
  ],
  schema: {types: schemaTypes},
})
