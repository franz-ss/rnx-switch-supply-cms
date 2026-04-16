import { defineField, defineType } from "sanity";
import { imageWithAlt } from "./_shared";

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
          imageWithAlt("logo", "Logo"),
        ],
        preview: { select: { title: "name" } },
      }],
    }),
  ],
  preview: { select: { title: "heading" } },
});
