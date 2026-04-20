import { client, uploadImage } from "./client.js";

interface FeaturedIngredient {
  name: string;
  description: string;
}

interface IngredientCategoryData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  imageFile: string;
  imageAlt: string;
  featuredIngredients: FeaturedIngredient[];
  applications: string[];
  seoTitle: string;
  seoDescription: string;
}

const categoryData: IngredientCategoryData[] = [
  {
    slug: "certified-organic",
    title: "Australian Certified Organic",
    tagline: "Certified Organic Ingredients",
    description:
      "Our certified organic range includes botanicals, superfoods, extracts, juices and specialty ingredients sourced from trusted growers and processors across Australia and around the world.",
    imageFile: "certified-organic-lg.jpg",
    imageAlt: "Certified organic farm harvest with fresh produce",
    featuredIngredients: [
      {
        name: "Organic Matcha Powder",
        description: "Ceremonial and culinary grade for functional beverages",
      },
      {
        name: "Organic Ashwagandha",
        description:
          "Standardised root extract for stress and adaptogen blends",
      },
      {
        name: "Organic Cacao Powder",
        description:
          "Raw and processed grades for confectionery and health foods",
      },
      {
        name: "Organic Turmeric",
        description:
          "High-curcumin root powder for anti-inflammatory formulations",
      },
    ],
    applications: [
      "Certified organic supplements and capsules",
      "Functional food and beverage products",
      "Organic protein and superfood blends",
      "Clean-label health bars and snacks",
    ],
    seoTitle:
      "Australian Certified Organic Ingredient Supplier | Switch Supply",
    seoDescription:
      "One of Australia's largest certified organic ingredient suppliers. Source ACO, USDA and EU organic botanicals, superfoods and extracts with full traceability.",
  },
  {
    slug: "herbs-botanicals-spices",
    title: "Herbs, Botanicals & Spices",
    tagline: "Botanical Ingredient Supplier",
    description:
      "Our range of herbs, botanicals and spices includes both conventional and certified organic ingredients used in functional foods, nutraceuticals, beverages and wellness products.",
    imageFile: "herbs-spices-botanicals-lg.jpg",
    imageAlt: "Chamomile flowers and botanical raw ingredients",
    featuredIngredients: [
      {
        name: "Lion's Mane Extract",
        description:
          "Standardised mushroom extract for cognitive and nootropic formulations",
      },
      {
        name: "Chamomile Flower",
        description: "Whole and powdered for sleep and relaxation products",
      },
      {
        name: "Ginger Root",
        description:
          "Conventional and organic grades for digestive health blends",
      },
      {
        name: "Echinacea Extract",
        description: "Standardised for immune support supplements",
      },
    ],
    applications: [
      "Herbal supplement capsules and tablets",
      "Botanical teas and infusions",
      "Functional beverage blends",
      "Nutraceutical powder mixes",
    ],
    seoTitle: "Herbs, Botanicals & Spices Supplier Australia | Switch Supply",
    seoDescription:
      "Premium botanical ingredients supplier for nutraceuticals, functional foods, and wellness products. Certified organic options available.",
  },
  {
    slug: "extract-powders-superfoods",
    title: "Extract Powders & Superfoods",
    tagline: "Superfood & Extract Supplier",
    description:
      "High-quality superfood ingredients and standardised extract powders for functional food, beverage and supplement applications. Our range includes both conventional and certified organic options.",
    imageFile: "extract-powders-lg.jpg",
    imageAlt: "Matcha powder and superfood extract ingredients",
    featuredIngredients: [
      {
        name: "Spirulina Powder",
        description:
          "Algae-based protein and micronutrient source for health foods",
      },
      {
        name: "Reishi Extract",
        description: "Standardised mushroom extract for immunity formulations",
      },
      {
        name: "Acai Powder",
        description: "Freeze-dried antioxidant powder for functional beverages",
      },
      {
        name: "Camu Camu",
        description: "Natural vitamin C source for immune support products",
      },
    ],
    applications: [
      "Superfood blend powders and sachets",
      "Sports nutrition and protein products",
      "Green drinks and algae-based beverages",
      "Functional supplement capsules",
    ],
    seoTitle:
      "Extract Powders & Superfood Ingredients Supplier | Switch Supply",
    seoDescription:
      "Bulk superfood powders and standardised botanical extracts for supplement and functional food manufacturers in Australia and globally.",
  },
  {
    slug: "sweeteners",
    title: "Sweeteners",
    tagline: "Natural Sweetener Supplier",
    description:
      "Clean label natural and low-GI sweetening systems for food manufacturers and product developers seeking sugar alternatives. Our range covers natural, low-GI and organic options.",
    imageFile: "sweeteners-lg.jpg",
    imageAlt: "Natural sweetener ingredients for food and beverage",
    featuredIngredients: [
      {
        name: "Organic Coconut Sugar",
        description:
          "Low-GI granulated sweetener for clean label baking and snacks",
      },
      {
        name: "Stevia Extract",
        description:
          "High-purity Reb-A and Reb-M for zero-calorie formulations",
      },
      {
        name: "Monk Fruit Extract",
        description: "Natural zero-calorie sweetener for functional beverages",
      },
      {
        name: "Organic Maple Powder",
        description: "Spray-dried for dry blends and flavouring applications",
      },
    ],
    applications: [
      "Low-sugar and reduced-calorie food products",
      "Functional and sports beverages",
      "Health bars and confectionery",
      "Protein powders and supplement blends",
    ],
    seoTitle:
      "Natural Sweetener Ingredients Supplier Australia | Switch Supply",
    seoDescription:
      "Bulk natural and low-GI sweeteners for food manufacturers and product developers. Stevia, coconut sugar, monk fruit and more.",
  },
  {
    slug: "juices-puree",
    title: "Juices & Puree",
    tagline: "Juice Concentrate Supplier",
    description:
      "Concentrated fruit juices and purees for beverage manufacturing and nutraceutical applications. Our range includes NFC, single-strength and concentrated formats.",
    imageFile: "juices-puree-lg.jpg",
    imageAlt: "Fresh fruit and vegetable juice ingredients",
    featuredIngredients: [
      {
        name: "Lemon Juice Concentrate",
        description: "High-brix concentrate for beverages and food flavouring",
      },
      {
        name: "Mango Puree",
        description: "Aseptic packed puree for smoothies and beverage blends",
      },
      {
        name: "Ginger Juice",
        description: "Cold-pressed for wellness shots and functional drinks",
      },
      {
        name: "Pomegranate Concentrate",
        description: "Antioxidant-rich for health beverages and supplements",
      },
    ],
    applications: [
      "Ready-to-drink functional beverages",
      "Smoothie and juice blends",
      "Flavoured water and sports drinks",
      "Nutraceutical liquid formulations",
    ],
    seoTitle: "Juice Concentrates & Puree Supplier Australia | Switch Supply",
    seoDescription:
      "Bulk fruit juice concentrates and purees for beverage manufacturers and food producers. NFC, single-strength and concentrated formats available.",
  },
];

export async function seedCategories(): Promise<void> {
  console.log("\nSeeding ingredient categories...");

  for (const cat of categoryData) {
    const id = `ingredientCategory-${cat.slug}`;
    console.log(`\n[${id}]`);

    const heroImage = await uploadImage(
      `images/categories/${cat.imageFile}`,
      cat.imageAlt,
    );

    const doc = {
      _id: id,
      _type: "ingredientCategory",
      slug: { _type: "slug", current: cat.slug },
      title: cat.title,
      tagline: cat.tagline,
      description: cat.description,
      ...(heroImage ? { heroImage } : {}),
      featuredIngredients: cat.featuredIngredients.map((ing, i) => ({
        _key: `ing-${i}`,
        ...ing,
      })),
      applications: cat.applications,
      seoTitle: cat.seoTitle,
      seoDescription: cat.seoDescription,
    };

    await client.createOrReplace(doc);
    console.log(`  Created/replaced: ${id}`);
  }
}
