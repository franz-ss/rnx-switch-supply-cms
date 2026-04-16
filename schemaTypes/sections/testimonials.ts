import { defineField, defineType } from "sanity";

export const testimonialsSection = defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({ name: "subheading", type: "text" }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
  ],
  preview: { select: { title: "heading" } },
});
