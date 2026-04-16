import { defineField, defineType } from "sanity";

export const popularIngredients = defineType({
  name: "popularIngredients",
  title: "Popular Ingredients",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "reference", to: [{ type: "ingredientCategory" }] }],
    }),
    defineField({ name: "catalogueHref", type: "string" }),
    defineField({ name: "catalogueLabel", type: "string" }),
    defineField({ name: "trendingLabel", type: "string" }),
    defineField({ name: "viewSpecsLabel", type: "string" }),
  ],
  preview: { select: { title: "heading" } },
});
