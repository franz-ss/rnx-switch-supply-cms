// scripts/seed/blogPosts.ts
import { client, uploadImage } from "./client.js";

type ImageRef = Awaited<ReturnType<typeof uploadImage>>;

// ── Portable Text helpers ────────────────────────────────────────────────────

let _keyCounter = 0;
const k = () => `k${++_keyCounter}`;

const span = (text: string, marks: string[] = []) => ({
  _type: "span" as const,
  _key: k(),
  text,
  marks,
});
const strong = (text: string) => span(text, ["strong"]);

const h2 = (text: string) => ({
  _type: "block" as const,
  _key: k(),
  style: "h2",
  children: [span(text)],
  markDefs: [] as object[],
});

function p(...children: ReturnType<typeof span>[]) {
  return {
    _type: "block" as const,
    _key: k(),
    style: "normal",
    children,
    markDefs: [] as object[],
  };
}

function bullet(...children: ReturnType<typeof span>[]) {
  return {
    _type: "block" as const,
    _key: k(),
    style: "normal",
    listItem: "bullet",
    level: 1,
    children,
    markDefs: [] as object[],
  };
}

function number(...children: ReturnType<typeof span>[]) {
  return {
    _type: "block" as const,
    _key: k(),
    style: "normal",
    listItem: "number",
    level: 1,
    children,
    markDefs: [] as object[],
  };
}

const img = (ref: ImageRef, alt: string) =>
  ref ? { _type: "image" as const, _key: k(), asset: ref, alt } : null;

// ── Post content ─────────────────────────────────────────────────────────────

function functionalNutritionContent(
  targetedWellnessImg: ImageRef,
  productFormatsImg: ImageRef,
) {
  return [
    h2("The Rise of Targeted Wellness"),
    p(
      span(
        "This demand is driven by consumers seeking specific, targeted benefits rather than generic \"health\" claims. Gone are the days of vague promises; today's consumers are educated and looking for solutions to their distinct health concerns. Gut health, immunity, cognitive performance, beauty-from-within, and stress management have emerged as top priorities, particularly among millennials and Gen Z consumers. These demographic groups are proactive about their health and are willing to invest in products that deliver tangible results.",
      ),
    ),
    img(targetedWellnessImg, "Targeted wellness consumer priorities"),
    p(strong("Key Consumer Priorities:")),
    bullet(
      strong("Gut Health:"),
      span(" Driven by awareness of the gut-brain axis and digestive comfort."),
    ),
    bullet(
      strong("Immunity:"),
      span(
        " Heightened demand post-pandemic for products supporting immune function.",
      ),
    ),
    bullet(
      strong("Cognitive Performance:"),
      span(
        " Focus on ingredients that support memory, focus, and mental clarity.",
      ),
    ),
    bullet(
      strong("Beauty-from-Within:"),
      span(
        " A growing segment connecting nutrition to skin, hair, and nail health.",
      ),
    ),
    bullet(
      strong("Stress Management:"),
      span(
        " Increasing interest in adaptogens and calming ingredients for mental well-being.",
      ),
    ),
    p(
      span(
        "As a result, brands are increasingly looking for ingredients that can be easily integrated into diverse product formats: powders, capsules, gummies, functional beverages, and food items like snack bars and yogurts. The versatility of an ingredient is now as crucial as its efficacy.",
      ),
    ),
    img(productFormatsImg, "Functional ingredient product formats"),
    h2("Private Labeling: Accelerating Market Entry"),
    p(
      span(
        "From a private labeling perspective, this shift presents a major opportunity. Instead of incurring the significant time and cost of developing formulations from scratch, brands can leverage existing, validated functional ingredient blends or customize proven formulations. This approach dramatically accelerates time-to-market, allowing brands to capitalize on emerging trends while they are still hot. It also significantly reduces R&D risk, as the core efficacy has often been established.",
      ),
    ),
    p(
      span(
        "Private label solutions offer flexibility in dosage, format, and brand positioning, empowering businesses to create unique products tailored to their target audience without the heavy upfront investment.",
      ),
    ),
    h2("Navigating Supply Chain Volatility"),
    p(
      span(
        "However, increased demand has also placed considerable pressure on supply chains. Ingredients such as collagen peptides, certain probiotics, and botanical extracts are experiencing periodic shortages and price fluctuations. Brands that rely on single-source suppliers may face delays or rising costs, directly impacting profitability and consumer satisfaction. This underscores the critical need for robust, diversified sourcing strategies.",
      ),
    ),
    p(strong("The Role of Strategic Sourcing:")),
    bullet(
      strong("Multi-Origin Sourcing:"),
      span(" Reducing reliance on a single geographical region or supplier."),
    ),
    bullet(
      strong("Alternative Ingredient Grades:"),
      span(
        " Exploring different forms or concentrations that offer similar benefits.",
      ),
    ),
    bullet(
      strong("Formulation Guidance:"),
      span(
        " Expert advice on ingredient substitution without compromising product integrity.",
      ),
    ),
    p(
      span(
        "Private label suppliers play a critical role here by offering alternative ingredient grades, multi-origin sourcing, and expert formulation guidance that balances efficacy, cost, and availability. In many cases, slight adjustments in ingredient composition—without compromising performance—can help brands maintain healthy margins while consistently meeting consumer expectations. This proactive approach to supply chain management is a cornerstone of success in the rapidly evolving functional nutrition landscape.",
      ),
    ),
    p(strong("The Road Ahead: Agile & Insight-Driven")),
    p(
      span(
        "As functional nutrition continues to evolve, successful brands will be those that pair strong consumer insights with agile sourcing and formulation strategies. Understanding what consumers want and having the operational flexibility to deliver it quickly and reliably will be paramount. Private labeling, when executed strategically with a reliable partner, enables brands to respond swiftly to these dynamic trends while effectively managing operational complexity. This allows them to focus on what they do best: building their brand and connecting with their customers.",
      ),
    ),
  ].filter(Boolean);
}

