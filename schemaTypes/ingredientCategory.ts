import { Tag } from "lucide-react";
import { defineField, defineType } from "sanity";

export const ingredientCategory = defineType({
  name: "ingredientCategory",
  icon: Tag,
  title: "Ingredient Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short phrase used in SEO and page eyebrow text",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredIngredients",
      title: "Featured Ingredients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Name",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),
    defineField({
      name: "applications",
      title: "Common Applications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
