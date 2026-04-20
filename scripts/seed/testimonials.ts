import { client } from "./client.js";

interface TestimonialData {
  id: string;
  name: string;
  company: string;
  role?: string;
  text: string;
  rating: number;
  order: number;
}

const testimonialData: TestimonialData[] = [
  {
    id: "testimonial-1",
    name: "Lucy Ward",
    company: "St. Ali, stali.com.au",
    text: "Switch Supply has been an outstanding supplier and trusted partner in bringing our products to life. Over our long-standing relationship across multiple product lines, they have consistently delivered excellent service and reliable, prompt shipments. Their professionalism, attention to detail, and responsiveness have made our collaboration seamless and productive. We highly recommend Switch Supply to any business seeking a dependable supplier who truly understands the value of partnership.",
    rating: 5,
    order: 1,
  },
  {
    id: "testimonial-2",
    name: "Kylie Shaw",
    company: "Buy Organics Online",
    role: "Owner",
    text: "We've been working with Switch Supply since early 2025, and their support has been invaluable in navigating the complexities of sourcing quality products. Having them close by gives us confidence, reduces risk, and opens the door to their extensive network for new product opportunities. Their professionalism and commitment make the process seamless and worry-free. I highly recommend their services — Lucas, in particular, has been fantastic to work with.",
    rating: 5,
    order: 2,
  },
  {
    id: "testimonial-3",
    name: "Julia Blair",
    company: "Remedy Drinks",
    role: "Global Head of Manufacturing",
    text: "As Australia's leading \"better-for-you\" beverage manufacturer, here at Remedy Drinks we consider quality, consistency, and trusted partnerships to be at the heart of everything we do.\nOur long-standing relationship with Switch Supply has been vital in supporting our growth and upholding the high standards our consumers expect.\nSwitch Supply reliably provides us with high-quality ingredients which are key to our product range. Their exceptional service and support is always responsive, proactive, and collaborative, making them a true partner in our success.\nThanks to their efficient sourcing strategies and deep understanding of our supply chain, we've achieved significant cost savings without compromising quality.\nTheir consistent, on-time, and in-full deliveries ensure uninterrupted production and guarantee our amazing drinks reach consumers exactly as intended.\nSwitch Supply has made a powerful and positive impact on Remedy Drinks, helping us scale sustainably, control costs, and strengthen our supply chain.\nWe value this partnership and look forward to many more years of successful collaboration.",
    rating: 5,
    order: 3,
  },
  {
    id: "testimonial-4",
    name: "Ashley McGrath",
    company: "GM Social Enterprise",
    text: "Switch Supply has been an exceptional partner to MOOD Tea from day one. Their team consistently delivers outstanding service and support, always responsive, proactive, and genuinely invested in our success. As a purpose-led brand, it's crucial we work with suppliers who share our values and commitment to quality, and Switch Supply has never let us down.",
    rating: 5,
    order: 4,
  },
];

export async function seedTestimonials(): Promise<void> {
  console.log("\nSeeding testimonials...");

  for (const t of testimonialData) {
    const doc = {
      _id: t.id,
      _type: "testimonial",
      name: t.name,
      company: t.company,
      ...(t.role ? { role: t.role } : {}),
      text: t.text,
      rating: t.rating,
      order: t.order,
    };

    await client.createOrReplace(doc);
    console.log(`  Created/replaced: ${t.id}`);
  }
}
