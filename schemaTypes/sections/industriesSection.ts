import { defineField, defineType } from "sanity";

export const industriesSection = defineType({
  name: "industriesSection",
  title: "Industries Section",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({
      name: "industries",
      title: "Industries",
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
  ],
  preview: { select: { title: "heading" } },
});
