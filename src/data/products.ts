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
      en: "Blue Butterfly Pea Tea",
      de: "Kamillentee",
      ja: "カモミールティー",
    },
    description: {
      en: "A calming herbal tea for relaxation.",
      de: "Ein beruhigender Kräutertee zur Entspannung.",
      ja: "リラックスのための穏やかなハーブティーです。",
    },
    price: 9.99,
    inStock: true,
    image: "/natures-aroma-secrets/media/blue_butterfly_pea_tea.png",
    type: "type1",
    tags: [
      { en: "tea", de: "Tee", ja: "お茶" },
      { en: "herbal", de: "Kräuter", ja: "ハーブ" },
      { en: "relaxation", de: "Entspannung", ja: "リラクゼーション" },
      { en: "organic", de: "Bio", ja: "オーガニック" },
      { en: "caffeine-free", de: "Koffeinfrei", ja: "カフェインレス" },
    ],
  },
  {
    id: "2",
    name: {
      en: "Chai Tea",
      de: "Lavendelöl",
      ja: "ラベンダー精油",
    },
    description: {
      en: "Pure lavender oil for aromatherapy and skincare.",
      de: "Reines Lavendelöl für Aromatherapie und Hautpflege.",
      ja: "アロマテラピーやスキンケアに使える純粋なラベンダーオイル。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma-secrets/media/chai_tea_2.jpg",
    type: "type2",
    tags: [
      { en: "essential oil", de: "Ätherisches Öl", ja: "エッセンシャルオイル" },
      { en: "lavender", de: "Lavendel", ja: "ラベンダー" },
      { en: "aromatherapy", de: "Aromatherapie", ja: "アロマセラピー" },
      { en: "wellness", de: "Wellness", ja: "ウェルネス" },
      { en: "skincare", de: "Hautpflege", ja: "スキンケア" },
    ],
  },
  {
    id: "3",
    name: {
      en: "Chicken Curry Paste",
      de: "Kamillentee",
      ja: "カモミールティー",
    },
    description: {
      en: "A calming herbal tea for relaxation.",
      de: "Ein beruhigender Kräutertee zur Entspannung.",
      ja: "リラックスのための穏やかなハーブティーです。",
    },
    price: 9.99,
    inStock: true,
    image: "/natures-aroma-secrets/media/chicken_curry_paste_2.jpg",
    type: "type1",
    tags: [
      { en: "tea", de: "Tee", ja: "お茶" },
      { en: "herbal", de: "Kräuter", ja: "ハーブ" },
      { en: "relaxation", de: "Entspannung", ja: "リラクゼーション" },
      { en: "natural", de: "Natürlich", ja: "ナチュラル" },
      { en: "wellness", de: "Wellness", ja: "ウェルネス" },
    ],
  },
  {
    id: "4",
    name: {
      en: "Fish Curry Paste",
      de: "Lavendelöl",
      ja: "ラベンダー精油",
    },
    description: {
      en: "Pure lavender oil for aromatherapy and skincare.",
      de: "Reines Lavendelöl für Aromatherapie und Hautpflege.",
      ja: "アロマテラピーやスキンケアに使える純粋なラベンダーオイル。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma-secrets/media/fish_curry_paste_2.jpg",
    type: "type2",
    tags: [
      { en: "essential oil", de: "Ätherisches Öl", ja: "エッセンシャルオイル" },
      { en: "lavender", de: "Lavendel", ja: "ラベンダー" },
      { en: "relaxation", de: "Entspannung", ja: "リラクゼーション" },
      { en: "spa", de: "Spa", ja: "スパ" },
      { en: "fragrance", de: "Duft", ja: "香り" },
    ],
  },
  {
    id: "5",
    name: {
      en: "Ginger Tea",
      de: "Lavendelöl",
      ja: "ラベンダー精油",
    },
    description: {
      en: "Pure lavender oil for aromatherapy and skincare.",
      de: "Reines Lavendelöl für Aromatherapie und Hautpflege.",
      ja: "アロマテラピーやスキンケアに使える純粋なラベンダーオイル。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma-secrets/media/ginger_tea_2.jpg",
    type: "type2",
    tags: [
      { en: "essential oil", de: "Ätherisches Öl", ja: "エッセンシャルオイル" },
      { en: "lavender", de: "Lavendel", ja: "ラベンダー" },
      { en: "relaxation", de: "Entspannung", ja: "リラクゼーション" },
      { en: "spa", de: "Spa", ja: "スパ" },
      { en: "fragrance", de: "Duft", ja: "香り" },
    ],
  },
  {
    id: "6",
    name: {
      en: "Herbal Hair Oil",
      de: "Lavendelöl",
      ja: "ラベンダー精油",
    },
    description: {
      en: "Pure lavender oil for aromatherapy and skincare.",
      de: "Reines Lavendelöl für Aromatherapie und Hautpflege.",
      ja: "アロマテラピーやスキンケアに使える純粋なラベンダーオイル。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma-secrets/media/herbal_hair_oil_3.jpg",
    type: "type2",
    tags: [
      { en: "essential oil", de: "Ätherisches Öl", ja: "エッセンシャルオイル" },
      { en: "lavender", de: "Lavendel", ja: "ラベンダー" },
      { en: "relaxation", de: "Entspannung", ja: "リラクゼーション" },
      { en: "spa", de: "Spa", ja: "スパ" },
      { en: "fragrance", de: "Duft", ja: "香り" },
    ],
  },
  {
    id: "7",
    name: {
      en: "Mango Leaf Tea",
      de: "Lavendelöl",
      ja: "ラベンダー精油",
    },
    description: {
      en: "Pure lavender oil for aromatherapy and skincare.",
      de: "Reines Lavendelöl für Aromatherapie und Hautpflege.",
      ja: "アロマテラピーやスキンケアに使える純粋なラベンダーオイル。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma-secrets/media/mango_leaf_tea_2.png",
    type: "type2",
    tags: [
      { en: "essential oil", de: "Ätherisches Öl", ja: "エッセンシャルオイル" },
      { en: "lavender", de: "Lavendel", ja: "ラベンダー" },
      { en: "relaxation", de: "Entspannung", ja: "リラクゼーション" },
      { en: "spa", de: "Spa", ja: "スパ" },
      { en: "fragrance", de: "Duft", ja: "香り" },
    ],
  },
  {
    id: "8",
    name: {
      en: "Rasam",
      de: "Lavendelöl",
      ja: "ラベンダー精油",
    },
    description: {
      en: "Pure lavender oil for aromatherapy and skincare.",
      de: "Reines Lavendelöl für Aromatherapie und Hautpflege.",
      ja: "アロマテラピーやスキンケアに使える純粋なラベンダーオイル。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma-secrets/media/rasam_2.jpg",
    type: "type2",
    tags: [
      { en: "essential oil", de: "Ätherisches Öl", ja: "エッセンシャルオイル" },
      { en: "lavender", de: "Lavendel", ja: "ラベンダー" },
      { en: "relaxation", de: "Entspannung", ja: "リラクゼーション" },
      { en: "spa", de: "Spa", ja: "スパ" },
      { en: "fragrance", de: "Duft", ja: "香り" },
    ],
  },
  {
    id: "9",
    name: {
      en: "Sesame Oil",
      de: "Lavendelöl",
      ja: "ラベンダー精油",
    },
    description: {
      en: "Pure lavender oil for aromatherapy and skincare.",
      de: "Reines Lavendelöl für Aromatherapie und Hautpflege.",
      ja: "アロマテラピーやスキンケアに使える純粋なラベンダーオイル。",
    },
    price: 14.99,
    inStock: false,
    image: "/natures-aroma-secrets/media/sesame_oil_2.png",
    type: "type2",
    tags: [
      { en: "essential oil", de: "Ätherisches Öl", ja: "エッセンシャルオイル" },
      { en: "lavender", de: "Lavendel", ja: "ラベンダー" },
      { en: "relaxation", de: "Entspannung", ja: "リラクゼーション" },
      { en: "spa", de: "Spa", ja: "スパ" },
      { en: "fragrance", de: "Duft", ja: "香り" },
    ],
  },
];
