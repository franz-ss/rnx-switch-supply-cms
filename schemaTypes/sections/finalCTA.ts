import { defineField, defineType } from "sanity";

export const finalCTA = defineType({
  name: "finalCTA",
  title: "Final CTA",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({ name: "subheading", type: "text" }),
    defineField({ name: "benefits", title: "Benefits", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        defineField({ name: "label", type: "string" }),
        defineField({ name: "href", type: "string" }),
      ],
    }),
  ],
  preview: { select: { title: "heading" } },
});
