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
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import i18n from "../i18n";

const productTypes = [
  {
    key: "1",
    image:
      "https://placehold.co/300x300?text=Sustainable+Agriculture&font=montserrat",
    name: {
      en: "Sustainable Agriculture",
      de: "Nachhaltige Landwirtschaft",
      ja: "持続可能な農業",
    },
  },
  {
    key: "2",
    image:
      "https://placehold.co/300x300?text=Business+Solutions&font=montserrat",
    name: {
      en: "Business Solutions",
      de: "Geschäftslösungen",
      ja: "ビジネスソリューション",
    },
  },
  {
    key: "3",
    image:
      "https://placehold.co/300x300?text=Property+Management&font=montserrat",
    name: {
      en: "Property Management",
      de: "Immobilienverwaltung",
      ja: "不動産管理",
    },
  },
  {
    key: "4",
    image:
      "https://placehold.co/300x300?text=Export+Excellence&font=montserrat",
    name: {
      en: "Export Excellence",
      de: "Export-Exzellenz",
      ja: "輸出の卓越性",
    },
  },
];

const Sectors = () => {
  const { t } = useTranslation();
  const lang = i18n.language as "en" | "de" | "ja";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeClick = (typeKey: string) =>
    setSelectedType(selectedType === typeKey ? null : typeKey);

  const TYPE_CARD_SIZE = 275; // square 1:1

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
              onClick={() => handleTypeClick(type.key)}
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
                  ...(selectedType === type.key && {
                    border: "2px solid",
                    borderColor: "primary.main",
                  }),
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: "70%" }} // image takes 70% of card height
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
    </Box>
  );
};

export default Sectors;
