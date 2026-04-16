import { defineField, defineType } from "sanity";

const ctaField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({ name: "label", title: "Label", type: "string", validation: (R) => R.required() }),
      defineField({ name: "href", title: "URL", type: "string", validation: (R) => R.required() }),
    ],
  });

const imageWithAlt = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({ name: "alt", title: "Alt Text", type: "string", validation: (R) => R.required() }),
    ],
  });

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string", validation: (R) => R.required() }),
    defineField({ name: "subheading", title: "Subheading", type: "text" }),
    ctaField("primaryCta", "Primary CTA"),
    ctaField("secondaryCta", "Secondary CTA"),
    defineField({ name: "trustBullets", title: "Trust Bullets", type: "array", of: [{ type: "string" }] }),
    imageWithAlt("backgroundImage", "Background Image"),
  ],
  preview: { select: { title: "headline" } },
});