function supplyChainContent(marketChartImg: ImageRef) {
  return [
    p(
      span(
        "Long lead times, high minimum order quantities (MOQs), and a lack of formulation flexibility can paralyze product launches and erode profit margins overnight. As a result, forward-thinking companies are rapidly turning to ",
      ),
      strong("private label ingredient solutions"),
      span(" as a strategic lever to maintain agility and build resilience."),
    ),
    h2("Agility in an Uncertain World"),
    p(
      span(
        "Private labeling is no longer just a low-cost alternative; it's a strategic imperative for navigating modern supply chain chaos. By partnering with a private label specialist, brands gain immediate access to pre-validated ingredient specifications, a network of flexible sourcing options, and significantly faster turnaround times.",
      ),
    ),
    p(
      span(
        "Instead of being locked into a single supplier's dwindling inventory or unchangeable formulation, private label partnerships allow brands to adapt quickly. Faced with a sudden shortage of a specific protein from one region? A private label partner can swiftly switch to a pre-approved alternative origin or adjust the blend without a lengthy requalification process, keeping production lines running.",
      ),
    ),
    img(
      marketChartImg,
      "Global Private Label Packaged Food Market by Product Type 2025",
    ),
    h2("Risk Diversification as a Core Strategy"),
    p(
      span("A key driver behind this shift is "),
      strong("risk diversification"),
      span(
        ". By working with private label partners that manage relationships with multiple upstream suppliers across different geographies, brands effectively insulate themselves from localized disruptions. This is particularly critical for high-demand, volatility-prone ingredients like plant proteins, natural sweeteners, and functional botanical actives, where shortages can occur with little warning due to weather events or trade policy shifts.",
      ),
    ),
    p(
      span("According to a 2025 survey on supply chain risk, "),
      strong("39% of companies are actively pursuing dual sourcing strategies"),
      span(
        " to mitigate disruptions, a move that is inherent to the private label model.",
      ),
    ),
    h2("Cost Predictability & Margin Protection"),
    p(
      span(
        "Beyond resilience, cost predictability is a major factor. Private label suppliers often aggregate demand across multiple clients, giving them greater purchasing power to negotiate more stable, long-term pricing with producers. For brands operating in competitive markets with tight margins, this stability can make a meaningful difference to the bottom line.",
      ),
    ),
    p(
      span(
        "Ultimately, private labeling has evolved from a tactical cost-saving measure into a primary ",
      ),
      strong("resilience strategy"),
      span(
        ". Brands that prioritize flexible sourcing and agile formulation through private label partnerships are better positioned to navigate uncertainty, protect their margins, and continue meeting consumer demand without interruption.",
      ),
    ),
  ].filter(Boolean);
}

