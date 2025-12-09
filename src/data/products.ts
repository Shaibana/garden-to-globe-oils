// Import product images
import lemongrassOil from "@/assets/products/lemongrass-oil.jpg";
import palmarosaOil from "@/assets/products/palmarosa-oil.jpg";
import peppermintOil from "@/assets/products/peppermint-oil.jpg";
import eucalyptusOil from "@/assets/products/eucalyptus-oil.jpg";
import blackPepperOil from "@/assets/products/black-pepper-oil.jpg";
import citronellaOil from "@/assets/products/citronella-oil.jpg";
import davanaOil from "@/assets/products/davana-oil.jpg";
import pineOil from "@/assets/products/pine-oil.jpg";
import vetiverOil from "@/assets/products/vetiver-oil.jpg";
import rosemaryOil from "@/assets/products/rosemary-oil.jpg";
import nutmegOil from "@/assets/products/nutmeg-oil.jpg";
import cardamomOil from "@/assets/products/cardamom-oil.jpg";
import cedarwoodOil from "@/assets/products/cedarwood-oil.jpg";
import camphorOil from "@/assets/products/camphor-oil.jpg";
import cloveOil from "@/assets/products/clove-oil.jpg";
import basilOil from "@/assets/products/basil-oil.jpg";
import spearmintOil from "@/assets/products/spearmint-oil.jpg";
import cinnamonLeafOil from "@/assets/products/cinnamon-leaf-oil.jpg";
import gingerOil from "@/assets/products/ginger-oil.jpg";
import turmericOil from "@/assets/products/turmeric-oil.jpg";
import patchouliOil from "@/assets/products/patchouli-oil.jpg";
import castorOil from "@/assets/products/castor-oil.jpg";
import eveningPrimroseOil from "@/assets/products/evening-primrose-oil.jpg";
import neemOil from "@/assets/products/neem-oil.jpg";
import chaulmoograOil from "@/assets/products/chaulmoogra-oil.jpg";
import coconutOil from "@/assets/products/coconut-oil.jpg";
import palmOil from "@/assets/products/palm-oil.jpg";
import geraniol from "@/assets/products/geraniol.jpg";
import dLimonene from "@/assets/products/d-limonene.jpg";
import vanillinPowder from "@/assets/products/vanillin-powder.jpg";
import thymolCrystal from "@/assets/products/thymol-crystal.jpg";

export interface Product {
  name: string;
  botanicalName: string;
  origin: string;
  category: string;
  image: string;
  description: string;
}

