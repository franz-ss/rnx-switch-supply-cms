import { defineField, defineType } from "sanity";
import { LeaveIcon } from "@sanity/icons";
import { imageWithAlt } from "./sections/_shared";

export const certifiedOrganicPage = defineType({
  name: "certifiedOrganicPage",
  title: "Certified Organic Page",
  type: "document",
  icon: LeaveIcon,
  fields: [
    defineField({ name: "title", title: "Internal Title", type: "string" }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string", validation: (R) => R.max(70) }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", validation: (R) => R.max(160) }),

    // ─── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string", validation: (R) => R.required() }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA URL", type: "string" }),
        imageWithAlt("backgroundImage", "Background Image"),
      ],
    }),

    // ─── Certifications ───────────────────────────────────────────────────────
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{
        type: "object",
        preview: { select: { title: "name" } },
        fields: [
          imageWithAlt("logo", "Logo"),
          defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
        ],
      }],
    }),

    // ─── Product Range ────────────────────────────────────────────────────────
    defineField({
      name: "productRange",
      title: "Product Range Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "categories",
          title: "Product Categories",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "title" } },
            fields: [
              defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
              defineField({ name: "description", title: "Description", type: "text" }),
              imageWithAlt("image", "Image"),
              defineField({ name: "products", title: "Products", type: "array", of: [{ type: "string" }] }),
            ],
          }],
        }),
        defineField({
          name: "qualityCommitments",
          title: "Quality Commitments",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "title" } },
            fields: [
              defineField({ name: "icon", title: "Icon", type: "iconPicker" }),
              defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
              defineField({ name: "description", title: "Description", type: "string" }),
            ],
          }],
        }),
      ],
    }),

    // ─── Functional Wellness Showcase ─────────────────────────────────────────
    defineField({
      name: "functionalShowcase",
      title: "Functional Wellness Showcase",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "products",
          title: "Products",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "name", subtitle: "category" } },
            fields: [
              defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
              defineField({ name: "category", title: "Category", type: "string" }),
              defineField({ name: "trending", title: "Trending", type: "boolean" }),
            ],
          }],
        }),
      ],
    }),

    // ─── Supply Chain ─────────────────────────────────────────────────────────
    defineField({
      name: "supplyChain",
      title: "Global Supply Chain Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({
          name: "metrics",
          title: "Metrics",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "value", subtitle: "label" } },
            fields: [
              defineField({ name: "value", title: "Value", type: "string", validation: (R) => R.required() }),
              defineField({ name: "label", title: "Label", type: "string" }),
              defineField({ name: "description", title: "Description", type: "text" }),
            ],
          }],
        }),
        defineField({
          name: "countries",
          title: "Import Countries",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "country", subtitle: "region" } },
            fields: [
              defineField({ name: "country", title: "Country", type: "string", validation: (R) => R.required() }),
              defineField({ name: "region", title: "Region", type: "string" }),
              defineField({ name: "flag", title: "Flag Emoji", type: "string" }),
            ],
          }],
        }),
      ],
    }),

    // ─── Trust Section ────────────────────────────────────────────────────────
    defineField({
      name: "trustSection",
      title: "Trust Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({
          name: "cards",
          title: "Trust Cards",
          type: "array",
          of: [{
            type: "object",
            preview: { select: { title: "title" } },
            fields: [
              defineField({ name: "icon", title: "Icon", type: "iconPicker" }),
              defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
              defineField({ name: "description", title: "Description", type: "text" }),
              defineField({ name: "bullets", title: "Bullet Points", type: "array", of: [{ type: "string" }] }),
              defineField({
                name: "accent",
                title: "Accent Color",
                type: "string",
                options: { list: [
                  { title: "Green", value: "green" },
                  { title: "Sky", value: "sky" },
                  { title: "Amber", value: "amber" },
                ]},
              }),
            ],
          }],
        }),
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
        defineField({ name: "benefits", title: "Benefits", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA URL", type: "string" }),
      ],
    }),
  ],
  preview: { select: { title: "title" } },
});