function cleanLabelContent(marketChartImg: ImageRef) {
  return [
    p(
      span("According to recent industry research, "),
      strong(
        "56% of consumers are now willing to pay more for products made with recognizable ingredients, while 60% of global consumers actively reduce their salt intake",
      ),
      span(
        ", opting for clean label alternatives (Ingredion, 2025; Innova Market Insights, 2024). This shift is not merely a preference; it is a mandate forcing brands across food, beverage, and nutraceutical sectors to rethink traditional formulations.",
      ),
    ),
    h2('The Technical Hurdles of "Natural"'),
    p(
      span(
        "Transitioning away from synthetic ingredients is rarely a simple swap. Ingredients such as artificial colors, potent preservatives like sodium benzoate, and synthetic emulsifiers have historically provided robust performance at a low cost.",
      ),
    ),
    img(
      marketChartImg,
      "Clean Label Ingredients Market Size by Region 2020-2023",
    ),
    p(
      span(
        "Replacing these with natural alternatives introduces significant technical and commercial challenges:",
      ),
    ),
    bullet(
      strong("Sensory Compromise:"),
      span(
        " Natural colors are often less stable under heat or light. Natural flavor enhancers may lack the punch of artificial counterparts.",
      ),
    ),
    bullet(
      strong("Shelf-Life Reduction:"),
      span(
        " Botanical extracts often have narrower efficacy ranges against spoilage microorganisms compared to synthetic preservatives.",
      ),
    ),
    bullet(
      strong("Cost Implications:"),
      span(
        " Natural, sustainably sourced functional ingredients almost always command a premium over synthetic commodities.",
      ),
    ),
    p(
      span(
        "The challenge for brands is not just removing the \"bad\" ingredients, but maintaining the sensory experience and price point consumers expect.",
      ),
    ),
    h2("The Private Label Pathway to Reformulation"),
    p(
      span(
        "Private labeling offers a highly practical and scalable pathway for clean label reformulation. Rather than attempting to build internal expertise on obscure natural hydrocolloids or botanical preservation systems, brands can leverage private label manufacturers who already specialize in these areas.",
      ),
    ),
    p(
      span(
        "By working with suppliers experienced in natural ingredient supply chains and functional replacements, brands can accelerate their R&D cycles. For example, the global market for clean label ingredients is projected to reach ",
      ),
      strong("$56.59 billion in 2025"),
      span(
        ", driven largely by innovations in natural colors and flavors (The Business Research Company, 2025).",
      ),
    ),
    h2("Ingredient Swaps in Action"),
    bullet(
      strong("Replacing Synthetic Stabilizers:"),
      span(
        ' Instead of modified starches, formulators are turning to upcycled citrus fibers and chickpea protein, which provide necessary viscosity while appearing "clean" on a label.',
      ),
    ),
    bullet(
      strong("Natural Preservation:"),
      span(
        " Suppliers are utilizing blends of botanical extracts (like rosemary or acerola) and fermentation-derived metabolites that naturally inhibit spoilage without triggering consumer alarm.",
      ),
    ),
    h2("Strategic Balance: The Path Forward"),
    p(
      span(
        "The ultimate challenge lies in balancing transparency, cost, and performance. A product with a pristine ingredient list that tastes inferior or spoils quickly will fail. Brands that utilize the existing expertise of private label partners are best positioned to succeed. In the current landscape, agility in reformulation is a competitive advantage.",
      ),
    ),
  ].filter(Boolean);
}

