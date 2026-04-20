import { client, uploadImage } from "../client.js";
import { hero } from "./hero.js";
import { strategicImplications } from "./strategicImplications.js";
import { buildProductCatalog } from "./productCatalog.js";
import { brands } from "./brands.js";
import { buildPrivateLabel } from "./privateLabel.js";

export async function seedMarketAnalysisReport(): Promise<void> {
  console.log("\nSeeding market analysis report...");

  const [plTeamImage, sachetsImage] = await Promise.all([
    uploadImage("images/report/private-label-team.png", "Switch Supply team & packaging"),
    uploadImage("images/report/sachets.png", "Switch Supply Sachet Production Showcase"),
  ]);

  const [lTheanineImg, blackMacaImg, bacopaImg] = await Promise.all([
    uploadImage("images/report/l-theanine.webp", "L-Theanine"),
    uploadImage("images/report/black-maca.webp", "Black Maca"),
    uploadImage("images/report/bacopa-monnieri.jpg", "Bacopa Monnieri"),
  ]);

  const [ashwagandhaImg, rhodiolaImg, ginsenImg] = await Promise.all([
    uploadImage("images/report/ashwagandha.webp", "Ashwagandha"),
    uploadImage("images/report/rhodiola-rosea.png", "Rhodiola Rosea"),
    uploadImage("images/report/panax-ginseng.webp", "Panax Ginseng"),
  ]);

  const [lionsManeImg, reishiImg, chagaImg, cordycepsImg] = await Promise.all([
    uploadImage("images/report/lions-mane.webp", "Lion's Mane Mushroom Extract"),
    uploadImage("images/report/reishi.png", "Reishi"),
    uploadImage("images/report/chaga.png", "Chaga"),
    uploadImage("images/report/cordyceps.png", "Cordyceps"),
  ]);

  const [collagenImg, boneBrothImg, inulinImg, greenBananaImg] = await Promise.all([
    uploadImage("images/report/collagen-peptides.png", "Collagen Peptides"),
    uploadImage("images/report/bone-broth-powder.png", "Bone Broth Protein"),
    uploadImage("images/report/chicory-inulin.webp", "Inulin"),
    uploadImage("images/report/green-banana-powder.webp", "Green Banana Powder"),
  ]);

  const [matchaImg, hyaluronicImg, camuImg, acaiImg] = await Promise.all([
    uploadImage("images/report/matcha.png", "Matcha Green Tea Powder"),
    uploadImage("images/report/hyaluronic-acid.webp", "Hyaluronic Acid"),
    uploadImage("images/report/camu-camu.webp", "Camu Camu Powder"),
    uploadImage("images/report/acai-powder.webp", "Organic Acai Powder"),
  ]);

  const [coconutImg, creatineImg, hempImg] = await Promise.all([
    uploadImage("images/report/coconut-water-powder.png", "Coconut Water Powder"),
    uploadImage("images/report/creatine.png", "Creatine Monohydrate"),
    uploadImage("images/report/hemp-protein.png", "Hemp Protein Powder"),
  ]);

  const doc = {
    _id: "marketAnalysisReport",
    _type: "marketAnalysisReport",
    title: "Market Analysis Report 2025",
    hero,
    strategicImplications,
    productCatalog: buildProductCatalog({
      lTheanine: lTheanineImg,
      blackMaca: blackMacaImg,
      bacopa: bacopaImg,
      ashwagandha: ashwagandhaImg,
      rhodiola: rhodiolaImg,
      ginsen: ginsenImg,
      lionsMane: lionsManeImg,
      reishi: reishiImg,
      chaga: chagaImg,
      cordyceps: cordycepsImg,
      collagen: collagenImg,
      boneBroth: boneBrothImg,
      inulin: inulinImg,
      greenBanana: greenBananaImg,
      matcha: matchaImg,
      hyaluronic: hyaluronicImg,
      camu: camuImg,
      acai: acaiImg,
      coconut: coconutImg,
      creatine: creatineImg,
      hemp: hempImg,
    }),
    brands,
    ...buildPrivateLabel(plTeamImage, sachetsImage),
  };

  await client.createOrReplace(doc);
  console.log("  Created/replaced: marketAnalysisReport");
}
