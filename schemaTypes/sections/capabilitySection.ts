import { defineField, defineType } from "sanity";

export const capabilitySection = defineType({
  name: "capabilitySection",
  title: "Capability Section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "icon", title: "Icon (kebab-case Lucide name)", type: "string", validation: (R) => R.required() }),
          defineField({ name: "number", title: "Number / Value", type: "string", validation: (R) => R.required() }),
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "sublabel", title: "Sub-label", type: "string" }),
        ],
        preview: { select: { title: "label" } },
      }],
    }),
  ],
  preview: { select: { title: "heading" } },
});