export const essentialOils: Product[] = [
  {
    name: "Lemongrass Oil",
    botanicalName: "Cymbopogon citratus",
    origin: "India",
    category: "Essential Oils",
    image: lemongrassOil,
    description: "Steam-distilled from fresh grass, featuring a strong lemony scent. Popular in perfumery, soaps, and natural insect repellents. Known for its purifying and uplifting properties in aromatherapy.",
  },
  {
    name: "Palmarosa Oil",
    botanicalName: "Cymbopogon martinii",
    origin: "India",
    category: "Essential Oils",
    image: palmarosaOil,
    description: "Extracted from Motia grass, prized for its sweet floral-rose aroma. Extensively used in premium perfumes, cosmetics, and skincare. Helps balance sebum production and hydrates skin naturally.",
  },
  {
    name: "Peppermint Oil",
    botanicalName: "Mentha piperita",
    origin: "India",
    category: "Essential Oils",
    image: peppermintOil,
    description: "High menthol content oil with cooling sensation. Widely used in oral care, pharmaceuticals, and food flavoring. Excellent for mental clarity, digestive comfort, and respiratory wellness applications.",
  },
  {
    name: "Eucalyptus Oil",
    botanicalName: "Eucalyptus globulus",
    origin: "India",
    category: "Essential Oils",
    image: eucalyptusOil,
    description: "Distilled from eucalyptus leaves, rich in cineole. Traditional use in chest rubs, vapor inhalants, and wellness balms. Natural decongestant properties make it ideal for cold and flu season products.",
  },
  {
    name: "Black Pepper Oil",
    botanicalName: "Piper nigrum",
    origin: "India",
    category: "Essential Oils",
    image: blackPepperOil,
    description: "Steam-distilled from dried peppercorns, featuring warm spicy notes. Used in perfumery, flavoring, and therapeutic massage oils. Supports circulation and adds depth to spice-based fragrance blends.",
  },
  {
    name: "Citronella Oil",
    botanicalName: "Cymbopogon nardus",
    origin: "India",
    category: "Essential Oils",
    image: citronellaOil,
    description: "Grass-derived oil with strong citrus notes. Premier natural insect repellent used in outdoor candles, sprays, and lotions. Also effective in household cleaners and air fresheners for tropical fragrance.",
  },
  {
    name: "Davana Oil",
    botanicalName: "Artemisia pallens",
    origin: "India",
    category: "Essential Oils",
    image: davanaOil,
    description: "Unique fruity aroma prized in fine fragrance and luxury perfume blends.",
  },
  {
    name: "Pine Oil",
    botanicalName: "Pinus sylvestris",
    origin: "India",
    category: "Essential Oils",
    image: pineOil,
    description: "Fresh forest scent, excellent for household cleaners and air freshening.",
  },
  {
    name: "Vetiver Oil",
    botanicalName: "Vetiveria zizanioides",
    origin: "India",
    category: "Essential Oils",
    image: vetiverOil,
    description: "Distilled from aromatic roots, featuring deep woody-earthy notes. Essential fixative in high-end perfumes and oriental fragrances. Traditional use in meditation and grounding aromatherapy practices.",
  },
  {
    name: "Rosemary Oil",
    botanicalName: "Rosmarinus officinalis",
    origin: "India",
    category: "Essential Oils",
    image: rosemaryOil,
    description: "Herbaceous aroma, popular in hair care and mental clarity applications.",
  },
  {
    name: "Nutmeg Oil",
    botanicalName: "Myristica fragrans",
    origin: "India",
    category: "Essential Oils",
    image: nutmegOil,
    description: "Warm spicy fragrance, used in massage oils and therapeutic blends.",
  },
  {
    name: "Cardamom Oil",
    botanicalName: "Elettaria cardamomum",
    origin: "India",
    category: "Essential Oils",
    image: cardamomOil,
    description: "Sweet spicy scent with warming properties for digestive wellness blends.",
  },
  {
    name: "Cedarwood Oil",
    botanicalName: "Cedrus atlantica",
    origin: "India",
    category: "Essential Oils",
    image: cedarwoodOil,
    description: "Woody calming aroma, excellent for meditation and stress relief products.",
  },
  {
    name: "Camphor Oil",
    botanicalName: "Cinnamomum camphora",
    origin: "India",
    category: "Essential Oils",
    image: camphorOil,
    description: "Strong penetrating scent, traditional use in balms and chest rubs.",
  },
  {
    name: "Clove Oil",
    botanicalName: "Syzygium aromaticum",
    origin: "India",
    category: "Essential Oils",
    image: cloveOil,
    description: "Extracted from clove buds, high in eugenol content. Widely used in dental products, pain relief balms, and food preservation. Natural antiseptic and analgesic properties make it invaluable in traditional medicine.",
  },
  {
    name: "Basil Oil",
    botanicalName: "Ocimum basilicum",
    origin: "India",
    category: "Essential Oils",
    image: basilOil,
    description: "Sweet herbaceous scent, promotes focus and mental clarity in aromatherapy.",
  },
  {
    name: "Spearmint Oil",
    botanicalName: "Mentha spicata",
    origin: "India",
    category: "Essential Oils",
    image: spearmintOil,
    description: "Gentle minty fragrance, milder than peppermint for sensitive applications.",
  },
  {
    name: "Cinnamon Leaf Oil",
    botanicalName: "Cinnamomum verum",
    origin: "India",
    category: "Essential Oils",
    image: cinnamonLeafOil,
    description: "Warm cinnamon scent, creates cozy atmosphere in diffuser blends.",
  },
  {
    name: "Mentha Piperita Oil",
    botanicalName: "Mentha piperita",
    origin: "India",
    category: "Essential Oils",
    image: peppermintOil,
    description: "Pure peppermint extract, energizing and refreshing for multiple uses.",
  },
  {
    name: "Ginger Oil",
    botanicalName: "Zingiber officinale",
    origin: "India",
    category: "Essential Oils",
    image: gingerOil,
    description: "Spicy warming oil, supports circulation and digestive comfort blends.",
  },
  {
    name: "Turmeric Oil",
    botanicalName: "Curcuma longa",
    origin: "India",
    category: "Essential Oils",
    image: turmericOil,
    description: "Earthy golden oil, incorporated in skincare for its natural properties.",
  },
  {
    name: "Patchouli Oil",
    botanicalName: "Pogostemon cablin",
    origin: "India",
    category: "Essential Oils",
    image: patchouliOil,
    description: "Musky earthy scent, classic ingredient in oriental perfume compositions.",
  },
];

