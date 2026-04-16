import { defineField, defineType } from "sanity";

export const certificationSection = defineType({
  name: "certificationSection",
  title: "Certification Section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
          defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            fields: [defineField({ name: "alt", title: "Alt Text", type: "string", validation: (R) => R.required() })],
          }),
        ],
        preview: { select: { title: "name" } },
      }],
    }),
  ],
  preview: { select: { title: "heading" } },
});
