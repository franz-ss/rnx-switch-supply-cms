// scripts/seed/privateLabelPage.ts
import { client, uploadImage } from "./client.js";

type ImageRef = Awaited<ReturnType<typeof uploadImage>>;

function img(ref: ImageRef) {
  return ref ? { image: ref } : {};
}

const packagingGroups: { label: string; specs: [string, string][] }[] = [
  {
    label: "Stand-Up Pouches and Sachets",
    specs: [
      ["images/private-label/kraft-paper-foil-pouch.png", "Kraft Paper & Foil Pouch"],
      ["images/private-label/stand-up-pouches-gusset.png", "Side and Bottom Gusset Stand up Pouches (SUPs)"],
      ["images/private-label/sachet-packaging.jpg", "Various Pouches and Sachet Styles"],
      ["images/private-label/pouch-sachet-1.png", "Various Pouches and Sachet Styles"],
      ["images/private-label/pouch-sachet-2.png", "Various Pouches and Sachet Styles"],
      ["images/private-label/pouch-sachet-3.png", "Various Pouches and Sachet Styles"],
      ["images/private-label/pouch-sachet-4.png", "Various Pouches and Sachet Styles"],
      ["images/private-label/pouch-sachet-5.png", "Various Pouches and Sachet Styles"],
    ],
  },
  {
    label: "Glass Jars",
    specs: [
      ["images/private-label/mason-jars.png", "Mason Jars"],
      ["images/private-label/straight-sided-jars.png", "Straight Sided Jars"],
      ["images/private-label/bail-lid-jars.png", "Bail Lid Jars"],
      ["images/private-label/glass-jars-1.png", "Glass Jar Variety"],
      ["images/private-label/glass-jars-2.png", "Glass Jar Variety"],
      ["images/private-label/glass-jars-3.png", "Glass Jar Variety"],
    ],
  },
  {
    label: "Cylinders",
    specs: [
      ["images/private-label/cardboard-cylinders.png", "Cardboard Cylinder"],
      ["images/private-label/paper-tubes.png", "Paper Tubes"],
      ["images/private-label/cardboard-cylinder-2.png", "Cylinder Packaging Variety"],
      ["images/private-label/canister-1.png", "Cylinder Packaging Variety"],
      ["images/private-label/canister-2.png", "Cylinder Packaging Variety"],
      ["images/private-label/cardboard-cylinder-3.png", "Cylinder Packaging Variety"],
    ],
  },
  {
    label: "Aseptic Bags",
    specs: [
      ["images/private-label/aseptic-bags-20l-4l-1l.png", "20L / 4L / 1L Aseptic Bags"],
      ["images/private-label/aseptic-drum-250l-300l.png", "250-300L Aseptic Drums"],
      ["images/private-label/cask-1.png", "Aseptic Bag Packaging"],
      ["images/private-label/cask-2.png", "Aseptic Bag Packaging"],
      ["images/private-label/cask-3.png", "Aseptic Bag Packaging"],
    ],
  },
];

