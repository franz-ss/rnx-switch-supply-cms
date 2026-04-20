import { client, uploadImage } from "./client.js";

const icon = (name: string) => ({ _type: "iconPicker", provider: "fi", name });

export async function seedHomePage(): Promise<void> {
  console.log("\nSeeding home page...");

  // Upload all images up-front so sections can reference them
  const heroBackground = await uploadImage(
    "images/hero/hero-organic-farm.jpg",
    "Organic farm harvest - fresh ingredients",
  );

  const [acoLogo, usdaLogo, euLogo, haccpLogo, halalLogo] = await Promise.all([
    uploadImage("images/logos/aco-logo.png", "Australian Certified Organic"),
    uploadImage("images/logos/usda-organic-logo.png", "USDA Organic"),
    uploadImage("images/logos/eu-organic-logo.png", "EU Organic"),
    uploadImage("images/logos/haccp-logo.png", "HACCP International"),
    uploadImage("images/logos/halal-logo.png", "Halal Certified"),
  ]);

  const [capImg0, capImg1, capImg2, capImg3, capImg4] = await Promise.all([
    uploadImage("images/categories/certified-organic.jpg", "Certified Organic"),
    uploadImage(
      "images/categories/herbs-spices-botanicals.jpg",
      "Herbs, Spices & Botanicals",
    ),
    uploadImage(
      "images/categories/extract-powders.jpg",
      "Extract Powders & Superfoods",
    ),
    uploadImage("images/categories/sweeteners.jpg", "Sweeteners"),
    uploadImage("images/categories/juices-puree.jpg", "Juices & Puree"),
  ]);

  const supplyChainImage = await uploadImage(
    "images/certified-organic-warehouse.jpg",
    "Warehouse with shipping containers and goods storage",
  );

  const [plShowcase, plSachet, plTin] = await Promise.all([
    uploadImage(
      "images/private-label/private-label-products.jpg",
      "Private label product range including pouches, tins, and jars",
    ),
    uploadImage(
      "images/private-label/sachet-packaging.jpg",
      "Sachet packaging options - Daily Greens, Collagen Beauty, Acai Powder",
    ),
    uploadImage(
      "images/private-label/daily-greens-tin.jpg",
      "Premium tin packaging with Daily Greens",
    ),
  ]);

  const [premImg1, premImg2] = await Promise.all([
    uploadImage(
      "images/products/matcha-tea-retail.jpg",
      "Matcha powder retail product",
    ),
    uploadImage(
      "images/products/collagen-powder.jpg",
      "Collagen powder sachet product",
    ),
  ]);

  const sections = [
    // 1. Market Report Banner
    {
      _type: "marketReportBanner",
      _key: "section-market-report-banner",
      label: "New Report",
      heading: "Functional Ingredients Market Analysis Report",
      ctaLabel: "View Report",
    },

    // 2. Hero
    {
      _type: "hero",
      _key: "section-hero",
      headline: "Global Supplier of 500+ Health and Wellness Ingredients",
      subheading:
        "Certified organic, botanical and functional ingredients supplied to food manufacturers, nutraceutical brands and product developers worldwide.",
      primaryCta: { label: "Browse Ingredients", href: "/ingredients" },
      secondaryCta: { label: "Request Quote", href: "/contact" },
      trustBullets: [
        "Certified Organic Supply Chains",
        "Global Ingredient Sourcing",
        "Private Label Solutions",
      ],
      ...(heroBackground ? { backgroundImage: heroBackground } : {}),
    },

    // 3. Certification Section
    {
      _type: "certificationSection",
      _key: "section-certifications",
      heading: "Certified Quality Standards",
      certifications: [
        {
          _key: "cert-0",
          name: "Australian Certified Organic",
          ...(acoLogo ? { logo: acoLogo } : {}),
        },
        {
          _key: "cert-1",
          name: "USDA Organic",
          ...(usdaLogo ? { logo: usdaLogo } : {}),
        },
        {
          _key: "cert-2",
          name: "EU Organic",
          ...(euLogo ? { logo: euLogo } : {}),
        },
        {
          _key: "cert-3",
          name: "HACCP International",
          ...(haccpLogo ? { logo: haccpLogo } : {}),
        },
        {
          _key: "cert-4",
          name: "Halal Certified",
          ...(halalLogo ? { logo: halalLogo } : {}),
        },
      ],
    },

    // 4. Ingredient Capabilities
    {
      _type: "ingredientCapabilities",
      _key: "section-ingredient-capabilities",
      heading: "Ingredient Capabilities",
      browseLabel: "Browse",
      categories: [
        {
          _key: "cat-0",
          title: "Certified Organic",
          description:
            "One of Australia's largest ranges of certified organic ingredients — ACO, USDA and EU certified, with full traceability.",
          href: "/ingredients/certified-organic",
          ...(capImg0 ? { image: capImg0 } : {}),
        },
        {
          _key: "cat-1",
          title: "Herbs, Spices & Botanicals",
          description:
            "Conventional and certified organic herbs, botanicals and spices for functional foods, nutraceuticals and wellness products.",
          href: "/ingredients/herbs-botanicals-spices",
          ...(capImg1 ? { image: capImg1 } : {}),
        },
        {
          _key: "cat-2",
          title: "Extract Powders & Superfoods",
          description:
            "High-quality superfood powders and standardised botanical extracts for functional food, beverage and supplement applications.",
          href: "/ingredients/extract-powders-superfoods",
          ...(capImg2 ? { image: capImg2 } : {}),
        },
        {
          _key: "cat-3",
          title: "Sweeteners / Natural & Sugar Free",
          description:
            "Clean label natural and low-GI sweetening systems for food manufacturers seeking premium sugar alternatives.",
          href: "/ingredients/sweeteners",
          ...(capImg3 ? { image: capImg3 } : {}),
        },
        {
          _key: "cat-4",
          title: "Juices & Puree / Vegetable & Fruit",
          description:
            "Concentrated fruit juices and purees for beverage manufacturing, NFC, single-strength and concentrated formats.",
          href: "/ingredients/juices-puree",
          ...(capImg4 ? { image: capImg4 } : {}),
        },
      ],
    },

    // 5. Capability Section (stats)
    {
      _type: "capabilitySection",
      _key: "section-capability",
      heading: "Supplying Direct To Health Focused Brands",
      stats: [
        {
          _key: "stat-0",
          icon: icon("FiCheckCircle"),
          number: "500+",
          label: "Premium and Organic Ingredients",
          sublabel: "Functional, Juices, Extracts, Botanicals & More",
        },
        {
          _key: "stat-1",
          icon: icon("FiGlobe"),
          number: "100+",
          label: "Fully Qualified and Vetted",
          sublabel: "Supply Partners and Producers",
        },
        {
          _key: "stat-2",
          icon: icon("FiPackage"),
          number: "Private Label",
          label: "Custom Made Products",
          sublabel: "For retail customers & distributors",
        },
        {
          _key: "stat-3",
          icon: icon("FiFlag"),
          number: "Australian",
          label: "Owned and Operated",
          sublabel: "Established 2013",
        },
      ],
    },

    // 6. Certified Organic Section
    {
      _type: "certifiedOrganicSection",
      _key: "section-certified-organic",
      label: "Quality & Service",
      heading: "Quality & Supply Chain Excellence",
      description:
        "Quality isn't just a promise—it's embedded in every stage of our supply chain. Through rigorous supplier selection and continuous quality monitoring, we deliver ingredients you can trust, backed by complete traceability and industry-leading certifications.",
      ctaLabel: "Read More",
      features: [
        {
          _key: "feat-0",
          icon: icon("FiUsers"),
          title: "Rigorous 2-Stage Supplier Onboarding",
          description:
            "Every supplier undergoes a comprehensive vetting process including documentation review and site audits to ensure only the highest-quality partners join our network",
        },
        {
          _key: "feat-1",
          icon: icon("FiShield"),
          title: "HACCP Certified Operations",
          description:
            "All facilities maintain HACCP certification with strict food safety protocols, ensuring contamination-free handling at every stage of the supply chain",
        },
        {
          _key: "feat-2",
          icon: icon("FiClipboard"),
          title: "Ethical Sourcing Standards",
          description:
            "We partner exclusively with suppliers committed to fair trade practices, sustainable farming methods, and complete supply chain transparency",
        },
      ],
      ...(supplyChainImage ? { supplyChainImage } : {}),
      organicHeading:
        "One of Australia's Leading Certified Organic Ingredient Suppliers",
      organicDescription:
        "Our certified organic range includes premium extracts, botanicals, superfoods, juices and functional ingredients sourced from trusted growers and processors across Australia and around the world. We're one of Australia's largest Certified Organic Ingredient companies with over 500 certified organic products.",
      organicCertifications: [
        {
          _key: "ocert-0",
          name: "ACO Certified",
          description: "Australian Certified Organic accreditation",
          ...(acoLogo ? { logo: acoLogo } : {}),
        },
        {
          _key: "ocert-1",
          name: "USDA Organic",
          description: "United States Department of Agriculture",
          ...(usdaLogo ? { logo: usdaLogo } : {}),
        },
        {
          _key: "ocert-2",
          name: "EU Organic",
          description: "European Union organic standards",
          ...(euLogo ? { logo: euLogo } : {}),
        },
      ],
      viewCertificationsLabel: "View Our Certifications",
    },

    // 7. Private Label Section
    {
      _type: "privateLabelSection",
      _key: "section-private-label",
      heading: "Private Label Solutions",
      description:
        "Launch your own wellness brand with our end-to-end private label services. From ingredient sourcing to finished packaging, we handle every step.",
      moqLabel: "MOQ from",
      moqValue: "500 units",
      capabilitiesHeading: "Complete Manufacturing Partnership",
      capabilities: [
        "Custom formulation & ingredient blending",
        "Multiple packaging formats (sachets, tins, pouches, jars)",
        "Full regulatory & export documentation",
        "Minimum order quantities from 500 units",
        "White-label or custom branded solutions",
        "Organic certification available",
      ],
      ctaLabel: "Start Your Private Label Project",
      ...(plShowcase ? { showcaseImage: plShowcase } : {}),
      packagingHeading: "Flexible Packaging Options",
      packagingDescription:
        "Choose from a variety of packaging formats to suit your brand and product requirements",
      packagingOptions: [
        {
          _key: "pkg-0",
          title: "Single-Serve Sachets",
          description:
            "Perfect for convenience and portion control. Available in various sizes and materials.",
          ...(plSachet ? { image: plSachet } : {}),
        },
        {
          _key: "pkg-1",
          title: "Premium Tins & Jars",
          description:
            "Elevated packaging for premium products. Reusable and shelf-stable options.",
          ...(plTin ? { image: plTin } : {}),
        },
      ],
      packagingNote:
        "Also available: Stand-up pouches, resealable bags, glass bottles, and bulk containers",
    },

    // 8. Industries Section
    {
      _type: "industriesSection",
      _key: "section-industries",
      heading: "Industries We Supply",
      industries: [
        {
          _key: "ind-0",
          icon: icon("FiBox"),
          title: "Food Manufacturing",
          description: "Bulk ingredients for food production and processing.",
        },
        {
          _key: "ind-1",
          icon: icon("FiDroplet"),
          title: "Nutraceutical Brands",
          description: "Premium ingredients for supplement formulation.",
        },
        {
          _key: "ind-2",
          icon: icon("FiCoffee"),
          title: "Functional Beverage Companies",
          description: "Specialized ingredients for beverage applications.",
        },
        {
          _key: "ind-3",
          icon: icon("FiUsers"),
          title: "Product Development Teams",
          description: "Innovation support and ingredient samples.",
        },
      ],
    },

    // 9. Popular Ingredients — references to ingredientCategory documents
    {
      _type: "popularIngredients",
      _key: "section-popular-ingredients",
      heading: "Trending Ingredients",
      catalogueHref: "/ingredients",
      catalogueLabel: "View Top 20 Trending Products",
      ingredients: [
        {
          _type: "reference",
          _ref: "ingredientCategory-certified-organic",
          _key: "ing-0",
        },
        {
          _type: "reference",
          _ref: "ingredientCategory-herbs-botanicals-spices",
          _key: "ing-1",
        },
        {
          _type: "reference",
          _ref: "ingredientCategory-extract-powders-superfoods",
          _key: "ing-2",
        },
        {
          _type: "reference",
          _ref: "ingredientCategory-juices-puree",
          _key: "ing-3",
        },
      ],
    },

    // 10. Premium Ingredients Section
    {
      _type: "premiumIngredientsSection",
      _key: "section-premium-ingredients",
      label: "Premium Quality",
      heading: "Premium Ingredients for Health & Wellness",
      description:
        "We supply premium-grade botanical extracts, superfood powders, and functional ingredients to manufacturers and brands who demand excellence. Each ingredient is carefully selected and rigorously tested to meet the highest industry standards.",
      ctaLabel: "Explore Premium Range",
      features: [
        {
          _key: "pfeat-0",
          icon: icon("FiStar"),
          title: "Premium Grade",
          description:
            "Only the highest quality ingredients sourced from verified suppliers worldwide",
        },
        {
          _key: "pfeat-1",
          icon: icon("FiShield"),
          title: "Safety Tested",
          description:
            "Comprehensive testing for heavy metals, pesticides, and microbiology",
        },
        {
          _key: "pfeat-2",
          icon: icon("FiZoomIn"),
          title: "Lab Verified",
          description:
            "Third-party laboratory analysis with full certificates of analysis",
        },
      ],
      ...(premImg1 ? { imageOne: premImg1 } : {}),
      ...(premImg2 ? { imageTwo: premImg2 } : {}),
    },

    // 11. Testimonials Section (document references to already-seeded testimonials)
    {
      _type: "testimonialsSection",
      _key: "section-testimonials",
      heading: "Trusted by Health Brands Worldwide",
      subheading: "See what our partners have to say about working with Switch Supply",
      testimonials: [
        { _type: "reference", _ref: "testimonial-1", _key: "tref-1" },
        { _type: "reference", _ref: "testimonial-2", _key: "tref-2" },
        { _type: "reference", _ref: "testimonial-3", _key: "tref-3" },
        { _type: "reference", _ref: "testimonial-4", _key: "tref-4" },
      ],
    },

    // 12. Final CTA
    {
      _type: "finalCTA",
      _key: "section-final-cta",
      heading: "Building Long-Term Partnerships",
      subheading:
        "We're committed to sustainable growth through ethical sourcing and reliable supply chain excellence.",
      benefits: [
        "Access to the best-quality ingredients at competitive prices.",
        "Hassle-free shipping and smooth supply chain solutions.",
        "A global partner network, so you can get rare and niche ingredients others can't.",
        "Sustainable and ethical sourcing practices",
      ],
      cta: { label: "Get in Touch", href: "/contact" },
    },
  ];

  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",
    title: "Home Page",
    sections,
  });
  console.log("  Created/replaced: homePage");
}
