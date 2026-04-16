import { defineField, defineType } from "sanity";

export const marketReportBanner = defineType({
  name: "marketReportBanner",
  title: "Market Report Banner",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
  ],
  preview: { select: { title: "heading" } },
});
