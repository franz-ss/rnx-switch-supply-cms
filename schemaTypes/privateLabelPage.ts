// schemaTypes/privateLabelPage.ts
import { defineField, defineType } from "sanity";
import { Tag } from "lucide-react";
import { imageWithAlt, ctaField } from "./sections/_shared";

export const privateLabelPage = defineType({
  name: "privateLabelPage",
  title: "Private Label Page",
  type: "document",
  icon: Tag,
  fields: [
    defineField({ name: "title", title: "Internal Title", type: "string" }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (R) => R.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      validation: (R) => R.max(160),
    }),

    // ─── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        ctaField("cta", "CTA Button"),
        defineField({
          name: "bullets",
          title: "Bullet Points",
          type: "array",
          of: [{ type: "string" }],
        }),
        imageWithAlt("backgroundImage", "Background Image"),
        defineField({
          name: "galleryImages",
          title: "Gallery Images",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "image.alt", media: "image.image" } },
            fields: [imageWithAlt("image", "Image")],
          }],
        }),
      ],
    }),

    // ─── Global Ingredients ───────────────────────────────────────────────────
    defineField({
      name: "globalIngredients",
      title: "Global Ingredients",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        defineField({ name: "offerLabel", title: "Offer Label", type: "string" }),
        defineField({
          name: "offerItems",
          title: "Offer Items",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({ name: "footerText", title: "Footer Text", type: "string" }),
        defineField({
          name: "images",
          title: "Images",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "label", media: "image.image" } },
            fields: [
              imageWithAlt("image", "Image"),
              defineField({ name: "label", title: "Label", type: "string", validation: (R) => R.required() }),
              defineField({ name: "wide", title: "Wide", type: "boolean" }),
            ],
          }],
        }),
      ],
    }),

    // ─── Top Products ─────────────────────────────────────────────────────────
    defineField({
      name: "topProducts",
      title: "Top Products",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        defineField({
          name: "products",
          title: "Products",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "title", media: "image.image" } },
            fields: [
              imageWithAlt("image", "Image"),
              defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
              defineField({ name: "description", title: "Description", type: "text" }),
              defineField({
                name: "badges",
                title: "Badges",
                type: "array",
                of: [{ type: "string" }],
              }),
            ],
          }],
        }),
      ],
    }),

    // ─── NPD ──────────────────────────────────────────────────────────────────
    defineField({
      name: "npd",
      title: "New Product Development",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        defineField({
          name: "cards",
          title: "Cards",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "title", media: "image.image" } },
            fields: [
              imageWithAlt("image", "Image"),
              defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
              defineField({ name: "description", title: "Description", type: "text" }),
              ctaField("cta", "CTA Button"),
            ],
          }],
        }),
      ],
    }),

    // ─── Packaging Formats ────────────────────────────────────────────────────
    defineField({
      name: "packagingFormats",
      title: "Packaging Formats",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        defineField({
          name: "tabs",
          title: "Tabs",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "label" } },
            fields: [
              defineField({ name: "label", title: "Tab Label", type: "string", validation: (R) => R.required() }),
              defineField({
                name: "images",
                title: "Images",
                type: "array",
                of: [{
                  type: "object",
                  preview: { select: { title: "label", media: "image.image" } },
                  fields: [
                    imageWithAlt("image", "Image"),
                    defineField({ name: "label", title: "Caption", type: "string", validation: (R) => R.required() }),
                  ],
                }],
              }),
            ],
          }],
        }),
      ],
    }),

    // ─── Sustainable Packaging ────────────────────────────────────────────────
    defineField({
      name: "sustainablePackaging",
      title: "Sustainable Packaging",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        imageWithAlt("image", "Image"),
        defineField({
          name: "items",
          title: "Benefit Items",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),

    // ─── Mid CTA ──────────────────────────────────────────────────────────────
    defineField({
      name: "midCta",
      title: "Mid CTA",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        ctaField("cta", "CTA Button"),
      ],
    }),

    // ─── Trending ─────────────────────────────────────────────────────────────
    defineField({
      name: "trending",
      title: "What's Trending",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        defineField({
          name: "featuredPost",
          title: "Featured Post",
          type: "object",
          fields: [
            imageWithAlt("image", "Image"),
            defineField({ name: "category", title: "Category", type: "string" }),
            defineField({
              name: "categoryColor",
              title: "Category Badge Color",
              type: "string",
              options: {
                list: [
                  { title: "Green", value: "green" },
                  { title: "Mist", value: "mist" },
                  { title: "Cream", value: "cream" },
                ],
              },
            }),
            defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
            defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
            ctaField("cta", "CTA Button"),
          ],
        }),
        defineField({
          name: "posts",
          title: "Side Posts",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "title" } },
            fields: [
              defineField({ name: "category", title: "Category", type: "string" }),
              defineField({
                name: "categoryColor",
                title: "Category Badge Color",
                type: "string",
                options: {
                  list: [
                    { title: "Green", value: "green" },
                    { title: "Mist", value: "mist" },
                    { title: "Cream", value: "cream" },
                  ],
                },
              }),
              defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
              defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
              ctaField("cta", "CTA Button"),
            ],
          }],
        }),
      ],
    }),

    // ─── Testimonials Section ─────────────────────────────────────────────────
    // Heading/subheading only — testimonial documents are queried separately
    defineField({
      name: "testimonialsSection",
      title: "Testimonials Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
      ],
    }),

    // ─── Final CTA ────────────────────────────────────────────────────────────
    defineField({
      name: "finalCta",
      title: "Final CTA",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        ctaField("cta", "CTA Button"),
        imageWithAlt("backgroundImage", "Background Image"),
      ],
    }),
  ],
  preview: { select: { title: "title" } },
});
