import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: {
            title: "Welcome to Nature's Aroma",
            description:
              "Discover our range of natural and eco-friendly products.",
            popularProducts: "Popular Products",
          },
          about: {
            title: "About Us",
            description:
              "We are a company dedicated to providing high-quality nature-inspired products.",
          },
          products: {
            title: "Our Products",
            catalogue: "Product Catalogue",
            types: "Major Product Types",
            type1: "Herbal Teas",
            type2: "Essential Oils",
            type3: "Organic Skincare",
            viewCatalogue: "View Catalogue PDF",
            sortBy: "Sort by",
            sortNameAsc: "Name (A-Z)",
            sortNameDesc: "Name (Z-A)",
            sortPriceAsc: "Price (Low to High)",
            sortPriceDesc: "Price (High to Low)",
            inStockOnly: "In Stock Only",
            items: {
              "1": {
                name: "Green Tea",
                desc: "Refreshing green tea from organic farms.",
              },
              "2": {
                name: "Chamomile Tea",
                desc: "Calming chamomile for relaxation.",
              },
              "3": {
                name: "Lavender Oil",
                desc: "Pure lavender essential oil.",
              },
              "4": {
                name: "Peppermint Oil",
                desc: "Invigorating peppermint oil.",
              },
              "5": {
                name: "Aloe Vera Cream",
                desc: "Moisturizing aloe vera skincare.",
              },
              "6": {
                name: "Rosehip Serum",
                desc: "Nourishing rosehip serum for skin.",
              },
            },
          },
          contact: {
            title: "Contact Us",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit",
          },
          nav: {
            home: "Home",
            about: "About",
            products: "Products",
            contact: "Contact",
          },
          productDetail: {
            price: "Price",
            inStock: "In Stock",
            outOfStock: "Out of Stock",
            tags: "Tags",
            back: "Back to Products",
            relatedProducts: "Related Products",
          },
        },
      },
      de: {
        translation: {
          home: {
            title: "Willkommen bei Nature's Aroma",
            description:
              "Entdecken Sie unser Angebot an natürlichen und umweltfreundlichen Produkten.",
            popularProducts: "Beliebte Produkte",
          },
          about: {
            title: "Über Uns",
            description:
              "Wir sind ein Unternehmen, das sich der Bereitstellung hochwertiger naturinspirierter Produkte widmet.",
          },
          products: {
            title: "Unsere Produkte",
            catalogue: "Produktkatalog",
            types: "Wichtige Produktarten",
            type1: "Kräutertees",
            type2: "Ätherische Öle",
            type3: "Biologische Hautpflege",
            viewCatalogue: "Katalog PDF anzeigen",
            sortBy: "Sortieren nach",
            sortNameAsc: "Name (A-Z)",
            sortNameDesc: "Name (Z-A)",
            sortPriceAsc: "Preis (niedrig bis hoch)",
            sortPriceDesc: "Preis (hoch bis niedrig)",
            inStockOnly: "Nur auf Lager",
            items: {
              "1": {
                name: "Grüner Tee",
                desc: "Erfrischender grüner Tee aus biologischen Farmen.",
              },
              "2": {
                name: "Kamillentee",
                desc: "Beruhigende Kamille zur Entspannung.",
              },
              "3": {
                name: "Lavendelöl",
                desc: "Reines Lavendel-Ätherisches Öl.",
              },
              "4": {
                name: "Pfefferminzöl",
                desc: "Belebendes Pfefferminzöl.",
              },
              "5": {
                name: "Aloe Vera Creme",
                desc: "Feuchtigkeitsspendende Aloe Vera Hautpflege.",
              },
              "6": {
                name: "Hagebutten-Serum",
                desc: "Pflegendes Hagebutten-Serum für die Haut.",
              },
            },
          },
          contact: {
            title: "Kontaktieren Sie Uns",
            name: "Name",
            email: "E-Mail",
            message: "Nachricht",
            submit: "Absenden",
          },
          nav: {
            home: "Startseite",
            about: "Über",
            products: "Produkte",
            contact: "Kontakt",
          },
          productDetail: {
            price: "Preis",
            inStock: "Auf Lager",
            outOfStock: "Nicht auf Lager",
            tags: "Tags",
            back: "Zurück zu Produkten",
            relatedProducts: "Verwandte Produkte",
          },
        },
      },
      ja: {
        translation: {
          home: {
            title: "Nature's Aromaへようこそ",
            description:
              "自然でエコフレンドリーな製品の範囲を発見してください。",
            popularProducts: "人気の製品",
          },
          about: {
            title: "私たちについて",
            description:
              "私たちは、自然にインスパイアされた高品質の製品を提供することに専念する会社です。",
          },
          products: {
            title: "私たちの製品",
            catalogue: "製品カタログ",
            types: "主要な製品タイプ",
            type1: "ハーブティー",
            type2: "エッセンシャルオイル",
            type3: "オーガニックスキンケア",
            viewCatalogue: "カタログPDFを表示",
            sortBy: "並べ替え",
            sortNameAsc: "名前 (A-Z)",
            sortNameDesc: "名前 (Z-A)",
            sortPriceAsc: "価格 (低から高)",
            sortPriceDesc: "価格 (高から低)",
            inStockOnly: "在庫ありのみ",
            items: {
              "1": {
                name: "緑茶",
                desc: "オーガニック農場からの爽やかな緑茶。",
              },
              "2": {
                name: "カモミールティー",
                desc: "リラクゼーションのための落ち着くカモミール。",
              },
              "3": {
                name: "ラベンダーオイル",
                desc: "純粋なラベンダーエッセンシャルオイル。",
              },
              "4": {
                name: "ペパーミントオイル",
                desc: "活気づくペパーミントオイル。",
              },
              "5": {
                name: "アロエベラクリーム",
                desc: "保湿アロエベラスキンケア。",
              },
              "6": {
                name: "ローズヒップセラム",
                desc: "肌のための栄養ローズヒップセラム。",
              },
            },
          },
          contact: {
            title: "お問い合わせ",
            name: "名前",
            email: "メール",
            message: "メッセージ",
            submit: "送信",
          },
          nav: {
            home: "ホーム",
            about: "約",
            products: "製品",
            contact: "連絡先",
          },
          productDetail: {
            price: "価格",
            inStock: "在庫あり",
            outOfStock: "在庫なし",
            tags: "タグ",
            back: "製品に戻る",
            relatedProducts: "関連製品",
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
