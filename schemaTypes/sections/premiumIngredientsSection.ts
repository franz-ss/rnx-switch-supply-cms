import { defineField, defineType } from "sanity";
import { imageWithAlt } from "./_shared";

export const premiumIngredientsSection = defineType({
  name: "premiumIngredientsSection",
  title: "Premium Ingredients Section",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "heading", type: "string", validation: (R) => R.required() }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "icon", title: "Icon (kebab-case Lucide name)", type: "string", validation: (R) => R.required() }),
          defineField({ name: "title", type: "string", validation: (R) => R.required() }),
          defineField({ name: "description", type: "text" }),
        ],
        preview: { select: { title: "title" } },
      }],
    }),
    imageWithAlt("imageOne", "Image 1"),
    imageWithAlt("imageTwo", "Image 2"),
    defineField({ name: "ctaLabel", type: "string" }),
  ],
  preview: { select: { title: "heading" } },
});
