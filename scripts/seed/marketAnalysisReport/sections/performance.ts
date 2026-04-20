import type { SanityImageReference } from "../../client.js";

const img = (ref?: SanityImageReference) => (ref ? { image: ref } : {});

interface Images {
  coconut?: SanityImageReference;
  creatine?: SanityImageReference;
  hemp?: SanityImageReference;
}

export function performanceSection(images: Images) {
  return {
    _key: "section-5",
    title: "Performance & Hydration",
    accent: "bg-brand-green",
    products: [
      {
        _key: "prod-5-0",
        ...img(images.coconut),
        badgeText: "Hydration",
        badgeColor: "cream",
        title: "Coconut Water Powder",
        description: "Natural electrolytes for hydration; clean taste for RTDs.",
        metaRows: [
          {
            _key: "row-5-0-0",
            entries: [
              { _key: "e-0", label: "Market", value: "$6.2B" },
              { _key: "e-1", label: "CAGR", value: "15.2%" },
            ],
          },
        ],
      },
      {
        _key: "prod-5-1",
        ...img(images.creatine),
        badgeText: "Strength",
        badgeColor: "cream",
        title: "Creatine Monohydrate",
        description: "Gold-standard for power & recovery; dissolves well in blends.",
        metaRows: [
          {
            _key: "row-5-1-0",
            entries: [{ _key: "e-0", label: "Use", value: "Performance sticks, daily drink mixes" }],
          },
        ],
      },
      {
        _key: "prod-5-2",
        ...img(images.hemp),
        badgeText: "Protein",
        badgeColor: "cream",
        title: "Hemp Protein Powder",
        description: "Plant protein with ALA omega-3s; allergen-friendly.",
        metaRows: [
          {
            _key: "row-5-2-0",
            entries: [
              { _key: "e-0", label: "Market", value: "$173M" },
              { _key: "e-1", label: "CAGR", value: "5%" },
            ],
          },
        ],
      },
    ],
  };
}
