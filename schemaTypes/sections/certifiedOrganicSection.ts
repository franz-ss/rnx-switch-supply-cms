import { defineField, defineType } from "sanity";
import { imageWithAlt } from "./_shared";

export const certifiedOrganicSection = defineType({
  name: "certifiedOrganicSection",
  title: "Certified Organic Section",
  type: "object",
  fields: [
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "icon", title: "Icon", type: "iconPicker" }),
          defineField({ name: "title", type: "string", validation: (R) => R.required() }),
          defineField({ name: "description", type: "text" }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
    defineField({ name: "label", type: "string" }),
    defineField({ name: "heading", type: "string", validation: (R) => R.required() }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "ctaLabel", type: "string" }),
    defineField({
      name: "supplyChainImage",
      title: "Supply Chain Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", validation: (R) => R.required() })],
    }),
    defineField({ name: "organicHeading", type: "string" }),
    defineField({ name: "organicDescription", type: "text" }),
    defineField({
      name: "organicCertifications",
      title: "Organic Certifications",
      type: "array",
      of: [{
        type: "object",
        fields: [
          imageWithAlt("logo", "Logo"),
          defineField({ name: "name", type: "string", validation: (R) => R.required() }),
          defineField({ name: "description", type: "text" }),
        ],
        preview: { select: { title: "name" } },
      }],
    }),
    defineField({ name: "viewCertificationsLabel", type: "string" }),
  ],
  preview: { select: { title: "heading" } },
});