function sustainabilityContent(
  supplyChainMappingImg: ImageRef,
  brandTrustImg: ImageRef,
) {
  return [
    p(
      span(
        "This shift is driven by a confluence of factors: heightened consumer awareness, investor pressure for ESG (Environmental, Social, and Governance) performance, and a tightening global regulatory environment.",
      ),
    ),
    h2("The New Standard: Evidence Over Claims"),
    p(
      span(
        "Modern procurement teams are tasked with mitigating risk and ensuring compliance. This means they expect suppliers to provide concrete documentation that validates their sustainability claims. Key buyer expectations now include:",
      ),
    ),
    bullet(
      strong("Origin Transparency:"),
      span(
        " Granular data on where ingredients are grown or produced, down to the farm or regional level.",
      ),
    ),
    bullet(
      strong("Certifications & Compliance:"),
      span(
        " Proof of adherence to recognized standards (e.g., Organic, Fair Trade, Rainforest Alliance) and readiness for emerging regulations like the ",
      ),
      strong("EU Deforestation Regulation (EUDR)"),
      span(
        ", which mandates deforestation-free supply chains for key commodities by late 2025 (White & Case, 2024).",
      ),
    ),
    bullet(
      strong("Supply Chain Mapping:"),
      span(
        " Visibility beyond Tier 1 suppliers to understand the entire journey of an ingredient, identifying potential social or environmental risks upstream.",
      ),
    ),
    img(
      supplyChainMappingImg,
      "Supply chain mapping and sustainability traceability",
    ),
    p(
      span(
        "In many cases, the scope of sustainability has broadened. Buyers are increasingly evaluating the entire product lifecycle, looking for partners who can support initiatives in ",
      ),
      strong(
        "sustainable packaging, low-carbon logistics, and waste reduction",
      ),
      span(" programs."),
    ),
    h2("The Role of Private Label Partners"),
    p(
      span(
        "Private label suppliers are finding themselves at the forefront of this change. They are no longer just contract manufacturers; they are strategic partners in sustainability. To remain competitive, they are increasingly expected to:",
      ),
    ),
    number(
      strong("Offer Traceable Ingredients:"),
      span(
        " Implement technology solutions like blockchain or digital tracing platforms to provide immutable records of an ingredient's journey.",
      ),
    ),
    number(
      strong("Provide Certified Options:"),
      span(
        " Pre-source a portfolio of ingredients that already carry in-demand certifications, reducing the compliance burden for brands.",
      ),
    ),
    number(
      strong("Deliver Clear Documentation:"),
      span(
        " Streamline the flow of data, certificates of analysis (COAs), and sustainability scorecards to make buyer due diligence effortless.",
      ),
    ),
    p(
      span(
        "Brands that integrate sustainability directly into their sourcing strategy — rather than treating it as an afterthought — are gaining a significant advantage. They are not only meeting regulatory demands and buyer expectations but are also building a foundation of brand trust that is resilient to scrutiny.",
      ),
    ),
    img(brandTrustImg, "Building brand trust through sustainable sourcing"),
  ].filter(Boolean);
}

// ── Main seed function ────────────────────────────────────────────────────────

