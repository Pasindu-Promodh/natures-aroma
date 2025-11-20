import { useTranslation } from "react-i18next";
import {
  Typography,
  Box,
  Paper,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  Dialog,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import i18n from "../i18n";

const productTypes = [
  {
    key: "1",
    image: "/natures-aroma/media/sustainable.jpg",
    name: {
      en: "Sustainable Agriculture",
      de: "Nachhaltige Landwirtschaft",
      ja: "持続可能な農業",
    },
    des: {
      en: "At Nature’s Aroma Secrets, we believe that true growth begins in the soil. Our approach to agriculture combines traditional wisdom with modern sustainable practices, creating harmony between productivity and preservation. We work closely with farming communities across Sri Lanka to promote eco-friendly cultivation methods that enrich the land, ensure fair livelihoods, and produce crops that reflect the purity of nature itself.",
      de: "Bei Nature’s Aroma Secrets glauben wir, dass echtes Wachstum im Boden beginnt. Unser Ansatz verbindet traditionelle Weisheit mit modernen nachhaltigen Methoden, um Harmonie zwischen Produktivität und Erhaltung zu schaffen. Wir arbeiten eng mit landwirtschaftlichen Gemeinschaften in Sri Lanka zusammen, um umweltfreundliche Anbaumethoden zu fördern, die das Land bereichern, faire Lebensgrundlagen sichern und Ernten hervorbringen, die die Reinheit der Natur widerspiegeln.",
      ja: "Nature’s Aroma Secretsでは、本当の成長は土壌から始まると考えています。私たちの農業アプローチは、伝統的な知恵と現代的な持続可能な実践を組み合わせ、生産性と保全の調和を生み出します。スリランカ全土の農家と協力し、土地を豊かにし、公正な生活を支える環境に優しい栽培方法を推進しています。",
    },
  },
  {
    key: "2",
    image: "/natures-aroma/media/business.jpg",
    name: {
      en: "Business Solutions",
      de: "Geschäftslösungen",
      ja: "ビジネスソリューション",
    },
    des: {
      en: "We provide end-to-end business solutions designed to make agriculture and natural enterprises thrive responsibly. From project planning and management to strategic growth support, our solutions are rooted in integrity and innovation.",
      de: "Wir bieten umfassende Geschäftslösungen, die darauf ausgelegt sind, landwirtschaftliche und naturbasierte Unternehmen verantwortungsvoll zum Erfolg zu führen. Von Projektplanung und -management bis hin zu strategischer Wachstumsunterstützung basieren unsere Lösungen auf Integrität und Innovation.",
      ja: "私たちは、農業および自然関連事業が持続的に成長できるよう設計されたエンドツーエンドのビジネスソリューションを提供しています。プロジェクト計画から成長戦略支援まで、私たちのソリューションは誠実さと革新に基づいています。",
    },
  },
  {
    key: "3",
    image: "/natures-aroma/media/property.jpg",
    name: {
      en: "Property Management",
      de: "Immobilienverwaltung",
      ja: "不動産管理",
    },
    des: {
      en: "Our property management services bring professionalism and care to agriculture-based ventures. We oversee operations, optimize resources, and maintain standards that protect both investment and the environment.",
      de: "Unsere Immobilienverwaltungsdienste bringen Professionalität und Sorgfalt in landwirtschaftsbasierte Projekte. Wir überwachen den Betrieb, optimieren Ressourcen und halten Standards ein, die sowohl Investitionen als auch die Umwelt schützen.",
      ja: "私たちの不動産管理サービスは、農業関連事業に専門性と丁寧さを提供します。運営管理、資源最適化、投資と環境を守る基準維持を行います。",
    },
  },
  {
    key: "4",
    image: "/natures-aroma/media/export.jpg",
    name: {
      en: "Export Excellence",
      de: "Export-Exzellenz",
      ja: "輸出の卓越性",
    },
    des: {
      en: "We take Sri Lanka’s natural treasures to the global stage with quality, consistency, and integrity. Our exports bring oils, spices, teas, and herbal infusions to wellness-focused markets worldwide.",
      de: "Wir bringen Sri Lankas natürliche Schätze mit Qualität, Beständigkeit und Integrität auf die globale Bühne. Unsere Exporte liefern Öle, Gewürze, Tees und Kräuterprodukte in gesundheitsbewusste Märkte weltweit.",
      ja: "私たちはスリランカの自然の恵みを品質と一貫性をもって世界に届けています。オイル、スパイス、紅茶、ハーブ製品を世界中のウェルネスマーケットへ輸出しています。",
    },
  },
];

const Sectors = () => {
  const { t } = useTranslation();
  const lang = i18n.language as "en" | "de" | "ja";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [popupData, setPopupData] = useState<any>(null);

  const TYPE_CARD_SIZE = 275;

  return (
    <Box sx={{ pt: { xs: 8, sm: 10 } }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <img
            src="/natures-aroma/media/sectors.png"
            alt="About Us"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <Typography variant="h3" gutterBottom>
            {t("sectors.title")}
          </Typography>
          <Typography variant="body1">{t("sectors.description")}</Typography>
        </Paper>

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          {productTypes.map((type) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setPopupData(type)}
              key={type.key}
              style={{
                cursor: "pointer",
                width: isMobile ? "calc(50% - 8px)" : TYPE_CARD_SIZE,
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: TYPE_CARD_SIZE,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: "70%" }}
                  image={type.image}
                  alt={type.name[lang]}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Typography variant="subtitle1" align="center">
                    {type.name[lang]}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </motion.div>

      {/* POPUP */}
      <Dialog
        open={!!popupData}
        onClose={() => setPopupData(null)}
        maxWidth="md"
        fullWidth
      >
        {popupData && (
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
            }}
          >
            {/* LEFT – IMAGE */}
            <Box
              sx={{
                width: { xs: "100%", sm: "50%" },
                flexShrink: 0,
              }}
            >
              <img
                src={popupData.image}
                alt={popupData.name[lang]}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </Box>

            {/* RIGHT – TITLE & DESCRIPTION */}
            <Box
              sx={{
                width: { xs: "100%", sm: "50%" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5" gutterBottom>
                {popupData.name[lang]}
              </Typography>

              <Typography variant="body1">{popupData.des[lang]}</Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default Sectors;
