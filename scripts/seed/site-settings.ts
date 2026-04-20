import { client } from "./client.js";

export async function seedSiteSettings(): Promise<void> {
  console.log("\nSeeding site settings...");

  const doc = {
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Switch Supply",
    tagline: "Australia's Premium Ingredient Supplier",
    phone: "+61 1300 844 351",
    phoneHref: "tel:+611300844351",
    email: "contact@switchsupply.com",
    emailHref: "mailto:contact@switchsupply.com",
    siteDescription:
      "Global supplier of certified organic, botanical and functional ingredients.",
    navLinks: [
      { _key: "nav-1", label: "Ingredients", href: "/ingredients" },
      {
        _key: "nav-2",
        label: "Certified Organic",
        href: "/ingredients/certified-organic",
      },
      { _key: "nav-3", label: "Private Label", href: "/private-label" },
      { _key: "nav-4", label: "Quality", href: "/quality" },
      { _key: "nav-5", label: "About", href: "/about" },
    ],
    productLinks: [
      {
        _key: "prod-1",
        label: "Certified Organic",
        href: "/ingredients/certified-organic",
      },
      {
        _key: "prod-2",
        label: "Herbs & Botanicals",
        href: "/ingredients/herbs-botanicals-spices",
      },
      {
        _key: "prod-3",
        label: "Extracts & Superfoods",
        href: "/ingredients/extract-powders-superfoods",
      },
      { _key: "prod-4", label: "Private Label", href: "/private-label" },
    ],
    companyLinks: [
      { _key: "comp-1", label: "About Us", href: "/about" },
      { _key: "comp-2", label: "Quality", href: "/quality" },
      {
        _key: "comp-3",
        label: "Certifications",
        href: "/quality#certifications",
      },
      { _key: "comp-4", label: "Contact", href: "/contact" },
    ],
  };

  await client.createOrReplace(doc);
  console.log("  Created/replaced: siteSettings");
}
