import {client, uploadImage} from './client.js'
import {staticCta, staticLink} from './linkHelpers.js'

const icon = (name: string) => ({_type: 'iconPicker', provider: 'fi', name})

export async function seedHomePage(): Promise<void> {
  console.log('\nSeeding home page...')

  // Upload all images up-front so sections can reference them
  const heroBackground = await uploadImage(
    'images/hero/hero-organic-farm.jpg',
    'Organic farm harvest - fresh ingredients',
  )

  const [acoLogo, usdaLogo, euLogo, haccpLogo, halalLogo] = await Promise.all([
    uploadImage('images/logos/aco-logo.png', 'Australian Certified Organic'),
    uploadImage('images/logos/usda-organic-logo.png', 'USDA Organic'),
    uploadImage('images/logos/eu-organic-logo.png', 'EU Organic'),
    uploadImage('images/logos/haccp-logo.png', 'HACCP International'),
    uploadImage('images/logos/halal-logo.png', 'Halal Certified'),
  ])

  const [capImg0, capImg1, capImg2, capImg3, capImg4] = await Promise.all([
    uploadImage('images/categories/certified-organic.jpg', 'Certified Organic'),
    uploadImage('images/categories/herbs-spices-botanicals.jpg', 'Herbs, Spices & Botanicals'),
    uploadImage('images/categories/extract-powders.jpg', 'Extract Powders & Superfoods'),
    uploadImage('images/categories/sweeteners.jpg', 'Sweeteners'),
    uploadImage('images/categories/juices-puree.jpg', 'Juices & Puree'),
  ])

  const supplyChainImage = await uploadImage(
    'images/certified-organic-warehouse.jpg',
    'Warehouse with shipping containers and goods storage',
  )

  const [plShowcase, plSachet, plTin] = await Promise.all([
    uploadImage(
      'images/private-label/private-label-products.jpg',
      'Private label product range including pouches, tins, and jars',
    ),
    uploadImage(
      'images/private-label/sachet-packaging.jpg',
      'Sachet packaging options - Daily Greens, Collagen Beauty, Acai Powder',
    ),
    uploadImage(
      'images/private-label/daily-greens-tin.jpg',
      'Premium tin packaging with Daily Greens',
    ),
  ])

  const [premImg1, premImg2] = await Promise.all([
    uploadImage('images/products/matcha-tea-retail.jpg', 'Matcha powder retail product'),
    uploadImage('images/products/collagen-powder.jpg', 'Collagen powder sachet product'),
  ])

  // Create heroSection document (standalone, referenced from homePage)
  await client.createOrReplace({
    _id: 'heroSection-default',
    _type: 'heroSection',
    title: 'Home / Default',
    headline: 'Global Leaders in Certified Organic & Functional Ingredients',
    subheading:
      'Partnering with food, nutraceutical, and wellness brands to deliver high-quality ingredients and end-to-end solutions — from global sourcing to private label manufacturing and scalable supply.',
    primaryCta: staticCta('Browse Ingredients', '/ingredients'),
    secondaryCta: staticCta('Speak to Our Team', '/contact'),
    trustBullets: [
      'Botanicals, Extracts & Functional Ingredients',
      'Certified Organic Supply Chains',
      'Global Sourcing Network',
    ],
    ...(heroBackground ? {backgroundImage: heroBackground} : {}),
  })
  console.log('  Created/replaced: heroSection-default')

  const sectionDocuments: Array<Record<string, unknown> & {_id: string; _type: string}> = [
    {
      _id: 'marketReportBannerSection-home-report',
      _type: 'marketReportBannerSection',
      title: 'Home / Market Report Banner',
      label: 'New Report',
      heading: 'Functional Ingredients Market Analysis Report',
      cta: staticCta('View Report', '/market-analysis-report'),
    },
    {
      _id: 'certificationSection-quality-standards',
      _type: 'certificationSection',
      title: 'Home / Quality Standards',
      heading: 'Certified Quality Standards',
      certifications: [
        {_key: 'cert-0', name: 'Australian Certified Organic', ...(acoLogo ? {logo: acoLogo} : {})},
        {_key: 'cert-1', name: 'USDA Organic', ...(usdaLogo ? {logo: usdaLogo} : {})},
        {_key: 'cert-2', name: 'EU Organic', ...(euLogo ? {logo: euLogo} : {})},
        {_key: 'cert-3', name: 'HACCP International', ...(haccpLogo ? {logo: haccpLogo} : {})},
        {_key: 'cert-4', name: 'Halal Certified', ...(halalLogo ? {logo: halalLogo} : {})},
      ],
    },
    {
      _id: 'ingredientCapabilitiesSection-home',
      _type: 'ingredientCapabilitiesSection',
      title: 'Home / Ingredient Capabilities',
      heading: 'Ingredient Capabilities',
      browseLabel: 'Browse',
      categories: [
        {
          _key: 'cat-0',
          title: 'Certified Organic',
          description:
            "One of Australia's largest ranges of certified organic ingredients — ACO, USDA and EU certified, with full traceability.",
          link: staticLink('/ingredients/certified-organic'),
          ...(capImg0 ? {image: capImg0} : {}),
        },
        {
          _key: 'cat-1',
          title: 'Herbs, Spices & Botanicals',
          description:
            'Conventional and certified organic herbs, botanicals and spices for functional foods, nutraceuticals and wellness products.',
          link: staticLink('/ingredients/herbs-botanicals-spices'),
          ...(capImg1 ? {image: capImg1} : {}),
        },
        {
          _key: 'cat-2',
          title: 'Extract Powders & Superfoods',
          description:
            'High-quality superfood powders and standardised botanical extracts for functional food, beverage and supplement applications.',
          link: staticLink('/ingredients/extract-powders-superfoods'),
          ...(capImg2 ? {image: capImg2} : {}),
        },
        {
          _key: 'cat-3',
          title: 'Sweeteners / Natural & Sugar Free',
          description:
            'Clean label natural and low-GI sweetening systems for food manufacturers seeking premium sugar alternatives.',
          link: staticLink('/ingredients/sweeteners'),
          ...(capImg3 ? {image: capImg3} : {}),
        },
        {
          _key: 'cat-4',
          title: 'Juices & Puree / Vegetable & Fruit',
          description:
            'Concentrated fruit juices and purees for beverage manufacturing, NFC, single-strength and concentrated formats.',
          link: staticLink('/ingredients/juices-puree'),
          ...(capImg4 ? {image: capImg4} : {}),
        },
      ],
    },
    {
      _id: 'capabilitySection-home-stats',
      _type: 'capabilitySection',
      title: 'Home / Stats',
      heading: 'Supplying Direct To Health Focused Brands',
      stats: [
        {
          _key: 'stat-0',
          icon: icon('FiCheckCircle'),
          number: '500+',
          label: 'Premium and Organic Ingredients',
          sublabel: 'Functional, Juices, Extracts, Botanicals & More',
        },
        {
          _key: 'stat-1',
          icon: icon('FiGlobe'),
          number: '100+',
          label: 'Fully Qualified and Vetted',
          sublabel: 'Supply Partners and Producers',
        },
        {
          _key: 'stat-2',
          icon: icon('FiPackage'),
          number: 'Private Label',
          label: 'Custom Made Products',
          sublabel: 'For retail customers & distributors',
        },
        {
          _key: 'stat-3',
          icon: icon('FiFlag'),
          number: 'Australian',
          label: 'Owned and Operated',
          sublabel: 'Established 2013',
        },
      ],
    },
    {
      _id: 'certifiedOrganicSection-home-quality',
      _type: 'certifiedOrganicSection',
      title: 'Home / Quality and Supply Chain',
      label: 'Quality & Service',
      heading: 'Quality & Supply Chain Excellence',
      description:
        "Quality isn't just a promise—it's embedded in every stage of our supply chain. Through rigorous supplier selection and continuous quality monitoring, we deliver ingredients you can trust, backed by complete traceability and industry-leading certifications.",
      cta: staticCta('Read More', '/quality'),
      features: [
        {
          _key: 'feat-0',
          icon: icon('FiUsers'),
          title: 'Rigorous 2-Stage Supplier Onboarding',
          description:
            'Every supplier undergoes a comprehensive vetting process including documentation review and site audits to ensure only the highest-quality partners join our network',
        },
        {
          _key: 'feat-1',
          icon: icon('FiShield'),
          title: 'HACCP Certified Operations',
          description:
            'All facilities maintain HACCP certification with strict food safety protocols, ensuring contamination-free handling at every stage of the supply chain',
        },
        {
          _key: 'feat-2',
          icon: icon('FiClipboard'),
          title: 'Ethical Sourcing Standards',
          description:
            'We partner exclusively with suppliers committed to fair trade practices, sustainable farming methods, and complete supply chain transparency',
        },
      ],
      ...(supplyChainImage ? {supplyChainImage} : {}),
      organicHeading: "One of Australia's Leading Certified Organic Ingredient Suppliers",
      organicDescription:
        "Our certified organic range includes premium extracts, botanicals, superfoods, juices and functional ingredients sourced from trusted growers and processors across Australia and around the world. We're one of Australia's largest Certified Organic Ingredient companies with over 500 certified organic products.",
      organicCertifications: [
        {
          _key: 'ocert-0',
          name: 'ACO Certified',
          description: 'Australian Certified Organic accreditation',
          ...(acoLogo ? {logo: acoLogo} : {}),
        },
        {
          _key: 'ocert-1',
          name: 'USDA Organic',
          description: 'United States Department of Agriculture',
          ...(usdaLogo ? {logo: usdaLogo} : {}),
        },
        {
          _key: 'ocert-2',
          name: 'EU Organic',
          description: 'European Union organic standards',
          ...(euLogo ? {logo: euLogo} : {}),
        },
      ],
      certificationsCta: staticCta('View Our Certifications', '/quality'),
    },
    {
      _id: 'privateLabelSection-home',
      _type: 'privateLabelSection',
      title: 'Home / Private Label',
      heading: 'Private Label Solutions',
      description:
        'Launch your own wellness brand with our end-to-end private label services. From ingredient sourcing to finished packaging, we handle every step.',
      moqLabel: 'MOQ from',
      moqValue: '500 units',
      capabilitiesHeading: 'Complete Manufacturing Partnership',
      capabilities: [
        'Custom formulation & ingredient blending',
        'Multiple packaging formats (sachets, tins, pouches, jars)',
        'Full regulatory & export documentation',
        'Minimum order quantities from 500 units',
        'White-label or custom branded solutions',
        'Organic certification available',
      ],
      cta: staticCta('Start Your Private Label Project', '/private-label'),
      ...(plShowcase ? {showcaseImage: plShowcase} : {}),
      packagingHeading: 'Flexible Packaging Options',
      packagingDescription:
        'Choose from a variety of packaging formats to suit your brand and product requirements',
      packagingOptions: [
        {
          _key: 'pkg-0',
          title: 'Single-Serve Sachets',
          description:
            'Perfect for convenience and portion control. Available in various sizes and materials.',
          ...(plSachet ? {image: plSachet} : {}),
        },
        {
          _key: 'pkg-1',
          title: 'Premium Tins & Jars',
          description:
            'Elevated packaging for premium products. Reusable and shelf-stable options.',
          ...(plTin ? {image: plTin} : {}),
        },
      ],
      packagingNote:
        'Also available: Stand-up pouches, resealable bags, glass bottles, and bulk containers',
    },
    {
      _id: 'industriesSection-home',
      _type: 'industriesSection',
      title: 'Home / Industries',
      heading: 'Industries We Supply',
      industries: [
        {
          _key: 'ind-0',
          icon: icon('FiBox'),
          title: 'Food Manufacturing',
          description: 'Bulk ingredients for food production and processing.',
        },
        {
          _key: 'ind-1',
          icon: icon('FiDroplet'),
          title: 'Nutraceutical Brands',
          description: 'Premium ingredients for supplement formulation.',
        },
        {
          _key: 'ind-2',
          icon: icon('FiCoffee'),
          title: 'Functional Beverage Companies',
          description: 'Specialized ingredients for beverage applications.',
        },
        {
          _key: 'ind-3',
          icon: icon('FiUsers'),
          title: 'Product Development Teams',
          description: 'Innovation support and ingredient samples.',
        },
      ],
    },
    {
      _id: 'popularIngredientsSection-home',
      _type: 'popularIngredientsSection',
      title: 'Home / Trending Ingredients',
      heading: 'Trending Ingredients',
      catalogueCta: staticCta('View Top 20 Trending Products', '/ingredients'),
      trendingLabel: 'Trending',
      viewSpecsLabel: 'View specs',
      ingredients: [
        {_type: 'reference', _ref: 'ingredientCategory-certified-organic', _key: 'ing-0'},
        {_type: 'reference', _ref: 'ingredientCategory-herbs-botanicals-spices', _key: 'ing-1'},
        {
          _type: 'reference',
          _ref: 'ingredientCategory-extract-powders-superfoods',
          _key: 'ing-2',
        },
        {_type: 'reference', _ref: 'ingredientCategory-juices-puree', _key: 'ing-3'},
      ],
    },
    {
      _id: 'premiumIngredientsSection-home',
      _type: 'premiumIngredientsSection',
      title: 'Home / Premium Ingredients',
      label: 'Premium Quality',
      heading: 'Premium Ingredients for Health & Wellness',
      description:
        'We supply premium-grade botanical extracts, superfood powders, and functional ingredients to manufacturers and brands who demand excellence. Each ingredient is carefully selected and rigorously tested to meet the highest industry standards.',
      cta: staticCta('Explore Premium Range', '/ingredients'),
      features: [
        {
          _key: 'pfeat-0',
          icon: icon('FiStar'),
          title: 'Premium Grade',
          description:
            'Only the highest quality ingredients sourced from verified suppliers worldwide',
        },
        {
          _key: 'pfeat-1',
          icon: icon('FiShield'),
          title: 'Safety Tested',
          description: 'Comprehensive testing for heavy metals, pesticides, and microbiology',
        },
        {
          _key: 'pfeat-2',
          icon: icon('FiZoomIn'),
          title: 'Lab Verified',
          description: 'Third-party laboratory analysis with full certificates of analysis',
        },
      ],
      ...(premImg1 ? {imageOne: premImg1} : {}),
      ...(premImg2 ? {imageTwo: premImg2} : {}),
    },
    {
      _id: 'testimonialsSection-home',
      _type: 'testimonialsSection',
      title: 'Home / Testimonials',
      heading: 'Trusted by Health Brands Worldwide',
      subheading: 'See what our partners have to say about working with Switch Supply',
      testimonials: [
        {_type: 'reference', _ref: 'testimonial-1', _key: 'tref-1'},
        {_type: 'reference', _ref: 'testimonial-2', _key: 'tref-2'},
        {_type: 'reference', _ref: 'testimonial-3', _key: 'tref-3'},
        {_type: 'reference', _ref: 'testimonial-4', _key: 'tref-4'},
      ],
    },
    {
      _id: 'finalCtaSection-home-partnerships',
      _type: 'finalCtaSection',
      title: 'Home / Partnerships CTA',
      heading: 'Building Long-Term Partnerships',
      subheading:
        "We're committed to sustainable growth through ethical sourcing and reliable supply chain excellence.",
      benefits: [
        'Access to the best-quality ingredients at competitive prices.',
        'Hassle-free shipping and smooth supply chain solutions.',
        "A global partner network, so you can get rare and niche ingredients others can't.",
        'Sustainable and ethical sourcing practices',
      ],
      cta: staticCta('Get in Touch', '/contact'),
    },
  ]

  for (const sectionDocument of sectionDocuments) {
    await client.createOrReplace(sectionDocument)
    console.log(`  Created/replaced: ${sectionDocument._id}`)
  }

  const sections = [
    {
      _type: 'reference',
      _ref: 'marketReportBannerSection-home-report',
      _key: 'section-market-report-banner',
    },
    {_type: 'reference', _ref: 'heroSection-default', _key: 'section-hero'},
    {
      _type: 'reference',
      _ref: 'certificationSection-quality-standards',
      _key: 'section-certifications',
    },
    {
      _type: 'reference',
      _ref: 'ingredientCapabilitiesSection-home',
      _key: 'section-ingredient-capabilities',
    },
    {_type: 'reference', _ref: 'capabilitySection-home-stats', _key: 'section-capability'},
    {
      _type: 'reference',
      _ref: 'certifiedOrganicSection-home-quality',
      _key: 'section-certified-organic',
    },
    {_type: 'reference', _ref: 'privateLabelSection-home', _key: 'section-private-label'},
    {_type: 'reference', _ref: 'industriesSection-home', _key: 'section-industries'},
    {
      _type: 'reference',
      _ref: 'popularIngredientsSection-home',
      _key: 'section-popular-ingredients',
    },
    {
      _type: 'reference',
      _ref: 'premiumIngredientsSection-home',
      _key: 'section-premium-ingredients',
    },
    {_type: 'reference', _ref: 'testimonialsSection-home', _key: 'section-testimonials'},
    {_type: 'reference', _ref: 'finalCtaSection-home-partnerships', _key: 'section-final-cta'},
  ]

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    title: 'Home Page',
    sections,
  })
  console.log('  Created/replaced: homePage')
}
