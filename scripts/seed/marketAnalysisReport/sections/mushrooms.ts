import type { SanityImageReference } from "../../client.js";

const img = (ref?: SanityImageReference) => (ref ? { image: ref } : {});

interface Images {
  lionsMane?: SanityImageReference;
  reishi?: SanityImageReference;
  chaga?: SanityImageReference;
  cordyceps?: SanityImageReference;
}

export function mushroomsSection(images: Images) {
  return {
    _key: "section-2",
    title: "Functional Mushrooms",
    accent: "bg-brand-green-dark",
    products: [
      {
        _key: "prod-2-0",
        ...img(images.lionsMane),
        badgeText: "Top Seller",
        badgeColor: "cream",
        title: "Lion's Mane Mushroom Extract 20:1",
        description: "Focus & neuro support across capsules, coffees and RTDs.",
        metaRows: [
          {
            _key: "row-2-0-0",
            entries: [{ _key: "e-0", label: "Origin", value: "China, North America" }],
          },
          {
            _key: "row-2-0-1",
            entries: [
              { _key: "e-0", label: "Market", value: "$1.82B (2025)" },
              { _key: "e-1", label: "CAGR", value: "11.3%" },
            ],
          },
        ],
      },
      {
        _key: "prod-2-1",
        ...img(images.reishi),
        badgeText: "Calm & Balance",
        badgeColor: "cream",
        title: "Reishi (Ganoderma lucidum)",
        description: "Stress balance & immune support; evening calm positioning.",
        metaRows: [
          {
            _key: "row-2-1-0",
            entries: [{ _key: "e-0", label: "Origin", value: "China, Japan" }],
          },
          {
            _key: "row-2-1-1",
            entries: [{ _key: "e-0", label: "Use", value: "Night-time blends, calming RTDs" }],
          },
        ],
      },
      {
        _key: "prod-2-2",
        ...img(images.chaga),
        badgeText: "Antioxidant",
        badgeColor: "cream",
        title: "Chaga (Inonotus obliquus)",
        description: "High ORAC antioxidant halo; winter immunity & coffee alternatives.",
        metaRows: [
          {
            _key: "row-2-2-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Siberia, Northern Europe" }],
          },
          {
            _key: "row-2-2-1",
            entries: [{ _key: "e-0", label: "Use", value: "Mushroom coffees, immunity powders" }],
          },
        ],
      },
      {
        _key: "prod-2-3",
        ...img(images.cordyceps),
        badgeText: "Performance",
        badgeColor: "cream",
        title: "Cordyceps Extract",
        description: "Endurance & oxygen uptake; favoured in pre-workouts.",
        metaRows: [
          {
            _key: "row-2-3-0",
            entries: [{ _key: "e-0", label: "Origin", value: "China, Tibet" }],
          },
          {
            _key: "row-2-3-1",
            entries: [{ _key: "e-0", label: "Blend", value: "Performance Stack → Cordyceps + Ginseng + Bacopa" }],
          },
        ],
      },
    ],
  };
}
