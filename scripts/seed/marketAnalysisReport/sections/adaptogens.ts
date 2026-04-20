import type { SanityImageReference } from "../../client.js";

const img = (ref?: SanityImageReference) => (ref ? { image: ref } : {});

interface Images {
  ashwagandha?: SanityImageReference;
  rhodiola?: SanityImageReference;
  ginsen?: SanityImageReference;
}

export function adaptogensSection(images: Images) {
  return {
    _key: "section-1",
    title: "Adaptogens & Stress Support",
    accent: "bg-brand-green-dark",
    products: [
      {
        _key: "prod-1-0",
        ...img(images.ashwagandha),
        badgeText: "Calm",
        badgeColor: "mist",
        title: "Ashwagandha (Withanolides std.)",
        description: "Reduces stress & supports restorative sleep.",
        metaRows: [
          {
            _key: "row-1-0-0",
            entries: [{ _key: "e-0", label: "Origin", value: "India" }],
          },
          {
            _key: "row-1-0-1",
            entries: [
              { _key: "e-0", label: "Market", value: "$778M" },
              { _key: "e-1", label: "CAGR", value: "8.8%" },
            ],
          },
        ],
      },
      {
        _key: "prod-1-1",
        ...img(images.rhodiola),
        badgeText: "Endurance",
        badgeColor: "mist",
        title: "Rhodiola Rosea",
        description: "Fatigue resistance and stamina; non-stim energy.",
        metaRows: [
          {
            _key: "row-1-1-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Siberia, Arctic Regions" }],
          },
          {
            _key: "row-1-1-1",
            entries: [
              { _key: "e-0", label: "CAGR", value: "7-8%" },
              { _key: "e-1", label: "Use", value: "Daytime productivity blends" },
            ],
          },
        ],
      },
      {
        _key: "prod-1-2",
        ...img(images.ginsen),
        badgeText: "Vitality",
        badgeColor: "mist",
        title: "Panax Ginseng Extract",
        description: "Increases energy and helps relieve stress; legacy adaptogen.",
        metaRows: [
          {
            _key: "row-1-2-0",
            entries: [{ _key: "e-0", label: "Origin", value: "Korea, China" }],
          },
          {
            _key: "row-1-2-1",
            entries: [
              { _key: "e-0", label: "Market", value: "$820M" },
              { _key: "e-1", label: "Use", value: "Tonics & functional shots" },
            ],
          },
        ],
      },
    ],
  };
}
