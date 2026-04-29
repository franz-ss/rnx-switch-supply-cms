import { defineField, defineType } from "sanity";
import { ctaField, imageWithAlt } from "./_shared";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Internal Title",
      type: "string",
      description:
        "Used only in the Studio (e.g. 'Hero / Default'). Not shown on the page.",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({ name: "subheading", title: "Subheading", type: "text" }),
    ctaField("primaryCta", "Primary CTA"),
    ctaField("secondaryCta", "Secondary CTA"),
    defineField({
      name: "trustBullets",
      title: "Trust Bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    imageWithAlt("backgroundImage", "Background Image"),
  ],
  preview: { select: { title: "title", subtitle: "headline" } },
});
