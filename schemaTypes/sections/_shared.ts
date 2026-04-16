import { defineField } from "sanity";

export const imageWithAlt = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt Text",
        type: "string",
        validation: (R) => R.required(),
      }),
    ],
  });

export const ctaField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({
        name: "label",
        title: "Label",
        type: "string",
        validation: (R) => R.required(),
      }),
      defineField({
        name: "href",
        title: "URL",
        type: "string",
        validation: (R) => R.required(),
      }),
    ],
  });
