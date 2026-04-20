import type {SanityImageReference} from '../client.js'
import {nootropicsSection} from './sections/nootropics.js'
import {adaptogensSection} from './sections/adaptogens.js'
import {mushroomsSection} from './sections/mushrooms.js'
import {gutHealthSection} from './sections/gutHealth.js'
import {beautyAntioxSection} from './sections/beautyAntiox.js'
import {performanceSection} from './sections/performance.js'

export interface ProductCatalogImages {
  lTheanine?: SanityImageReference
  blackMaca?: SanityImageReference
  bacopa?: SanityImageReference
  ashwagandha?: SanityImageReference
  rhodiola?: SanityImageReference
  ginsen?: SanityImageReference
  lionsMane?: SanityImageReference
  reishi?: SanityImageReference
  chaga?: SanityImageReference
  cordyceps?: SanityImageReference
  collagen?: SanityImageReference
  boneBroth?: SanityImageReference
  inulin?: SanityImageReference
  greenBanana?: SanityImageReference
  matcha?: SanityImageReference
  hyaluronic?: SanityImageReference
  camu?: SanityImageReference
  acai?: SanityImageReference
  coconut?: SanityImageReference
  creatine?: SanityImageReference
  hemp?: SanityImageReference
}

export function buildProductCatalog(images: ProductCatalogImages) {
  return {
    heading: 'Top Performing Functional Ingredients 2025',
    sections: [
      nootropicsSection({
        lTheanine: images.lTheanine,
        blackMaca: images.blackMaca,
        bacopa: images.bacopa,
      }),
      adaptogensSection({
        ashwagandha: images.ashwagandha,
        rhodiola: images.rhodiola,
        ginsen: images.ginsen,
      }),
      mushroomsSection({
        lionsMane: images.lionsMane,
        reishi: images.reishi,
        chaga: images.chaga,
        cordyceps: images.cordyceps,
      }),
      gutHealthSection({
        collagen: images.collagen,
        boneBroth: images.boneBroth,
        inulin: images.inulin,
        greenBanana: images.greenBanana,
      }),
      beautyAntioxSection({
        matcha: images.matcha,
        hyaluronic: images.hyaluronic,
        camu: images.camu,
        acai: images.acai,
      }),
      performanceSection({coconut: images.coconut, creatine: images.creatine, hemp: images.hemp}),
    ],
  }
}
