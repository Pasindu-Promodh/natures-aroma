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
              "Welcome to Nature’s Aroma Secrets, where every step begins with a deep respect for the earth and its endless gifts. Rooted in Sri Lankan soil and guided by a passion for purity, we work hand in hand with nature to create meaningful, lasting value. Our journey is built on trust, sustainability, and the belief that true growth happens when people and the planet thrive together. ",
            popularProducts: "Popular Products",
            ourCustomers: "Our Customers",
            ourGlobalReach: "Our Global Reach",
          },
          products: {
            title: "Our Products",
            catalogue: "Product Catalogue",
            types: "Major Product Types",
            viewCatalogue: "View Catalogue PDF",
            sortBy: "Sort by",
            sortNameAsc: "Name (A-Z)",
            sortNameDesc: "Name (Z-A)",
            sortPriceAsc: "Price (Low to High)",
            sortPriceDesc: "Price (High to Low)",
            inStockOnly: "In Stock Only",
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
              "At Nature’s Aroma Secrets, we see nature not as a resource to be used, but as a partner to be cherished. Every initiative we undertake is driven by a purpose—to nurture communities, protect the environment, and inspire responsible progress. From empowering local farmers to connecting Sri Lanka’s natural wealth with the world, we strive to create harmony between innovation and tradition, ensuring that every endeavor reflects our values of integrity, sustainability, and respect for life. ",
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
            close: "Close",
            applyNow: "Apply Now",
          },
          about: {
            title: "About Us",
            description:
              "At Nature’s Aroma Secrets (Pvt) Ltd, we believe that nature is not just a resource, but a partner in creating well-being, sustainability, and growth. Rooted in Sri Lanka’s rich natural heritage, we combine traditional wisdom with modern innovation to craft premium sesame-based products and holistic agricultural solutions. From empowering local farming communities to delivering products of uncompromising quality worldwide, our journey is guided by integrity, respect for nature, and a vision of lasting social and environmental impact. Every initiative we undertake reflects our commitment to purity, sustainability, and meaningful progress—for people, communities, and the planet.",
            ourVision: "Our Vision",
            vision:
              "To be a globally respected leader in natural product innovation, delivering sustainable value through premium sesame-based goods, holistic agricultural solutions, and trusted service excellence—while preserving the purity and integrity of nature for generations.",
            ourMission: "Our Mission",
            mission: [
              "Craft and deliver world-class natural products that reflect Sri Lanka’s heritage and meet the needs of wellness-conscious consumers worldwide.",
              "Champion sustainable agriculture by empowering farmers, communities, and investors with eco-conscious solutions.",
              "Continuously innovate in sesame-based products and cosmetics, blending traditional knowledge with modern science.",
              "Uphold quality, transparency, and trust in every partnership, from local sourcing to global distribution.",
              "Create lasting social and environmental impact by aligning growth with responsibility and integrity.",
            ],
            ourApproach: "Our Approach",
            approach:
              "At Nature’s Aroma Secrets, we see nature not as a resource to be used, but as a partner to be cherished. Every initiative we undertake is driven by purpose—to nurture communities, protect the environment, and inspire responsible progress. From empowering local farmers to connecting Sri Lanka’s natural wealth with the world, we strive to create harmony between innovation and tradition.",
          },
          contact: {
            title: "Contact Us",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit",
            copyEmail: "Copy Email",
            faceBook: "Facebook",
            instagram: "Instagram",
            whatsApp: "WhatsApp",
            youtube: "YouTube",
            callUs: "Call Us",
          },
        },
      },
      de: {
        translation: {
          nav: {
            home: "Startseite",
            products: "Produkte",
            sectors: "Sektoren",
            blog: "Blog",
            career: "Karriere",
            about: "Über Uns",
            contact: "Kontakt",
          },
          home: {
            title: "Willkommen bei Nature's Aroma",
            description:
              "Willkommen bei Nature’s Aroma Secrets, wo jeder Schritt mit tiefem Respekt vor der Erde und ihren unendlichen Gaben beginnt. Verwurzelt im fruchtbaren Boden Sri Lankas und geleitet von einer Leidenschaft für Reinheit, arbeiten wir Hand in Hand mit der Natur, um sinnvollen, nachhaltigen Wert zu schaffen. Unsere Reise basiert auf Vertrauen, Nachhaltigkeit und der Überzeugung, dass echtes Wachstum entsteht, wenn Menschen und Planet gemeinsam gedeihen.",
            popularProducts: "Beliebte Produkte",
            ourCustomers: "Unsere Kunden",
            ourGlobalReach: "Unsere globale Reichweite",
          },
          products: {
            title: "Unsere Produkte",
            catalogue: "Produktkatalog",
            types: "Hauptproduktarten",
            viewCatalogue: "Katalog PDF ansehen",
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
          sectors: {
            title: "Sektoren",
            description:
              "Bei Nature’s Aroma Secrets sehen wir die Natur nicht als Ressource, die genutzt werden soll, sondern als Partner, der geschätzt werden muss. Jede Initiative, die wir ergreifen, verfolgt einen Zweck: Gemeinschaften fördern, die Umwelt schützen und verantwortungsbewusstes Wachstum inspirieren. Vom Empowerment lokaler Landwirte bis zur Verbindung von Sri Lankas natürlichem Reichtum mit der Welt streben wir danach, Harmonie zwischen Innovation und Tradition zu schaffen, wobei jede Initiative unsere Werte von Integrität, Nachhaltigkeit und Respekt für das Leben widerspiegelt.",
          },
          blog: {
            title: "Blog",
            description:
              "Lesen Sie unsere neuesten Artikel über Natur, Technologie und Innovation.",
            totalBlogs: "Gesamtzahl der Blogs",
            sortBy: "Sortieren nach",
            date: "Datum",
            month: "Monat",
            year: "Jahr",
            filterType: "Filtertyp",
            clearFilter: "Filter löschen",
          },
          career: {
            title: "Karriere",
            description:
              "Wir sind ein Unternehmen, das sich der Bereitstellung hochwertiger naturinspirierter Produkte widmet.",
            close: "Schließen",
            applyNow: "Jetzt bewerben",
          },
          about: {
            title: "Über Uns",
            description:
              "Bei Nature’s Aroma Secrets (Pvt) Ltd glauben wir, dass die Natur nicht nur eine Ressource, sondern ein Partner für Wohlbefinden, Nachhaltigkeit und Wachstum ist. Verwurzelt im reichen Naturerbe Sri Lankas kombinieren wir traditionelles Wissen mit moderner Innovation, um Premium-Sesamprodukte und ganzheitliche landwirtschaftliche Lösungen zu schaffen. Von der Stärkung lokaler Landwirte bis zur Lieferung von Produkten höchster Qualität weltweit wird unsere Reise von Integrität, Respekt vor der Natur und einer Vision langfristiger sozialer und ökologischer Wirkung geleitet. Jede Initiative spiegelt unser Engagement für Reinheit, Nachhaltigkeit und bedeutenden Fortschritt wider – für Menschen, Gemeinschaften und den Planeten.",
            ourVision: "Unsere Vision",
            vision:
              "Ein weltweit respektierter Marktführer für Innovationen bei Naturprodukten zu sein, nachhaltigen Wert durch hochwertige Sesamprodukte, ganzheitliche landwirtschaftliche Lösungen und vertrauenswürdigen Service zu liefern – während die Reinheit und Integrität der Natur für kommende Generationen bewahrt werden.",
            ourMission: "Unsere Mission",
            mission: [
              "Weltklasse-Naturprodukte entwickeln und liefern, die das Erbe Sri Lankas widerspiegeln und die Bedürfnisse wellnessbewusster Verbraucher weltweit erfüllen.",
              "Nachhaltige Landwirtschaft fördern, indem Landwirte, Gemeinschaften und Investoren mit umweltbewussten Lösungen gestärkt werden.",
              "Kontinuierlich in Sesamprodukte und Kosmetikinnovationen investieren, traditionelle Kenntnisse mit moderner Wissenschaft verbinden.",
              "Qualität, Transparenz und Vertrauen in jeder Partnerschaft wahren, von der lokalen Beschaffung bis zur globalen Distribution.",
              "Dauerhafte soziale und ökologische Wirkung schaffen, indem Wachstum mit Verantwortung und Integrität in Einklang gebracht wird.",
            ],
            ourApproach: "Unser Ansatz",
            approach:
              "Bei Nature’s Aroma Secrets betrachten wir die Natur nicht als Ressource, die genutzt werden soll, sondern als Partner, der geschätzt wird. Jede Initiative wird mit Zweck getrieben – Gemeinschaften fördern, die Umwelt schützen und verantwortungsbewusstes Wachstum inspirieren. Vom Empowerment lokaler Landwirte bis zur Verbindung von Sri Lankas natürlichem Reichtum mit der Welt streben wir Harmonie zwischen Innovation und Tradition an.",
          },
          contact: {
            title: "Kontaktieren Sie uns",
            name: "Name",
            email: "E-Mail",
            message: "Nachricht",
            submit: "Absenden",
            copyEmail: "E-Mail kopieren",
            faceBook: "Facebook",
            instagram: "Instagram",
            whatsApp: "WhatsApp",
            youtube: "YouTube",
            callUs: "Anrufen",
          },
        },
      },
      ja: {
        translation: {
          nav: {
            home: "ホーム",
            products: "製品",
            sectors: "セクター",
            blog: "ブログ",
            career: "キャリア",
            about: "私たちについて",
            contact: "連絡先",
          },
          home: {
            title: "Nature's Aromaへようこそ",
            description:
              "Nature’s Aroma Secretsへようこそ。ここでは、すべてのステップが地球とその無限の恵みに対する深い尊敬から始まります。スリランカの豊かな土壌に根ざし、純粋さへの情熱に導かれ、私たちは自然と手を取り合い、有意義で持続可能な価値を創造します。私たちの旅は信頼、持続可能性、人と地球が共に繁栄する時に真の成長が生まれるという信念に基づいています。",
            popularProducts: "人気の製品",
            ourCustomers: "私たちの顧客",
            ourGlobalReach: "グローバルな展開",
          },
          products: {
            title: "私たちの製品",
            catalogue: "製品カタログ",
            types: "主要な製品タイプ",
            viewCatalogue: "カタログPDFを見る",
            sortBy: "並べ替え",
            sortNameAsc: "名前 (A-Z)",
            sortNameDesc: "名前 (Z-A)",
            sortPriceAsc: "価格 (低→高)",
            sortPriceDesc: "価格 (高→低)",
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
          sectors: {
            title: "セクター",
            description:
              "Nature’s Aroma Secretsでは、自然を利用するリソースではなく、大切にすべきパートナーとして捉えています。私たちが行うすべての取り組みは、地域社会を育み、環境を保護し、責任ある進歩を促す目的によって推進されます。地元の農家を支援し、スリランカの自然の恵みを世界とつなげることから、私たちはイノベーションと伝統の調和を目指しています。",
          },
          blog: {
            title: "ブログ",
            description:
              "自然、技術、イノベーションに関する最新の記事をお読みください。",
            totalBlogs: "ブログ総数",
            sortBy: "並べ替え",
            date: "日付",
            month: "月",
            year: "年",
            filterType: "フィルタータイプ",
            clearFilter: "フィルターをクリア",
          },
          career: {
            title: "キャリア",
            description:
              "私たちは自然にインスパイアされた高品質の製品を提供することに専念する会社です。",
            close: "閉じる",
            applyNow: "今すぐ応募",
          },
          about: {
            title: "私たちについて",
            description:
              "Nature’s Aroma Secrets (Pvt) Ltdでは、自然を単なる資源ではなく、ウェルビーイング、持続可能性、成長を生み出すパートナーと考えています。スリランカの豊かな自然遺産に根ざし、伝統的知識と現代の革新を組み合わせ、プレミアムのゴマ製品と包括的な農業ソリューションを提供しています。地域社会の支援から、世界中への高品質製品の提供まで、私たちの旅は誠実さ、自然への敬意、そして持続可能な社会・環境への影響というビジョンに導かれています。すべての取り組みは、人々、コミュニティ、地球に対する純粋さ、持続可能性、有意義な進歩へのコミットメントを反映しています。",
            ourVision: "私たちのビジョン",
            vision:
              "世界的に尊敬される自然製品のイノベーションリーダーとなり、プレミアムのゴマ製品、包括的な農業ソリューション、信頼されるサービスを通じて持続可能な価値を提供する一方、自然の純粋さと完全性を次世代に維持する。",
            ourMission: "私たちの使命",
            mission: [
              "スリランカの遺産を反映し、ウェルネス志向の消費者のニーズに応える世界クラスの自然製品を作り、提供する。",
              "農家、コミュニティ、投資家に環境に配慮したソリューションを提供し、持続可能な農業を推進する。",
              "伝統的知識と現代科学を融合させ、ゴマ製品と化粧品の革新を継続的に行う。",
              "地域調達からグローバル流通まで、すべてのパートナーシップで品質、透明性、信頼を維持する。",
              "成長を責任と誠実さと調和させることで、持続的な社会的・環境的影響を創出する。",
            ],
            ourApproach: "私たちのアプローチ",
            approach:
              "Nature’s Aroma Secretsでは、自然を単なる資源ではなく、大切にすべきパートナーと見なしています。私たちが行うすべての取り組みは目的によって推進され、コミュニティを育み、環境を保護し、責任ある進歩を促します。地元の農家を支援し、スリランカの自然の恵みを世界とつなげることから、イノベーションと伝統の調和を目指しています。",
          },
          contact: {
            title: "お問い合わせ",
            name: "名前",
            email: "メール",
            message: "メッセージ",
            submit: "送信",
            copyEmail: "メールをコピー",
            faceBook: "Facebook",
            instagram: "Instagram",
            whatsApp: "WhatsApp",
            youtube: "YouTube",
            callUs: "電話する",
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
