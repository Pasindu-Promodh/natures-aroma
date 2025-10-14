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
          nav: {
            home: "Home",
            products: "Products",
            sectors: "Sectors",
            blog: "Blog",
            career: "Career",
            about: "About",
            contact: "Contact",
          },
          home: {
            title: "Welcome to Nature's Aroma",
            description:
              "Discover our range of natural and eco-friendly products.",
            popularProducts: "Popular Products",
            ourGlobalReach: "Our Global Reach",
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
          productDetail: {
            price: "Price",
            inStock: "In Stock",
            outOfStock: "Out of Stock",
            tags: "Tags",
            back: "Back to Products",
            relatedProducts: "Related Products",
          },
          sectors: {
            title: "Sectors",
            description:
              "We are a company dedicated to providing high-quality nature-inspired products.",
          },
          blog: {
            title: "Blog",
            description:
              "Read our latest articles about nature, technology, and innovation.",
            totalBlogs: "Total Blogs",
            sortBy: "Sort by",
            date: "Date",
            month: "Month",
            year: "Year",
            filterType: "Filter Type",
            clearFilter: "Clear Filter",
            
          },
          career: {
            title: "Career",
            description:
              "We are a company dedicated to providing high-quality nature-inspired products.",
          },
          about: {
            title: "About Us",
            description:
              "We are a company dedicated to providing high-quality nature-inspired products.",
          },
          contact: {
            title: "Contact Us",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit",
          },
        },
      },
      de: {
        translation: {
          nav: {
            home: "Startseite",
            about: "Über",
            products: "Produkte",
            contact: "Kontakt",
            blog: "Blog",
            career: "Karriere",
            sectors: "Sektoren",
          },
          home: {
            title: "Willkommen bei Nature's Aroma",
            description:
              "Entdecken Sie unser Angebot an natürlichen und umweltfreundlichen Produkten.",
            popularProducts: "Beliebte Produkte",
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
          },
          productDetail: {
            price: "Preis",
            inStock: "Auf Lager",
            outOfStock: "Nicht auf Lager",
            tags: "Tags",
            back: "Zurück zu Produkten",
            relatedProducts: "Verwandte Produkte",
          },
          about: {
            title: "Über Uns",
            description:
              "Wir sind ein Unternehmen, das sich der Bereitstellung hochwertiger naturinspirierter Produkte widmet.",
          },
          contact: {
            title: "Kontaktieren Sie Uns",
            name: "Name",
            email: "E-Mail",
            message: "Nachricht",
            submit: "Absenden",
          },
          blog: {
            title: "Blog",
            description:
              "Lesen Sie unsere neuesten Artikel über Natur, Technologie und Innovation.",
            totalBlogs: "Gesamtanzahl Blogs",
            sortBy: "Sortieren nach",
            date: "Datum",
            month: "Monat",
            year: "Jahr",
            filterType: "Filtertyp",
            clearFilter: "Filter löschen",
            posts: {
              1: {
                title: "Die Schönheit der Natur entdecken",
                excerpt:
                  "Erfahre, wie Zeit in der Natur deine Kreativität und dein Wohlbefinden fördern kann.",
              },
              2: {
                title: "KI im Jahr 2025 — Was kommt als Nächstes?",
                excerpt:
                  "Künstliche Intelligenz entwickelt sich rasant weiter. Das erwartet uns als Nächstes.",
              },
              3: {
                title: "React mit TypeScript meistern",
                excerpt:
                  "Ein Leitfaden für Entwickler, die ihre React-Apps auf das nächste Level bringen möchten.",
              },
              4: {
                title:
                  "Moderne Benutzeroberflächen mit MUI und Framer Motion erstellen",
                excerpt:
                  "Lerne, wie du Material UI und Framer Motion kombinierst, um schöne, flüssige Benutzeroberflächen zu erstellen.",
              },
              5: {
                title: "Technologietrends im Jahr 2024",
                excerpt:
                  "Ein Rückblick auf die größten technologischen Veränderungen des Jahres 2024.",
              },
            },
          },
        },
      },
      ja: {
        translation: {
          nav: {
            home: "ホーム",
            about: "約",
            products: "製品",
            contact: "連絡先",
            blog: "ブログ",
            career: "キャリア",
            sectors: "セクター",
          },
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
          },
          productDetail: {
            price: "価格",
            inStock: "在庫あり",
            outOfStock: "在庫なし",
            tags: "タグ",
            back: "製品に戻る",
            relatedProducts: "関連製品",
          },
          contact: {
            title: "お問い合わせ",
            name: "名前",
            email: "メール",
            message: "メッセージ",
            submit: "送信",
          },
          blog: {
            title: "ブログ",
            description:
              "自然、テクノロジー、イノベーションに関する最新の記事をお読みください。",
            totalBlogs: "合計ブログ数",
            sortBy: "並べ替え",
            date: "日付",
            month: "月",
            year: "年",
            filterType: "フィルタータイプ",
            clearFilter: "フィルターをクリア",
            posts: {
              1: {
                title: "自然の美しさを探る",
                excerpt:
                  "自然の中で過ごすことで、創造力と幸福感がどのように高まるかを発見しましょう。",
              },
              2: {
                title: "2025年のAI — 次に来るものは？",
                excerpt:
                  "人工知能は急速に進化し続けています。次に何が起こるのかを見てみましょう。",
              },
              3: {
                title: "TypeScriptでReactを極める",
                excerpt:
                  "Reactアプリを次のレベルに引き上げたい開発者のためのガイドです。",
              },
              4: {
                title: "MUIとFramer MotionでモダンなUIを構築する",
                excerpt:
                  "Material UIとFramer Motionを組み合わせて、美しく滑らかなUIを作る方法を学びましょう。",
              },
              5: {
                title: "2024年のテクノロジートレンド",
                excerpt: "2024年に起きた最大の技術変化を振り返ります。",
              },
            },
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