export const carrierOils: Product[] = [
  {
    name: "Castor Oil",
    botanicalName: "Ricinus communis",
    origin: "India",
    category: "Carrier Oils",
    image: castorOil,
    description: "Cold-pressed from castor beans, rich in ricinoleic acid. Deeply moisturizing carrier oil perfect for hair growth treatments, eyelash serums, and intensive skin conditioning. Also used in soap making for lather enhancement.",
  },
  {
    name: "Evening Primrose Oil",
    botanicalName: "Oenothera biennis",
    origin: "India",
    category: "Carrier Oils",
    image: eveningPrimroseOil,
    description: "Rich in omega fatty acids, premium oil for anti-aging skincare formulas.",
  },
  {
    name: "Neem Oil",
    botanicalName: "Azadirachta indica",
    origin: "India",
    category: "Carrier Oils",
    image: neemOil,
    description: "Cold-pressed from neem seeds, centuries-old Ayurvedic remedy. Rich in azadirachtin, used in natural skincare for problematic skin. Also popular in organic gardening as natural pest control and soil enrichment.",
  },
  {
    name: "Chaulmoogra Oil",
    botanicalName: "Hydnocarpus wightianus",
    origin: "India",
    category: "Carrier Oils",
    image: chaulmoograOil,
    description: "Rare therapeutic oil, historically valued in traditional medicine practices.",
  },
  {
    name: "Coconut Oil",
    botanicalName: "Cocos nucifera",
    origin: "India",
    category: "Carrier Oils",
    image: coconutOil,
    description: "Versatile lightweight oil, ideal carrier for massage and beauty applications.",
  },
  {
    name: "Palm Oil",
    botanicalName: "Elaeis guineensis",
    origin: "India",
    category: "Carrier Oils",
    image: palmOil,
    description: "Stable base oil, widely used in soap making and cosmetic formulations.",
  },
];

export const naturalExtracts: Product[] = [
  {
    name: "Geraniol",
    botanicalName: "Natural isolate",
    origin: "India",
    category: "Natural Extracts",
    image: geraniol,
    description: "Rose-like compound, key ingredient in fine fragrance and flavor industry.",
  },
  {
    name: "D-Limonene",
    botanicalName: "Citrus-derived",
    origin: "India",
    category: "Natural Extracts",
    image: dLimonene,
    description: "Citrus extract solvent, natural cleaner and degreaser for industrial use.",
  },
  {
    name: "Vanillin Powder",
    botanicalName: "Vanilla planifolia",
    origin: "India",
    category: "Natural Extracts",
    image: vanillinPowder,
    description: "Sweet vanilla compound, extensively used in food flavoring and perfumery.",
  },
  {
    name: "Thymol Crystal",
    botanicalName: "Thymus vulgaris",
    origin: "India",
    category: "Natural Extracts",
    image: thymolCrystal,
    description: "Crystalline thyme extract, powerful natural preservative for pharmaceutical use.",
  },
];

export const allProducts: Product[] = [...essentialOils, ...carrierOils, ...naturalExtracts];
