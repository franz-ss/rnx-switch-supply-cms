import {client} from './client.js'
import {emailLink, phoneLink, staticLink} from './linkHelpers.js'

export async function seedSiteSettings(): Promise<void> {
  console.log('\nSeeding site settings...')

  const doc = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Switch Supply',
    tagline: "Australia's Premium Ingredient Supplier",
    phone: '+61 1300 844 351',
    phoneLink: phoneLink('+611300844351'),
    email: 'contact@switchsupply.com',
    emailLink: emailLink('contact@switchsupply.com'),
    siteDescription: 'Global supplier of certified organic, botanical and functional ingredients.',
    navLinks: [
      {_key: 'nav-1', label: 'Ingredients', link: staticLink('/ingredients')},
      {
        _key: 'nav-2',
        label: 'Certified Organic',
        link: staticLink('/ingredients/certified-organic'),
      },
      {_key: 'nav-3', label: 'Private Label', link: staticLink('/private-label')},
      {_key: 'nav-4', label: 'Quality', link: staticLink('/quality')},
      {_key: 'nav-5', label: 'About', link: staticLink('/about')},
    ],
    productLinks: [
      {
        _key: 'prod-1',
        label: 'Certified Organic',
        link: staticLink('/ingredients/certified-organic'),
      },
      {
        _key: 'prod-2',
        label: 'Herbs & Botanicals',
        link: staticLink('/ingredients/herbs-botanicals-spices'),
      },
      {
        _key: 'prod-3',
        label: 'Extracts & Superfoods',
        link: staticLink('/ingredients/extract-powders-superfoods'),
      },
      {_key: 'prod-4', label: 'Private Label', link: staticLink('/private-label')},
    ],
    companyLinks: [
      {_key: 'comp-1', label: 'About Us', link: staticLink('/about')},
      {_key: 'comp-2', label: 'Quality', link: staticLink('/quality')},
      {
        _key: 'comp-3',
        label: 'Certifications',
        link: staticLink('/quality#certifications'),
      },
      {_key: 'comp-4', label: 'Contact', link: staticLink('/contact')},
    ],
  }

  await client.createOrReplace(doc)
  console.log('  Created/replaced: siteSettings')
}