export async function seedBlogPosts(): Promise<void> {
  console.log("\nSeeding blog posts...");

  // Upload all images in parallel groups
  const [
    [fnHero, fnTargeted, fnFormats],
    [scHero, scChart],
    [clHero, clChart],
    [stHero, stMapping, stTrust],
  ] = await Promise.all([
    Promise.all([
      uploadImage(
        "images/blog/functional-nutrition-demand/hero.png",
        "Functional nutrition private label products",
      ),
      uploadImage(
        "images/blog/functional-nutrition-demand/targeted-wellness.png",
        "Targeted wellness consumer priorities",
      ),
      uploadImage(
        "images/blog/functional-nutrition-demand/product-formats.png",
        "Functional ingredient product formats",
      ),
    ]),
    Promise.all([
      uploadImage(
        "images/blog/supply-chain-volatility/hero.png",
        "Supply chain volatility private label ingredients",
      ),
      uploadImage(
        "images/blog/supply-chain-volatility/market-chart.png",
        "Global Private Label Packaged Food Market by Product Type 2025",
      ),
    ]),
    Promise.all([
      uploadImage(
        "images/blog/clean-label-reformulation/hero.png",
        "Clean label reformulation ingredients",
      ),
      uploadImage(
        "images/blog/clean-label-reformulation/market-chart.png",
        "Clean Label Ingredients Market Size by Region 2020-2023",
      ),
    ]),
    Promise.all([
      uploadImage(
        "images/blog/sustainability-traceability/hero.png",
        "Sustainability and traceability in ingredient sourcing",
      ),
      uploadImage(
        "images/blog/sustainability-traceability/supply-chain-mapping.png",
        "Supply chain mapping and sustainability traceability",
      ),
      uploadImage(
        "images/blog/sustainability-traceability/brand-trust.png",
        "Building brand trust through sustainable sourcing",
      ),
    ]),
  ]);

  const posts = [
    {
      _id: "blogPost-functional-nutrition-demand",
      _type: "blogPost",
      title:
        "Functional Nutrition Demand Is Surging: What This Means for Private Label Brands",
      slug: { _type: "slug", current: "functional-nutrition-demand" },
      author: "Jack Ananchenko",
      category: "Market Trends",
      categoryColor: "green",
      excerpt:
        "The global ingredient market is undergoing a significant shift as functional nutrition moves from niche to mainstream.",
      publishedAt: "2025-12-28T00:00:00.000Z",
      ...(fnHero ? { heroImage: fnHero } : {}),
      content: functionalNutritionContent(fnTargeted, fnFormats),
      citations: [
        {
          _key: "c1",
          label:
            "Functional Foods Global Market Report 2025 by The Business Research Company",
          href: "https://www.thebusinessresearchcompany.com/report/functional-foods-global-market-report",
        },
        {
          _key: "c2",
          label:
            "Megatrends in Functional Nutrition for 2026 and Beyond by Glanbia (citing Innova Market Insights)",
          href: "https://www.glanbia.com/news/megatrends-functional-nutrition-2026-and-beyond",
        },
        {
          _key: "c3",
          label:
            "On-the-Go Functional Drinks: Formulating for Millennials & Gen Z by Good Culture",
          href: "https://www.goodcultureingredients.com/blog/functional-drinks-millennials-genz",
        },
        {
          _key: "c4",
          label:
            "How Increasing Weather Disruption is Affecting Supply Chains (Supply Chain Digital, Dec 2025)",
          href: "https://supplychaindigital.com/news/how-increasing-weather-disruption-is-affecting-supply-chains",
        },
        {
          _key: "c5",
          label:
            "Functional Food Ingredient Market Size & Growth [2025-2033] by Global Growth Insights",
          href: "https://www.globalgrowthinsights.com/market-reports/functional-food-ingredient-market-106635",
        },
      ],
    },
    {
      _id: "blogPost-supply-chain-volatility",
      _type: "blogPost",
      title:
        "Supply Chain Volatility Is Driving the Rise of Private Label Ingredients",
      slug: { _type: "slug", current: "supply-chain-volatility" },
      author: "Jack Ananchenko",
      category: "Supply Chain",
      categoryColor: "mist",
      excerpt:
        "Global ingredient supply chains have become increasingly complex and unpredictable. A perfect storm of climate disruptions, geopolitical tensions, and logistics bottlenecks has created a new normal of volatility.",
      publishedAt: "2026-02-12T00:00:00.000Z",
      ...(scHero ? { heroImage: scHero } : {}),
      content: supplyChainContent(scChart),
      citations: [
        {
          _key: "c1",
          label:
            "How increasing weather disruption is affecting supply chains by Supply Chain Digital",
          href: "https://supplychaindigital.com/news/how-increasing-weather-disruption-is-affecting-supply-chains",
        },
        {
          _key: "c2",
          label:
            "Private label packaged food market forecast, 2025-2032 from Coherent Market Insights",
          href: "https://www.coherentmarketinsights.com/industry-reports/private-label-packaged-food-market",
        },
        {
          _key: "c3",
          label:
            "Supply chain risk pulse 2025: Tariffs reshuffle global trade priorities by McKinsey",
          href: "https://www.mckinsey.com/capabilities/operations/our-insights/supply-chain-risk-survey",
        },
        {
          _key: "c4",
          label:
            "Food Ingredients Market Size to Hit USD 561.61 Bn By 2034 by Precedence Research",
          href: "https://www.precedenceresearch.com/food-ingredients-market",
        },
        {
          _key: "c5",
          label: "Key Components of a Supply Chain",
          href: "https://www.linkedin.com/posts/ekramul-aust-ipe_key-components-of-supply-chain-activity-7342960486545530880-euHa",
        },
      ],
    },
    {
      _id: "blogPost-clean-label-reformulation",
      _type: "blogPost",
      title:
        "Clean Label Reformulation: Balancing Transparency, Performance, and Profitability",
      slug: { _type: "slug", current: "clean-label-reformulation" },
      author: "Jack Ananchenko",
      category: "Product Innovation",
      categoryColor: "cream",
      excerpt:
        "Clean label expectations have moved rapidly from a marketing advantage to an absolute market requirement. Shoppers are increasingly scrutinizing ingredient lists and favoring products with fewer additives.",
      publishedAt: "2026-02-12T00:00:00.000Z",
      ...(clHero ? { heroImage: clHero } : {}),
      content: cleanLabelContent(clChart),
      citations: [
        {
          _key: "c1",
          label:
            "Less mystery, more meaning: Clean labels win consumer preference by Ingredion",
          href: "https://www.ingredion.com/na/en-us/be-whats-next/consumer-preference-clean-labels-healthier-choices",
        },
        {
          _key: "c2",
          label: "Global clean label trends 2024 by Innova Market Insights",
          href: "https://www.innovamarketinsights.com/trends/global-clean-label-trends/",
        },
        {
          _key: "c3",
          label:
            "Clean Label Ingredients Market Size by Global Market Insights",
          href: "https://www.gminsights.com/industry-analysis/clean-label-ingredients-market",
        },
        {
          _key: "c4",
          label:
            "Clean label ingredients market share, size, trends, industry analysis report, 2025-2034 by Polaris Market Research",
          href: "https://www.polarismarketresearch.com/industry-analysis/clean-label-ingredients-market",
        },
        {
          _key: "c5",
          label:
            "Clean label ingredients global market report 2025 by The Business Research Company",
          href: "https://www.thebusinessresearchcompany.com/report/clean-label-ingredients-global-market-report",
        },
      ],
    },
    {
      _id: "blogPost-sustainability-traceability",
      _type: "blogPost",
      title: "Sustainability and Traceability: What Buyers Really Expect",
      slug: { _type: "slug", current: "sustainability-traceability" },
      author: "Jack Ananchenko",
      category: "Sustainability",
      categoryColor: "green",
      excerpt:
        "The days of relying on broad, unsubstantiated claims are over. Today's sophisticated B2B buyers demand verifiable proof of responsible practices at every stage of the supply chain.",
      publishedAt: "2026-02-12T00:00:00.000Z",
      ...(stHero ? { heroImage: stHero } : {}),
      content: sustainabilityContent(stMapping, stTrust),
      citations: [
        {
          _key: "c1",
          label:
            "What is supply chain traceability and its importance? By Carbon Trail",
          href: "https://carbontrail.net/blog/what-is-supply-chain-traceability-and-its-importance/",
        },
        {
          _key: "c2",
          label:
            "Sustainable supply chains and the European Deforestation Regulation (EUDR): Implications for ingredients such as cocoa. By FoodChain ID",
          href: "https://www.foodchainid.com/resources/sustainable-supply-chains-and-the-european-deforestation-regulation-eudr-implications-for-the-ingredients-such-as-cocoa/",
        },
        {
          _key: "c3",
          label:
            "Supply chain traceability: Best practices and key benefits. By TraceBeyond",
          href: "https://www.tradebeyond.com/blog/supply-chain-traceability-best-practices-and-key-benefits",
        },
        {
          _key: "c4",
          label:
            "10 key things you STILL need to know about the new EU Deforestation Regulation. By White & Case",
          href: "https://www.whitecase.com/insight-alert/10-key-things-you-still-need-know-about-new-eu-deforestation-regulation",
        },
      ],
    },
  ];

  for (const post of posts) {
    await client.createOrReplace(post);
    console.log(`  Created/replaced: ${post.slug.current}`);
  }
}
