import { defineField, defineType } from "sanity";
import { TrendingUp } from "lucide-react";
import { imageWithAlt } from "./sections/_shared";

export const marketAnalysisReport = defineType({
  name: "marketAnalysisReport",
  icon: TrendingUp,
  title: "Market Analysis Report",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Internal Title", type: "string" }),

    // ─── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text" }),
        defineField({
          name: "badges",
          title: "Badges",
          type: "array",
          of: [
            {
              type: "object",
              preview: { select: { title: "label" } },
              fields: [
                defineField({ name: "icon", title: "Icon", type: "iconPicker" }),
                defineField({ name: "label", title: "Label", type: "string" }),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── Strategic Implications ───────────────────────────────────────────────
    defineField({
      name: "strategicImplications",
      title: "Strategic Implications",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "opportunities",
          title: "Opportunities",
          type: "array",
          of: [
            {
              type: "object",
              preview: { select: { title: "heading" } },
              fields: [
                defineField({ name: "emoji", title: "Emoji", type: "string" }),
                defineField({ name: "heading", title: "Heading", type: "string" }),
                defineField({ name: "body", title: "Body", type: "text" }),
              ],
            },
          ],
        }),
        defineField({
          name: "whyChooseHeading",
          title: "Why Choose Heading",
          type: "string",
        }),
        defineField({
          name: "whyChooseItems",
          title: "Why Choose Items",
          type: "array",
          of: [
            {
              type: "object",
              preview: { select: { title: "bold" } },
              fields: [
                defineField({ name: "bold", title: "Bold Text", type: "string" }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // ─── Product Catalog ──────────────────────────────────────────────────────
    defineField({
      name: "productCatalog",
      title: "Product Catalog",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "sections",
          title: "Sections",
          type: "array",
          of: [
            {
              type: "object",
              preview: { select: { title: "title" } },
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({
                  name: "accent",
                  title: "Accent Color",
                  type: "string",
                  options: {
                    list: [
                      { title: "Green", value: "bg-brand-green" },
                      { title: "Green Dark", value: "bg-brand-green-dark" },
                      { title: "Sky", value: "bg-brand-sky" },
                      { title: "Mist", value: "bg-brand-mist" },
                    ],
                  },
                }),
                defineField({
                  name: "products",
                  title: "Products",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      preview: { select: { title: "title" } },
                      fields: [
                        imageWithAlt("image", "Image"),
                        defineField({
                          name: "badgeText",
                          title: "Badge Text",
                          type: "string",
                        }),
                        defineField({
                          name: "badgeColor",
                          title: "Badge Color",
                          type: "string",
                          options: {
                            list: [
                              { title: "Cream", value: "cream" },
                              { title: "Mist", value: "mist" },
                            ],
                          },
                        }),
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({
                          name: "description",
                          title: "Description",
                          type: "text",
                        }),
                        defineField({
                          name: "metaRows",
                          title: "Meta Rows",
                          type: "array",
                          of: [
                            {
                              type: "object",
                              preview: { select: { title: "entries.0.label" } },
                              fields: [
                                defineField({
                                  name: "entries",
                                  title: "Entries",
                                  type: "array",
                                  of: [
                                    {
                                      type: "object",
                                      fields: [
                                        defineField({
                                          name: "label",
                                          title: "Label",
                                          type: "string",
                                        }),
                                        defineField({
                                          name: "value",
                                          title: "Value",
                                          type: "string",
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
      name: "brands",
      title: "Emerging Brands",
      type: "array",
      of: [
        {
          type: "object",
          preview: { select: { title: "name", subtitle: "category" } },
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "category", title: "Category", type: "string" }),
            defineField({ name: "tagline", title: "Tagline", type: "text" }),
            defineField({ name: "innovation", title: "Innovation", type: "text" }),
            defineField({
              name: "accent",
              title: "Accent Color",
              type: "string",
              options: {
                list: [
                  { title: "Green", value: "green" },
                  { title: "Amber", value: "amber" },
                  { title: "Purple", value: "purple" },
                  { title: "Rose", value: "rose" },
                  { title: "Teal", value: "teal" },
                  { title: "Neutral", value: "neutral" },
                ],
              },
            }),
          ],
        },
      ],
    }),

    // ─── Private Label Bulk Supply ────────────────────────────────────────────
    defineField({
      name: "privateLabelBulkSupply",
      title: "Private Label Bulk Supply",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text" }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA Href", type: "string" }),
        defineField({ name: "disclaimer", title: "Disclaimer", type: "text" }),
        imageWithAlt("image", "Image"),
      ],
    }),

    // ─── Private Label Sachet Service ─────────────────────────────────────────
    defineField({
      name: "privateLabelSachetService",
      title: "Private Label Sachet Service",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        defineField({
          name: "bulletPoints",
          title: "Bullet Points",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({ name: "tagline", title: "Tagline", type: "string" }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA Href", type: "string" }),
        imageWithAlt("image", "Image"),
      ],
    }),
  ],
  preview: { select: { title: "title" } },
});
