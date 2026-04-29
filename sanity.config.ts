import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool, defineLocations} from 'sanity/presentation'
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
              .title('Private Label Page')
              .id('privateLabelPage')
              .schemaType('privateLabelPage')
              .child(
                S.document().schemaType('privateLabelPage').documentId('privateLabelPage'),
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
            S.documentTypeListItem('blogPost').title('Blog Posts'),
          ]),
    }),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL ?? 'http://localhost:3000',
        previewMode: {
          enable: `/api/draft-mode/enable?secret=${process.env.SANITY_STUDIO_PREVIEW_SECRET}`,
        },
      },
      resolve: {
        locations: {
          homePage: defineLocations({
            select: {title: 'title'},
            resolve: () => ({locations: [{title: 'Home', href: '/'}]}),
          }),
          certifiedOrganicPage: defineLocations({
            select: {title: 'title'},
            resolve: () => ({
              locations: [{title: 'Certified Organic', href: '/ingredients/certified-organic'}],
            }),
          }),
          privateLabelPage: defineLocations({
            select: {title: 'title'},
            resolve: () => ({
              locations: [{title: 'Private Label', href: '/private-label'}],
            }),
          }),
          marketAnalysisReport: defineLocations({
            select: {title: 'title'},
            resolve: () => ({
              locations: [{title: 'Market Analysis Report', href: '/market-analysis-report'}],
            }),
          }),
          siteSettings: defineLocations({
            select: {title: 'title'},
            resolve: () => ({
              locations: [
                {title: 'Home', href: '/'},
                {title: 'Certified Organic', href: '/ingredients/certified-organic'},
                {title: 'Market Analysis Report', href: '/market-analysis-report'},
              ],
            }),
          }),
          ingredientCategory: defineLocations({
            select: {title: 'title', slug: 'slug.current'},
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title ?? 'Ingredient Category',
                  href: `/ingredients/${doc?.slug}`,
                },
              ],
            }),
          }),
          blogPost: defineLocations({
            select: { title: 'title', slug: 'slug.current' },
            resolve: (doc) => ({
              locations: [{ title: doc?.title ?? 'Blog Post', href: `/blog/${doc?.slug}` }],
            }),
          }),
        },
      },
    }),
    visionTool(),
  ],
  schema: {types: schemaTypes},
})
