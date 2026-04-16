import { defineField, defineType } from "sanity";
import { imageWithAlt } from "./_shared";

export const privateLabelSection = defineType({
  name: "privateLabelSection",
  title: "Private Label Section",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (R) => R.required() }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "moqLabel", type: "string" }),
    defineField({ name: "moqValue", type: "string" }),
    defineField({ name: "capabilitiesHeading", type: "string" }),
    defineField({ name: "capabilities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "ctaLabel", type: "string" }),
    imageWithAlt("showcaseImage", "Showcase Image"),
    defineField({ name: "packagingHeading", type: "string" }),
    defineField({ name: "packagingDescription", type: "text" }),
    defineField({
      name: "packagingOptions",
      title: "Packaging Options",
      type: "array",
      of: [{
        type: "object",
        fields: [
          imageWithAlt("image", "Image"),
          defineField({ name: "title", type: "string", validation: (R) => R.required() }),
          defineField({ name: "description", type: "text" }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
    defineField({ name: "packagingNote", type: "string" }),
  ],
  preview: { select: { title: "heading" } },
});
