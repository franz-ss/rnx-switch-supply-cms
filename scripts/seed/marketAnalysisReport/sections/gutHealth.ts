import type { SanityImageReference } from "../../client.js";

const img = (ref?: SanityImageReference) => (ref ? { image: ref } : {});

interface Images {
  collagen?: SanityImageReference;
  boneBroth?: SanityImageReference;
  inulin?: SanityImageReference;
  greenBanana?: SanityImageReference;
}

export function gutHealthSection(images: Images) {
  return {
    _key: "section-3",
    title: "Gut Health & Beauty",
    accent: "bg-brand-sky",
    products: [
      {
        _key: "prod-3-0",
        ...img(images.collagen),
        badgeText: "Beauty & Gut",
        badgeColor: "mist",
        title: "Collagen Peptides",
        description: "Skin elasticity & gut-lining support; powder and RTD ready.",
        metaRows: [
          {
            _key: "row-3-0-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Marine (Wild-Caught) / Bovine (Grass-Fed)" }],
          },
          {
            _key: "row-3-0-1",
            entries: [
              { _key: "e-0", label: "CAGR", value: "10.2%" },
              { _key: "e-1", label: "Blend", value: "Glow & Gut Harmony" },
            ],
          },
        ],
      },
      {
        _key: "prod-3-1",
        ...img(images.boneBroth),
        badgeText: "Protein",
        badgeColor: "mist",
        title: "Bone Broth Protein",
        description: "Amino acids for gut repair; savoury and neutral options.",
        metaRows: [
          {
            _key: "row-3-1-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Grass-Fed Bovine" }],
          },
          {
            _key: "row-3-1-1",
            entries: [{ _key: "e-0", label: "Use", value: "Sipping blends, soups, savoury RTDs" }],
          },
        ],
      },
      {
        _key: "prod-3-2",
        ...img(images.inulin),
        badgeText: "Prebiotic",
        badgeColor: "mist",
        title: "Inulin (Chicory Root)",
        description: "Gentle prebiotic fibre; easy to formulate.",
        metaRows: [
          {
            _key: "row-3-2-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Europe (Belgium, Netherlands)" }],
          },
          {
            _key: "row-3-2-1",
            entries: [{ _key: "e-0", label: "Use", value: "Smoothies, sachets, bars" }],
          },
        ],
      },
      {
        _key: "prod-3-3",
        ...img(images.greenBanana),
        badgeText: "Resistant Starch",
        badgeColor: "mist",
        title: "Green Banana Powder",
        description: "Prebiotic resistant starch for gut & glucose support.",
        metaRows: [
          {
            _key: "row-3-3-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Australia, Philippines" }],
          },
          {
            _key: "row-3-3-1",
            entries: [
              { _key: "e-0", label: "Market", value: "$714M" },
              { _key: "e-1", label: "CAGR", value: "4.8%" },
            ],
          },
        ],
      },
    ],
  };
}
