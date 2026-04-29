import { defineField, defineType } from "sanity";
import { BookOpen } from "lucide-react";
import { imageWithAlt } from "./sections/_shared";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  icon: BookOpen,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (R) => R.required(),
    }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({
      name: "categoryColor",
      title: "Category Color",
      type: "string",
      options: {
        list: [
          { title: "Gray", value: "gray" },
          { title: "Mist", value: "mist" },
          { title: "Cream", value: "cream" },
          { title: "Green", value: "green" },
          { title: "Amber", value: "amber" },
          { title: "Purple", value: "purple" },
        ],
      },
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    imageWithAlt("heroImage", "Hero Image"),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              defineField({
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({ name: "href", title: "URL", type: "url" }),
                ],
              }),
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "citations",
      title: "Citations",
      type: "array",
      of: [
        {
          type: "object",
          preview: { select: { title: "label" } },
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (R) => R.required(),
            }),
            defineField({ name: "href", title: "URL", type: "url" }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "heroImage" },
  },
});
