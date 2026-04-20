import type { SanityImageReference } from "../../client.js";

const img = (ref?: SanityImageReference) => (ref ? { image: ref } : {});

interface Images {
  lTheanine?: SanityImageReference;
  blackMaca?: SanityImageReference;
  bacopa?: SanityImageReference;
}

export function nootropicsSection(images: Images) {
  return {
    _key: "section-0",
    title: "Nootropics & Cognitive Health",
    accent: "bg-brand-green",
    products: [
      {
        _key: "prod-0-0",
        ...img(images.lTheanine),
        badgeText: "Beverage-Friendly",
        badgeColor: "cream",
        title: "L-Theanine",
        description: "Calm alertness & caffeine synergy; perfect for drinks.",
        metaRows: [
          {
            _key: "row-0-0-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Japan (Green Tea)" }],
          },
          {
            _key: "row-0-0-1",
            entries: [{ _key: "e-0", label: "Use", value: "Focus beverages (100-200 mg per serve) paired with caffeine" }],
          },
        ],
      },
      {
        _key: "prod-0-1",
        ...img(images.blackMaca),
        badgeText: "Endurance",
        badgeColor: "cream",
        title: "Black Maca",
        description: "Energy, mood and vitality support; pairs with caffeine-free focus blends.",
        metaRows: [
          {
            _key: "row-0-1-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Peru (Andean Highlands)" }],
          },
          {
            _key: "row-0-1-1",
            entries: [
              { _key: "e-0", label: "CAGR", value: "6.1%" },
              { _key: "e-1", label: "Use", value: "Focus & vitality capsules" },
            ],
          },
        ],
      },
      {
        _key: "prod-0-2",
        ...img(images.bacopa),
        badgeText: "Memory",
        badgeColor: "cream",
        title: "Bacopa Monnieri",
        description: "Learning & memory support for long-term wellness.",
        metaRows: [
          {
            _key: "row-0-2-0",
            entries: [{ _key: "e-0", label: "Origin", value: "India" }],
          },
          {
            _key: "row-0-2-1",
            entries: [{ _key: "e-0", label: "Use", value: "Study & cognition capsules, nootropic stacks" }],
          },
        ],
      },
    ],
  };
}
