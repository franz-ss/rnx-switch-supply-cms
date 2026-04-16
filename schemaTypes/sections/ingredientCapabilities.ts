import { defineField, defineType } from "sanity";

export const ingredientCapabilities = defineType({
  name: "ingredientCapabilities",
  title: "Ingredient Capabilities",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "browseLabel", title: "Browse Label", type: "string" }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", type: "string", validation: (R) => R.required() }),
          defineField({ name: "description", type: "text" }),
          defineField({ name: "href", type: "string", validation: (R) => R.required() }),
          defineField({
            name: "image",
            type: "image",
            options: { hotspot: true },
            fields: [defineField({ name: "alt", type: "string", validation: (R) => R.required() })],
          }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
  ],
  preview: { select: { title: "heading" } },
});
