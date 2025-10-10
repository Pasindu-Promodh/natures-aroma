import { useTranslation } from "react-i18next";
import { Typography, Box, Paper, useTheme, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { getProducts } from "../data/products";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const lang = i18n.language as "en" | "de" | "ja";

  const products = getProducts().slice(0, 10); // Top 10 popular products
  const CARD_WIDTH = 200;
  const CARD_HEIGHT = (CARD_WIDTH * 3) / 2; // 2:3 ratio
  const CARD_SPACING = 16;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile, products.length]);

  return (
    <Box sx={{ minHeight: "80vh", px: { xs: 2, sm: 4, md: 6 }, py: 4 }}>
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

        {/* Popular Products Carousel */}
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          {t("home.popularProducts")}
        </Typography>

        {isMobile ? (
          // Mobile: show one product at a time with pagination
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ minWidth: CARD_WIDTH, cursor: "pointer" }}
                onClick={() =>
                  navigate(`/products/${products[currentIndex].id}`)
                }
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT + 40, // more space for name
                    borderRadius: 2,
                    overflow: "hidden",
                    textAlign: "center",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <img
                    src={products[currentIndex].image}
                    alt={products[currentIndex].name.en}
                    style={{
                      width: "100%",
                      height: CARD_HEIGHT,
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ mt: 1, mb: 1, px: 1 }} noWrap>
                    {products[currentIndex].name.en}
                  </Typography>
                </Paper>
              </motion.div>
            </AnimatePresence>
          </Box>
        ) : (
          // Desktop: smooth continuous scrolling
          <Box
            sx={{
              overflow: "hidden",
              width: "100%",
              py: 2, // vertical padding
            }}
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              style={{
                display: "flex",
                gap: `${CARD_SPACING}px`,
                alignItems: "center",
              }}
            >
              {[...products, ...products].map((p, idx) => (
                <Paper
                  key={idx}
                  elevation={3}
                  sx={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT + 40,
                    borderRadius: 2,
                    overflow: "hidden",
                    textAlign: "center",
                    flexShrink: 0,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                  onClick={() => navigate(`/products/${p.id}`)}
                >
                  <img
                    src={p.image}
                    alt={p.name.en}
                    style={{
                      width: "100%",
                      height: CARD_HEIGHT,
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ mt: 1, px: 1, flexShrink: 0 }} noWrap>
                    {p.name[lang]}
                  </Typography>
                </Paper>
              ))}
            </motion.div>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default Home;
