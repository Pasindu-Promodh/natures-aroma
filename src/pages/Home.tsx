import { useTranslation } from "react-i18next";
import { Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { getProducts } from "../data/products";
import InfiniteCarousel from "../components/InfiniteCarousel";


const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "de" | "ja";

  const products = getProducts().slice(0, 10);

  return (
    <Box>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Paper elevation={3} sx={{ p: 4, textAlign: "center", mb: 6 }}>
          <img
            src="https://placehold.co/800x400?text=Nature+Landscape&font=lato"
            alt="Nature Landscape"
            style={{ width: "100%", maxWidth: "800px", borderRadius: "8px" }}
          />
          <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
            {t("home.title")}
          </Typography>
          <Typography variant="body1">{t("home.description")}</Typography>
        </Paper>

        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          {t("home.popularProducts")}
        </Typography>

        <InfiniteCarousel products={products} lang={lang}/>

      </motion.div>
    </Box>
  );
};

export default Home;
