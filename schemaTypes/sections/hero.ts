import { defineField, defineType } from "sanity";
import { ctaField, imageWithAlt } from "./_shared";

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
