import type { SanityImageReference } from "../../client.js";

const img = (ref?: SanityImageReference) => (ref ? { image: ref } : {});

interface Images {
  matcha?: SanityImageReference;
  hyaluronic?: SanityImageReference;
  camu?: SanityImageReference;
  acai?: SanityImageReference;
}

export function beautyAntioxSection(images: Images) {
  return {
    _key: "section-4",
    title: "Beauty & Antioxidant Superfoods",
    accent: "bg-brand-mist",
    products: [
      {
        _key: "prod-4-0",
        ...img(images.matcha),
        badgeText: "Antioxidant",
        badgeColor: "cream",
        title: "Matcha Green Tea Powder",
        description: "Calm energy & antioxidant halo; pairs with fibres.",
        metaRows: [
          {
            _key: "row-4-0-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Japan" }],
          },
          {
            _key: "row-4-0-1",
            entries: [
              { _key: "e-0", label: "Market", value: "$3.84B" },
              { _key: "e-1", label: "CAGR", value: "11.0%" },
            ],
          },
        ],
      },
      {
        _key: "prod-4-1",
        ...img(images.hyaluronic),
        badgeText: "Hydration",
        badgeColor: "cream",
        title: "Hyaluronic Acid",
        description: "Hydration & joint-support positioning.",
        metaRows: [
          {
            _key: "row-4-1-0",
            entries: [{ _key: "e-0", label: "Use", value: "Capsules & beauty drinks" }],
          },
        ],
      },
      {
        _key: "prod-4-2",
        ...img(images.camu),
        badgeText: "Vitamin C",
        badgeColor: "cream",
        title: "Camu Camu Powder",
        description: "Natural vitamin C source supporting immunity and collagen.",
        metaRows: [
          {
            _key: "row-4-2-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Peru (Amazon Rainforest)" }],
          },
          {
            _key: "row-4-2-1",
            entries: [
              { _key: "e-0", label: "Market", value: "$172M" },
              { _key: "e-1", label: "CAGR", value: "10%" },
            ],
          },
        ],
      },
      {
        _key: "prod-4-3",
        ...img(images.acai),
        badgeText: "Antioxidant",
        badgeColor: "cream",
        title: "Organic Freeze-Dried Açaí Powder",
        description: "Anthocyanin-rich superfruit; beauty-from-within hero.",
        metaRows: [
          {
            _key: "row-4-3-0",
            entries: [{ _key: "e-0", label: "Use", value: "Smoothies, bowls, antioxidant blends" }],
          },
        ],
      },
    ],
  };
}
