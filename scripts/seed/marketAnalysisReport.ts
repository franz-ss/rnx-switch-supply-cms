import { client, uploadImage, type SanityImageReference } from "./client.js";

const icon = (name: string) => ({ _type: "iconPicker", provider: "fi", name });

export async function seedMarketAnalysisReport(): Promise<void> {
  console.log("\nSeeding market analysis report...");

  // ─── Upload private label images ─────────────────────────────────────────
  const [plTeamImage, sachetsImage] = await Promise.all([
    uploadImage(
      "images/report/private-label-team.png",
      "Switch Supply team & packaging",
    ),
    uploadImage(
      "images/report/sachets.png",
      "Switch Supply Sachet Production Showcase",
    ),
  ]);

  // ─── Upload product images (section by section) ───────────────────────────
  // Section 1: Nootropics & Cognitive Health
  const [lTheanineImg, blackMacaImg, bacopaImg] = await Promise.all([
    uploadImage("images/report/l-theanine.webp", "L-Theanine"),
    uploadImage("images/report/black-maca.webp", "Black Maca"),
    uploadImage("images/report/bacopa-monnieri.jpg", "Bacopa Monnieri"),
  ]);

  // Section 2: Adaptogens & Stress Support
  const [ashwagandhaImg, rhodiolaImg, ginsenImg] = await Promise.all([
    uploadImage("images/report/ashwagandha.webp", "Ashwagandha"),
    uploadImage("images/report/rhodiola-rosea.png", "Rhodiola Rosea"),
    uploadImage("images/report/panax-ginseng.webp", "Panax Ginseng"),
  ]);

  // Section 3: Functional Mushrooms
  const [lionsManeImg, reishiImg, chagaImg, cordycepsImg] = await Promise.all([
    uploadImage(
      "images/report/lions-mane.webp",
      "Lion's Mane Mushroom Extract",
    ),
    uploadImage("images/report/reishi.png", "Reishi"),
    uploadImage("images/report/chaga.png", "Chaga"),
    uploadImage("images/report/cordyceps.png", "Cordyceps"),
  ]);

  // Section 4: Gut Health & Beauty
  const [collagenImg, boneBrothImg, inulinImg, greenBananaImg] =
    await Promise.all([
      uploadImage("images/report/collagen-peptides.png", "Collagen Peptides"),
      uploadImage("images/report/bone-broth-powder.png", "Bone Broth Protein"),
      uploadImage("images/report/chicory-inulin.webp", "Inulin"),
      uploadImage(
        "images/report/green-banana-powder.webp",
        "Green Banana Powder",
      ),
    ]);

  // Section 5: Beauty & Antioxidant Superfoods
  const [matchaImg, hyaluronicImg, camuImg, acaiImg] = await Promise.all([
    uploadImage("images/report/matcha.png", "Matcha Green Tea Powder"),
    uploadImage("images/report/hyaluronic-acid.webp", "Hyaluronic Acid"),
    uploadImage("images/report/camu-camu.webp", "Camu Camu Powder"),
    uploadImage("images/report/acai-powder.webp", "Organic Acai Powder"),
  ]);

  // Section 6: Performance & Hydration
  const [coconutImg, creatineImg, hempImg] = await Promise.all([
    uploadImage(
      "images/report/coconut-water-powder.png",
      "Coconut Water Powder",
    ),
    uploadImage("images/report/creatine.png", "Creatine Monohydrate"),
    uploadImage("images/report/hemp-protein.png", "Hemp Protein Powder"),
  ]);

  // ─── Helper: wrap optional image ─────────────────────────────────────────
  function img(
    ref: SanityImageReference | undefined,
  ): { image: SanityImageReference } | Record<string, never> {
    return ref ? { image: ref } : {};
  }

  // ─── Build document ───────────────────────────────────────────────────────
  const doc = {
    _id: "marketAnalysisReport",
    _type: "marketAnalysisReport",
    title: "Market Analysis Report 2025",

    hero: {
      eyebrow: "Market Intelligence Report 2025",
      heading:
        "Functional Ingredients Market:\nGrowth, Innovation & Regional Insights",
      body: "Comprehensive analysis of market trends, product performance, regional organic specialization, and quality advancements in the functional ingredients sector.",
      badges: [
        { _key: "badge-0", icon: icon("FiGlobe"), label: "Global Market Analysis" },
        { _key: "badge-1", icon: icon("FiTrendingUp"), label: "2020-2026 Data" },
      ],
    },

    strategicImplications: {
      eyebrow: "Partner With Switch Supply",
      heading: "Market Opportunities for Customers",
      opportunities: [
        {
          _key: "opp-0",
          emoji: "🏷️",
          heading: "Private Label Products",
          body: "Launch your own brand with our complete private label solutions. From formulation to packaging, we provide certified organic ingredients and full manufacturing support to bring your vision to market.",
        },
        {
          _key: "opp-1",
          emoji: "🔬",
          heading: "Functional Product Innovations",
          body: "Develop cutting-edge formulations with our R&D team. We specialize in multi-benefit blends, nootropic stacks, and adaptogenic formulas backed by the latest market research and clinical insights.",
        },
        {
          _key: "opp-2",
          emoji: "💎",
          heading: "Premium Brand Positioning",
          body: "Access high-potency standardized extracts and organic certified ingredients that command premium pricing. Our third-party tested ingredients provide the quality foundation for luxury wellness brands.",
        },
      ],
      whyChooseHeading: "Why Choose Switch Supply",
      whyChooseItems: [
        {
          _key: "why-0",
          bold: "Quality Assurance:",
          description:
            "All ingredients third-party tested with full COA documentation and traceability",
        },
        {
          _key: "why-1",
          bold: "Organic Certified:",
          description:
            "USDA and EU organic certifications available for premium market positioning",
        },
        {
          _key: "why-2",
          bold: "Flexible MOQs:",
          description:
            "Scalable ordering from startup batches to large-scale production runs",
        },
        {
          _key: "why-3",
          bold: "Expert Support:",
          description:
            "Dedicated account managers and formulation specialists to guide your product development",
        },
      ],
    },

    productCatalog: {
      heading: "Top Performing Functional Ingredients 2025",
      sections: [
        {
          _key: "section-0",
          title: "Nootropics & Cognitive Health",
          accent: "bg-brand-green",
          products: [
            {
              _key: "prod-0-0",
              ...img(lTheanineImg),
              badgeText: "Beverage-Friendly",
              badgeColor: "cream",
              title: "L-Theanine",
              description:
                "Calm alertness & caffeine synergy; perfect for drinks.",
              metaRows: [
                {
                  _key: "row-0-0-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "Japan (Green Tea)",
                    },
                  ],
                },
                {
                  _key: "row-0-0-1",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Use",
                      value:
                        "Focus beverages (100-200 mg per serve) paired with caffeine",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-0-1",
              ...img(blackMacaImg),
              badgeText: "Endurance",
              badgeColor: "cream",
              title: "Black Maca",
              description:
                "Energy, mood and vitality support; pairs with caffeine-free focus blends.",
              metaRows: [
                {
                  _key: "row-0-1-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "Peru (Andean Highlands)",
                    },
                  ],
                },
                {
                  _key: "row-0-1-1",
                  entries: [
                    { _key: "e-0", label: "CAGR", value: "6.1%" },
                    {
                      _key: "e-1",
                      label: "Use",
                      value: "Focus & vitality capsules",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-0-2",
              ...img(bacopaImg),
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
                  entries: [
                    {
                      _key: "e-0",
                      label: "Use",
                      value: "Study & cognition capsules, nootropic stacks",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          _key: "section-1",
          title: "Adaptogens & Stress Support",
          accent: "bg-brand-green-dark",
          products: [
            {
              _key: "prod-1-0",
              ...img(ashwagandhaImg),
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
              ...img(rhodiolaImg),
              badgeText: "Endurance",
              badgeColor: "mist",
              title: "Rhodiola Rosea",
              description: "Fatigue resistance and stamina; non-stim energy.",
              metaRows: [
                {
                  _key: "row-1-1-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "Siberia, Arctic Regions",
                    },
                  ],
                },
                {
                  _key: "row-1-1-1",
                  entries: [
                    { _key: "e-0", label: "CAGR", value: "7-8%" },
                    {
                      _key: "e-1",
                      label: "Use",
                      value: "Daytime productivity blends",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-1-2",
              ...img(ginsenImg),
              badgeText: "Vitality",
              badgeColor: "mist",
              title: "Panax Ginseng Extract",
              description:
                "Increases energy and helps relieve stress; legacy adaptogen.",
              metaRows: [
                {
                  _key: "row-1-2-0",
                  entries: [
                    { _key: "e-0", label: "Origin", value: "Korea, China" },
                  ],
                },
                {
                  _key: "row-1-2-1",
                  entries: [
                    { _key: "e-0", label: "Market", value: "$820M" },
                    {
                      _key: "e-1",
                      label: "Use",
                      value: "Tonics & functional shots",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          _key: "section-2",
          title: "Functional Mushrooms",
          accent: "bg-brand-green-dark",
          products: [
            {
              _key: "prod-2-0",
              ...img(lionsManeImg),
              badgeText: "Top Seller",
              badgeColor: "cream",
              title: "Lion's Mane Mushroom Extract 20:1",
              description:
                "Focus & neuro support across capsules, coffees and RTDs.",
              metaRows: [
                {
                  _key: "row-2-0-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "China, North America",
                    },
                  ],
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
              ...img(reishiImg),
              badgeText: "Calm & Balance",
              badgeColor: "cream",
              title: "Reishi (Ganoderma lucidum)",
              description:
                "Stress balance & immune support; evening calm positioning.",
              metaRows: [
                {
                  _key: "row-2-1-0",
                  entries: [
                    { _key: "e-0", label: "Origin", value: "China, Japan" },
                  ],
                },
                {
                  _key: "row-2-1-1",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Use",
                      value: "Night-time blends, calming RTDs",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-2-2",
              ...img(chagaImg),
              badgeText: "Antioxidant",
              badgeColor: "cream",
              title: "Chaga (Inonotus obliquus)",
              description:
                "High ORAC antioxidant halo; winter immunity & coffee alternatives.",
              metaRows: [
                {
                  _key: "row-2-2-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "Siberia, Northern Europe",
                    },
                  ],
                },
                {
                  _key: "row-2-2-1",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Use",
                      value: "Mushroom coffees, immunity powders",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-2-3",
              ...img(cordycepsImg),
              badgeText: "Performance",
              badgeColor: "cream",
              title: "Cordyceps Extract",
              description:
                "Endurance & oxygen uptake; favoured in pre-workouts.",
              metaRows: [
                {
                  _key: "row-2-3-0",
                  entries: [
                    { _key: "e-0", label: "Origin", value: "China, Tibet" },
                  ],
                },
                {
                  _key: "row-2-3-1",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Blend",
                      value: "Performance Stack → Cordyceps + Ginseng + Bacopa",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          _key: "section-3",
          title: "Gut Health & Beauty",
          accent: "bg-brand-sky",
          products: [
            {
              _key: "prod-3-0",
              ...img(collagenImg),
              badgeText: "Beauty & Gut",
              badgeColor: "mist",
              title: "Collagen Peptides",
              description:
                "Skin elasticity & gut-lining support; powder and RTD ready.",
              metaRows: [
                {
                  _key: "row-3-0-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "Marine (Wild-Caught) / Bovine (Grass-Fed)",
                    },
                  ],
                },
                {
                  _key: "row-3-0-1",
                  entries: [
                    { _key: "e-0", label: "CAGR", value: "10.2%" },
                    {
                      _key: "e-1",
                      label: "Blend",
                      value: "Glow & Gut Harmony",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-3-1",
              ...img(boneBrothImg),
              badgeText: "Protein",
              badgeColor: "mist",
              title: "Bone Broth Protein",
              description:
                "Amino acids for gut repair; savoury and neutral options.",
              metaRows: [
                {
                  _key: "row-3-1-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "Grass-Fed Bovine",
                    },
                  ],
                },
                {
                  _key: "row-3-1-1",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Use",
                      value: "Sipping blends, soups, savoury RTDs",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-3-2",
              ...img(inulinImg),
              badgeText: "Prebiotic",
              badgeColor: "mist",
              title: "Inulin (Chicory Root)",
              description: "Gentle prebiotic fibre; easy to formulate.",
              metaRows: [
                {
                  _key: "row-3-2-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "Europe (Belgium, Netherlands)",
                    },
                  ],
                },
                {
                  _key: "row-3-2-1",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Use",
                      value: "Smoothies, sachets, bars",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-3-3",
              ...img(greenBananaImg),
              badgeText: "Resistant Starch",
              badgeColor: "mist",
              title: "Green Banana Powder",
              description:
                "Prebiotic resistant starch for gut & glucose support.",
              metaRows: [
                {
                  _key: "row-3-3-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "Australia, Philippines",
                    },
                  ],
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
        },
        {
          _key: "section-4",
          title: "Beauty & Antioxidant Superfoods",
          accent: "bg-brand-mist",
          products: [
            {
              _key: "prod-4-0",
              ...img(matchaImg),
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
              ...img(hyaluronicImg),
              badgeText: "Hydration",
              badgeColor: "cream",
              title: "Hyaluronic Acid",
              description: "Hydration & joint-support positioning.",
              metaRows: [
                {
                  _key: "row-4-1-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Use",
                      value: "Capsules & beauty drinks",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-4-2",
              ...img(camuImg),
              badgeText: "Vitamin C",
              badgeColor: "cream",
              title: "Camu Camu Powder",
              description:
                "Natural vitamin C source supporting immunity and collagen.",
              metaRows: [
                {
                  _key: "row-4-2-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Origin",
                      value: "Peru (Amazon Rainforest)",
                    },
                  ],
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
              ...img(acaiImg),
              badgeText: "Antioxidant",
              badgeColor: "cream",
              title: "Organic Freeze-Dried Açaí Powder",
              description:
                "Anthocyanin-rich superfruit; beauty-from-within hero.",
              metaRows: [
                {
                  _key: "row-4-3-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Use",
                      value: "Smoothies, bowls, antioxidant blends",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          _key: "section-5",
          title: "Performance & Hydration",
          accent: "bg-brand-green",
          products: [
            {
              _key: "prod-5-0",
              ...img(coconutImg),
              badgeText: "Hydration",
              badgeColor: "cream",
              title: "Coconut Water Powder",
              description:
                "Natural electrolytes for hydration; clean taste for RTDs.",
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
              ...img(creatineImg),
              badgeText: "Strength",
              badgeColor: "cream",
              title: "Creatine Monohydrate",
              description:
                "Gold-standard for power & recovery; dissolves well in blends.",
              metaRows: [
                {
                  _key: "row-5-1-0",
                  entries: [
                    {
                      _key: "e-0",
                      label: "Use",
                      value: "Performance sticks, daily drink mixes",
                    },
                  ],
                },
              ],
            },
            {
              _key: "prod-5-2",
              ...img(hempImg),
              badgeText: "Protein",
              badgeColor: "cream",
              title: "Hemp Protein Powder",
              description:
                "Plant protein with ALA omega-3s; allergen-friendly.",
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
        },
      ],
    },

    brands: [
      {
        _key: "brand-0",
        name: "AG1 (Athletic Greens)",
        category: "Comprehensive Wellness",
        tagline:
          "75 vitamins, minerals & whole-food ingredients in one daily drink",
        innovation:
          "All-in-one daily nutrition positioning, subscription model success",
        accent: "green",
      },
      {
        _key: "brand-1",
        name: "Four Sigmatic",
        category: "Mushroom Coffee & Elixirs",
        tagline: "Functional mushrooms meet coffee culture",
        innovation:
          "Pioneered mushroom coffee category, making adaptogens accessible",
        accent: "amber",
      },
      {
        _key: "brand-2",
        name: "Moon Juice",
        category: "Adaptogenic Beauty & Wellness",
        tagline: "Clinical-level adaptogens for modern stress",
        innovation:
          "Beauty-from-within positioning, clinical dosing in elegant packaging",
        accent: "purple",
      },
      {
        _key: "brand-3",
        name: "Onnit",
        category: "Performance Nutrition",
        tagline: "Total Human Optimization",
        innovation:
          "Nootropic stack formulations (Alpha BRAIN), athlete endorsements",
        accent: "neutral",
      },
      {
        _key: "brand-4",
        name: "Olipop",
        category: "Functional Beverages",
        tagline: "Prebiotic soda supporting digestive health",
        innovation:
          "Gut health positioning in mainstream soda format, 9g fiber per can",
        accent: "rose",
      },
      {
        _key: "brand-5",
        name: "Liquid I.V.",
        category: "Hydration Multiplier",
        tagline: "Cellular Transport Technology for rapid hydration",
        innovation:
          "Science-backed hydration ratio, stick pack convenience, cause marketing",
        accent: "teal",
      },
      {
        _key: "brand-6",
        name: "Magic Spoon",
        category: "Better-For-You Cereal",
        tagline: "High-protein, low-carb nostalgia",
        innovation:
          "Childhood favorite reimagined with keto/protein positioning",
        accent: "amber",
      },
      {
        _key: "brand-7",
        name: "Recess",
        category: "Sparkling Water + Adaptogens",
        tagline: "Calm, cool, collected in a can",
        innovation:
          "Mood-positioning in functional beverages, Gen Z branding excellence",
        accent: "teal",
      },
      {
        _key: "brand-8",
        name: "Seed",
        category: "Precision Probiotics",
        tagline: "Daily Synbiotic for gut-skin-heart axis",
        innovation:
          "Clinical research backing, 2-in-1 capsule technology, microbiome science",
        accent: "green",
      },
      {
        _key: "brand-9",
        name: "Ritual",
        category: "Essential Vitamins Reimagined",
        tagline: "Traceable nutrients in delayed-release capsules",
        innovation:
          "Radical transparency in sourcing, beadlet-in-oil technology, female-first",
        accent: "amber",
      },
      {
        _key: "brand-10",
        name: "Bulletproof",
        category: "Performance Coffee & Fats",
        tagline: "Biohacking meets coffee culture",
        innovation:
          "Created butter coffee trend, biohacking community building",
        accent: "neutral",
      },
      {
        _key: "brand-11",
        name: "Organifi",
        category: "Superfood Blends",
        tagline: "Green juice without the juicer",
        innovation:
          "Convenience positioning for green juice, influencer marketing success",
        accent: "green",
      },
      {
        _key: "brand-12",
        name: "Mindful Foods",
        category: "Activated Superfoods",
        tagline: "Australian organic activated nuts, seeds & superfoods",
        innovation:
          "Activation process for digestibility, premium Australian organic positioning",
        accent: "amber",
      },
      {
        _key: "brand-13",
        name: "LMNT",
        category: "Electrolyte Drink Mix",
        tagline: "Zero sugar electrolytes for low-carb lifestyles",
        innovation:
          "Keto/paleo positioning, science-backed salt ratios, no sugar/additives",
        accent: "rose",
      },
      {
        _key: "brand-14",
        name: "Huel",
        category: "Complete Nutrition",
        tagline: "Nutritionally complete food in minutes",
        innovation:
          "Meal replacement for busy lifestyles, sustainability positioning",
        accent: "neutral",
      },
      {
        _key: "brand-15",
        name: "Sakara Life",
        category: "Plant-Based Meal Delivery",
        tagline: "Organic, plant-rich nutrition programs",
        innovation:
          "Luxury wellness meal delivery, celebrity following, beauty nutrition",
        accent: "rose",
      },
    ],

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
      ctaHref:
        "mailto:info@switchsupply.com?subject=Private%20Label%20Sachets%20Enquiry",
      ...img(sachetsImage),
    },
  };

  await client.createOrReplace(doc);
  console.log("  Created/replaced: marketAnalysisReport");
}
