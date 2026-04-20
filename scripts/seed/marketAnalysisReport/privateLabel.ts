import type { SanityImageReference } from "../client.js";

function img(ref: SanityImageReference | undefined): { image: SanityImageReference } | Record<string, never> {
  return ref ? { image: ref } : {};
}

export function buildPrivateLabel(
  plTeamImage: SanityImageReference | undefined,
  sachetsImage: SanityImageReference | undefined,
) {
  return {
    privateLabelBulkSupply: {
      eyebrow: "Partner With Switch Supply",
      heading: "Bulk Supply • Private Label • R&D Support",
      body: "Switch Supply provides certified organic, non-GMO and premium standardised extracts, adaptogens and functional ingredients for private label and bulk wholesale. We support formulation, flavour matching, packaging and export documentation.",
      ctaLabel: "Start a Private Label Project",
      ctaHref: "mailto:info@switchsupply.com?subject=Private%20Label%20Enquiry",
      disclaimer:
        "Note: Statements are for B2B informational purposes. Check local regulations for claims and compliance.",
      ...img(plTeamImage),
    },

    privateLabelSachetService: {
      eyebrow: "Private Label Sachet Service",
      heading: "Premium Custom Sachets — Designed & Produced by Switch Supply",
      subheading:
        "Switch Supply offers full-service sachet production for collagen powders, functional blends, teas, and superfoods. Elevate your brand with ready-to-fill or branded sachets tailored to your market.",
      bulletPoints: [
        "Custom printed sachets and stick packs",
        "Flexible sizes from 5g to 25g per serve",
        "Available for collagen, superfoods, tea, and functional blends",
        "Export-ready with your branding and formulation",
      ],
      tagline: "Ask us how to create your own sachet range today.",
      ctaLabel: "Contact Our Team",
      ctaHref: "mailto:info@switchsupply.com?subject=Private%20Label%20Sachets%20Enquiry",
      ...img(sachetsImage),
    },
  };
}