export async function seedPrivateLabelPage(): Promise<void> {
  console.log("\nSeeding private label page...");

  const [
    [heroBg, gallery0, gallery1, gallery2, gallery3],
    [globalImg0, globalImg1, globalImg2],
    [prod0, prod1, prod2, prod3, prod4],
    [npd0, npd1],
    packagingRefs,
    [sustainImg, trendingImg, finalCtaBg],
  ] = await Promise.all([
    Promise.all([
      uploadImage("images/private-label/certified-organic-warehouse.jpg", "Switch Supply private label warehouse"),
      uploadImage("images/private-label/bulk-packaging-3.png", "Bulk packaging options"),
      uploadImage("images/private-label/cardboard-cylinder-2.png", "Cardboard cylinder packaging"),
      uploadImage("images/private-label/plastic-2.png", "Protein jar packaging"),
      uploadImage("images/private-label/cask-1.png", "Aseptic bag packaging"),
    ]),
    Promise.all([
      uploadImage("images/private-label/global-sourcing-1.png", "Your Label Here"),
      uploadImage("images/private-label/global-sourcing-2.png", "Your Label Here"),
      uploadImage("images/private-label/global-sourcing-3.png", "Your Brand"),
    ]),
    Promise.all([
      uploadImage("images/private-label/adaptogens.png", "Adaptogens"),
      uploadImage("images/private-label/functional-extracts.png", "Functional Extracts"),
      uploadImage("images/private-label/fibres-prebiotics.png", "Fibres and Prebiotics"),
      uploadImage("images/private-label/mushroom-powders.png", "Mushroom Powders"),
      uploadImage("images/private-label/nootropics.png", "Nootropics"),
    ]),
    Promise.all([
      uploadImage("images/private-label/private-labeling.png", "Full Turn Key Solution"),
      uploadImage("images/private-label/new-product-development.jpg", "Formulate a New Product"),
    ]),
    Promise.all(
      packagingGroups.map((group) =>
        Promise.all(group.specs.map(([path, alt]) => uploadImage(path, alt)))
      )
    ),
    Promise.all([
      uploadImage("images/private-label/sustainable-packaging-options.png", "Sustainable packaging options"),
      uploadImage("images/private-label/functional-nutrition-demand.png", "Functional nutrition demand"),
      uploadImage("images/private-label/private-label-products.jpg", "Private label product range"),
    ]),
  ]);

  const doc = {
    _id: "privateLabelPage",
    _type: "privateLabelPage",
    title: "Private Label Page",
    seoTitle: "Private Label & Custom Product Supply | Switch Supply",
    seoDescription:
      "Build your brand with Switch Supply's private label and custom product solutions. From formulation and ingredient sourcing to manufacturing, packing, and delivery.",

    hero: {
      heading: "Private Label & Custom Product Supply",
      subheading:
        "Build your brand with our private label and custom product solutions. From formulation and ingredient sourcing to manufacturing, packing, and delivery, we provide a seamless end-to-end supply process — whether in Australia or through our offshore partners.",
      cta: { label: "Start Your Brand", href: "/contact" },
      bullets: [
        "500+ Ingredients",
        "Certified Organic and Premium",
        "Australian Based Business",
        "10+ Years of Experience",
      ],
      ...(heroBg ? { backgroundImage: heroBg } : {}),
      galleryImages: [gallery0, gallery1, gallery2, gallery3].flatMap((ref, i) =>
        ref ? [{ _key: `gi-${i}`, ...img(ref) }] : []
      ),
    },

    globalIngredients: {
      eyebrow: "Global Sourcing",
      heading: "Tap Into 500+ Ingredients Globally for Your Brand",
      subheading:
        "We private label and ship products directly from the source — China, Turkey, India, Peru, Indonesia, Vietnam, Japan, Europe, and more.",
      offerLabel: "We offer:",
      offerItems: [
        "Global sourcing & reliable supplier network",
        "Efficient product development & packaging support",
        "Clean label, premium packaging design",
      ],
      footerText: "Delivered Globally.",
      images: [
        ...(globalImg0 ? [{ _key: "gi-0", ...img(globalImg0), label: "Your Label Here", wide: false }] : []),
        ...(globalImg1 ? [{ _key: "gi-1", ...img(globalImg1), label: "Your Label Here", wide: false }] : []),
        ...(globalImg2 ? [{ _key: "gi-2", ...img(globalImg2), label: "Your Brand", wide: true }] : []),
      ],
    },

    topProducts: {
      heading: "Top Performing Products",
      subheading: "Custom solutions tailored to your brand's needs",
      products: [
        { _key: "tp-0", ...img(prod0), title: "Adaptogens", description: "Stress support and mood balance with clean-label positioning.", badges: ["Ashwagandha", "Rhodiola Rosea", "Saffron"] },
        { _key: "tp-1", ...img(prod1), title: "Functional Extracts", description: "High-performing extracts for sports and daily wellness.", badges: ["Electrolyte/Hydration Powder", "Moringa", "Matcha", "Creatine"] },
        { _key: "tp-2", ...img(prod2), title: "Fibres & Pre/Postbiotics", description: "Expand your gut portfolio with versatile fibres and heat-stabilised postbiotics.", badges: ["L. Glutamine", "Collagen Peptides", "Bone Broth Powder", "Green Banana Powder"] },
        { _key: "tp-3", ...img(prod3), title: "Mushroom Powders", description: "Hero mushrooms for modern wellness and beverage formats.", badges: ["Reishi", "Chaga", "Cordyceps Extract"] },
        { _key: "tp-4", ...img(prod4), title: "Nootropics", description: "Three proven heroes for clean focus, memory and mental energy.", badges: ["Lion's Mane", "L. Theanine", "Black Maca"] },
      ],
    },

    npd: {
      heading: "Create Your Own Custom Product or Innovate from Scratch",
      subheading: "Two ways to bring your product to market — choose what fits your vision.",
      cards: [
        {
          _key: "npd-0",
          ...img(npd0),
          title: "Full Turn Key Solution - Packed at Origin from multiple producers located across Asia and Europe",
          description: "Use our proven formulas and packaging, and launch your brand efficiently.",
          cta: { label: "Start with Private Label", href: "/contact" },
        },
        {
          _key: "npd-1",
          ...img(npd1),
          title: "Formulate a New Product",
          description: "Have a unique idea? Work with our experts to develop and launch a custom-made product.",
          cta: { label: "Create a New Product", href: "/contact" },
        },
      ],
    },

    packagingFormats: {
      heading: "Packaging Formats That Fit Your Brand",
      subheading:
        "Premium, functional, and customisable packaging to elevate your brand presence.",
      tabs: packagingGroups.map((group, gi) => ({
        _key: `tab-${gi}`,
        label: group.label,
        images: packagingRefs[gi].flatMap((ref, ii) =>
          ref ? [{ _key: `i-${ii}`, ...img(ref), label: group.specs[ii][1] }] : []
        ),
      })),
    },

    sustainablePackaging: {
      eyebrow: "Sustainability",
      heading: "Why Choose Sustainable Packaging",
      subheading:
        "We provide high-performance, eco-friendly packaging using responsibly sourced, recyclable, compostable, and certified materials. From recycled pouches to biodegradable films and FSC-certified cartons, we manage the process end to end so your brand delivers sustainably.",
      ...(sustainImg ? { image: sustainImg } : {}),
      items: [
        "Appeal to eco-conscious consumers (78% prefer sustainable brands)",
        "Reduce carbon footprint and environmental impact",
        "Competitive pricing on recycled and biodegradable materials",
        "Compliance with EU, US, and Australian sustainability regulations",
        "Premium brand positioning in the wellness market",
      ],
    },

    midCta: {
      heading: "Private Label over 500+ Premium Ingredients that are Ready Now",
      subheading:
        "Ready to go green? Our sourcing team can help you find the perfect sustainable packaging solution.",
      cta: { label: "Speak with an Expert", href: "/contact" },
    },

    trending: {
      heading: "What's Trending",
      subheading: "Discover What's New in the Global Ingredient Supply",
      featuredPost: {
        ...(trendingImg ? { image: trendingImg } : {}),
        category: "Market Trends",
        categoryColor: "green",
        title: "Functional Nutrition Demand Is Surging: What This Means for Private Label Brands",
        excerpt:
          "The global ingredient market is undergoing a significant shift as functional nutrition moves from niche to mainstream. Ingredients once associated primarily with sports supplements—such as collagen, probiotics, adaptogens, and plant proteins—are now being incorporated into everyday foods, beverages, and wellness products.",
        cta: { label: "Read Full Article", href: "/blog/functional-nutrition-demand" },
      },
      posts: [
        {
          _key: "post-0",
          category: "Supply Chain",
          categoryColor: "mist",
          title: "Supply Chain Volatility Is Driving the Rise of Private Label Ingredients",
          excerpt:
            "Global ingredient supply chains have become increasingly complex and unpredictable. A perfect storm of climate disruptions, geopolitical tensions, and logistics bottlenecks has created a new normal of volatility.",
          cta: { label: "Read More", href: "/blog/supply-chain-volatility" },
        },
        {
          _key: "post-1",
          category: "Product Innovation",
          categoryColor: "cream",
          title: "Clean Label Reformulation: Balancing Transparency, Performance, and Profitability",
          excerpt:
            "Clean label expectations have moved rapidly from a marketing advantage to an absolute market requirement. Shoppers are increasingly scrutinizing ingredient lists and favoring products with fewer additives.",
          cta: { label: "Read More", href: "/blog/clean-label-reformulation" },
        },
        {
          _key: "post-2",
          category: "Sustainability",
          categoryColor: "green",
          title: "Sustainability and Traceability: What Buyers Really Expect",
          excerpt:
            "The days of relying on broad, unsubstantiated claims are over. Today's sophisticated B2B buyers demand verifiable proof of responsible practices at every stage of the supply chain.",
          cta: { label: "Read More", href: "/blog/sustainability-traceability" },
        },
      ],
    },

    testimonialsSection: {
      heading: "Trusted by Health Brands Worldwide",
      subheading: "See what our partners have to say about working with Switch Supply",
    },

    finalCta: {
      heading: "Private Labeling Made Easy",
      subheading:
        "Custom recipe and formula with our food scientists and NPD experts.",
      cta: { label: "Start My Private Label", href: "/contact" },
      ...(finalCtaBg ? { backgroundImage: finalCtaBg } : {}),
    },
  };

  await client.createOrReplace(doc);
  console.log("  Created/replaced: privateLabelPage");
}
