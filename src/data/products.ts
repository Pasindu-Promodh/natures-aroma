export interface Product {
  id: string;
  name: { en: string; de: string; ja: string };
  description: { en: string; de: string; ja: string };
  price: number;
  inStock: boolean;
  tags: { en: string; de: string; ja: string }[];
  image: string;
  type: string;
}

export const getProducts = (): Product[] => [
  {
    id: "1",
    name: {
      en: "Coconut Oil",
      de: "Kokosöl",
      ja: "ココナッツオイル",
    },
    description: {
      en: "Pure coconut oil ideal for cooking, skincare, and haircare.",
      de: "Reines Kokosöl, ideal zum Kochen, für Haut- und Haarpflege.",
      ja: "料理やスキンケア、ヘアケアに最適な純粋なココナッツオイルです。",
    },
    price: 9.99,
    inStock: true,
    image: "/natures-aroma/media/products/oil/coconut_oil.png",
    type: "oil",
    tags: [
      { en: "natural", de: "Natürlich", ja: "ナチュラル" },
      { en: "organic", de: "Bio", ja: "オーガニック" },
      { en: "cold-pressed", de: "Kaltgepresst", ja: "低温圧搾" },
      { en: "skincare", de: "Hautpflege", ja: "スキンケア" },
      { en: "haircare", de: "Haarpflege", ja: "ヘアケア" },
    ],
  },
  {
    id: "2",
    name: {
      en: "Sesame Oil",
      de: "Sesamöl",
      ja: "ごま油",
    },
    description: {
      en: "Premium sesame oil with a rich aroma and nutritional value.",
      de: "Hochwertiges Sesamöl mit reichem Aroma und Nährwert.",
      ja: "香ばしい香りと栄養価の高い高品質なごま油です。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma/media/products/oil/sesame_oil.png",
    type: "oil",
    tags: [
      { en: "cooking", de: "Kochen", ja: "料理" },
      { en: "healthy", de: "Gesund", ja: "健康" },
      { en: "natural", de: "Natürlich", ja: "ナチュラル" },
      { en: "vegan", de: "Vegan", ja: "ヴィーガン" },
      { en: "organic", de: "Bio", ja: "オーガニック" },
    ],
  },
  {
    id: "3",
    name: {
      en: "Brinjal Moju",
      de: "Auberginen-Moju",
      ja: "ナスのモジュ",
    },
    description: {
      en: "A traditional Sri Lankan spicy eggplant pickle with sweet and tangy flavor.",
      de: "Ein traditionelles sri-lankisches Auberginen-Pickle mit süß-würzigem Geschmack.",
      ja: "スリランカの伝統的なナスのスパイシーピクルスで、甘辛い味わいです。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma/media/products/spice/brinjal_moju.png",
    type: "spice",
    tags: [
      { en: "pickle", de: "Eingelegt", ja: "ピクルス" },
      { en: "spicy", de: "Würzig", ja: "スパイシー" },
      { en: "traditional", de: "Traditionell", ja: "伝統的" },
      { en: "Sri Lankan", de: "Sri Lankisch", ja: "スリランカ" },
      { en: "side dish", de: "Beilage", ja: "副菜" },
    ],
  },
  {
    id: "4",
    name: {
      en: "Chicken Curry Paste",
      de: "Hühnercurry-Paste",
      ja: "チキンカレーペースト",
    },
    description: {
      en: "A flavorful curry paste perfect for preparing authentic chicken curry.",
      de: "Aromatische Currypaste für authentisches Hühnercurry.",
      ja: "本格的なチキンカレーを簡単に作れる風味豊かなカレーペーストです。",
    },
    price: 9.99,
    inStock: true,
    image: "/natures-aroma/media/products/spice/chicken_curry_paste.png",
    type: "spice",
    tags: [
      { en: "spice", de: "Gewürz", ja: "スパイス" },
      { en: "curry", de: "Curry", ja: "カレー" },
      { en: "sauce", de: "Sauce", ja: "ソース" },
      { en: "savory", de: "Herzhaft", ja: "風味豊か" },
      { en: "traditional", de: "Traditionell", ja: "伝統的" },
    ],
  },
  {
    id: "5",
    name: {
      en: "Fish Curry Paste",
      de: "Fischcurry-Paste",
      ja: "フィッシュカレーペースト",
    },
    description: {
      en: "A rich, spicy curry paste made for flavorful fish curries.",
      de: "Würzige Paste für aromatische Fischcurrys.",
      ja: "風味豊かな魚カレーを作るためのスパイシーなペーストです。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma/media/products/spice/fish_curry_paste.png",
    type: "spice",
    tags: [
      { en: "spice", de: "Gewürz", ja: "スパイス" },
      { en: "curry", de: "Curry", ja: "カレー" },
      { en: "seafood", de: "Meeresfrüchte", ja: "シーフード" },
      { en: "savory", de: "Herzhaft", ja: "風味豊か" },
      { en: "aromatic", de: "Aromatisch", ja: "香り豊か" },
    ],
  },
  {
    id: "6",
    name: {
      en: "Rasam",
      de: "Rasam",
      ja: "ラサム",
    },
    description: {
      en: "A tangy South Indian soup made with tamarind and spices.",
      de: "Eine würzig-saure südindische Suppe aus Tamarinde und Gewürzen.",
      ja: "タマリンドとスパイスで作る南インドの酸味のあるスープです。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma/media/products/spice/rasam.png",
    type: "spice",
    tags: [
      { en: "soup", de: "Suppe", ja: "スープ" },
      { en: "spicy", de: "Würzig", ja: "スパイシー" },
      { en: "Indian", de: "Indisch", ja: "インド" },
      { en: "tangy", de: "Sauer", ja: "酸味" },
      { en: "vegetarian", de: "Vegetarisch", ja: "ベジタリアン" },
    ],
  },
  {
    id: "7",
    name: {
      en: "Blue Butterfly Pea Tea",
      de: "Blaue Schmetterlingserbsen-Tee",
      ja: "バタフライピー茶",
    },
    description: {
      en: "A vibrant blue herbal tea known for its antioxidants and calming effect.",
      de: "Ein leuchtend blauer Kräutertee mit Antioxidantien und beruhigender Wirkung.",
      ja: "抗酸化作用とリラックス効果で知られる鮮やかな青のハーブティーです。",
    },
    price: 9.99,
    inStock: true,
    image: "/natures-aroma/media/products/tea/blue_butterfly_pea_tea.png",
    type: "tea",
    tags: [
      { en: "tea", de: "Tee", ja: "お茶" },
      { en: "herbal", de: "Kräuter", ja: "ハーブ" },
      { en: "caffeine-free", de: "Koffeinfrei", ja: "カフェインレス" },
      { en: "organic", de: "Bio", ja: "オーガニック" },
      { en: "relaxation", de: "Entspannung", ja: "リラクゼーション" },
    ],
  },
  {
    id: "8",
    name: {
      en: "Chai Tea",
      de: "Chai-Tee",
      ja: "チャイティー",
    },
    description: {
      en: "A spiced black tea blend with cinnamon, cardamom, and cloves.",
      de: "Ein würziger Schwarztee mit Zimt, Kardamom und Nelken.",
      ja: "シナモン、カルダモン、クローブをブレンドしたスパイシーな紅茶です。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma/media/products/tea/chai_tea.png",
    type: "tea",
    tags: [
      { en: "black tea", de: "Schwarztee", ja: "紅茶" },
      { en: "spiced", de: "Gewürzt", ja: "スパイス入り" },
      { en: "warm", de: "Wärmend", ja: "温まる" },
      { en: "traditional", de: "Traditionell", ja: "伝統的" },
      { en: "aromatic", de: "Aromatisch", ja: "香り豊か" },
    ],
  },
  {
    id: "9",
    name: {
      en: "Ginger Tea",
      de: "Ingwertee",
      ja: "ジンジャーティー",
    },
    description: {
      en: "A soothing herbal tea with spicy ginger flavor for digestion and warmth.",
      de: "Ein wohltuender Kräutertee mit würzigem Ingwergeschmack für Verdauung und Wärme.",
      ja: "消化促進と体を温める効果のあるスパイシーなジンジャーティーです。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma/media/products/tea/ginger_tea.png",
    type: "tea",
    tags: [
      { en: "tea", de: "Tee", ja: "お茶" },
      { en: "ginger", de: "Ingwer", ja: "ジンジャー" },
      { en: "spicy", de: "Würzig", ja: "スパイシー" },
      { en: "warming", de: "Wärmend", ja: "温まる" },
      { en: "digestive", de: "Verdauungsfördernd", ja: "消化促進" },
    ],
  },
  {
    id: "10",
    name: {
      en: "Mango Leaf Tea",
      de: "Mangoblatt-Tee",
      ja: "マンゴーリーフティー",
    },
    description: {
      en: "A mild herbal tea made from mango leaves, rich in natural antioxidants.",
      de: "Ein milder Kräutertee aus Mangoblättern, reich an natürlichen Antioxidantien.",
      ja: "マンゴーの葉から作られた穏やかな味わいのハーブティーで、抗酸化成分が豊富です。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma/media/products/tea/mango_leaf_tea.png",
    type: "tea",
    tags: [
      { en: "herbal", de: "Kräuter", ja: "ハーブ" },
      { en: "organic", de: "Bio", ja: "オーガニック" },
      { en: "caffeine-free", de: "Koffeinfrei", ja: "カフェインレス" },
      { en: "healthy", de: "Gesund", ja: "健康" },
      { en: "antioxidant", de: "Antioxidans", ja: "抗酸化物質" },
    ],
  },
];
