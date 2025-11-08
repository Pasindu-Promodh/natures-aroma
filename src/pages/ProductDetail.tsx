import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { getProducts } from "../data/products";
import { useState } from "react";
import ProductGrid from "../components/ProductGrid";

const ProductDetail = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const products = getProducts();
  const product = products.find((p) => p.id === id);
  const lang = i18n.language as "en" | "de" | "ja";

  const [openImage, setOpenImage] = useState(false);

  if (!product) return <Typography variant="h5">Product not found</Typography>;

  const relatedProducts = products.filter(
    (p) => p.type === product.type && p.id !== product.id
  );

  return (
    // <Box sx={{ p: 2 }}>
    <Box sx={{ pt: { xs: 8, sm: 10 } }}>
      {/* Back Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/products")}
        >
          {t("productDetail.back")}
        </Button>
      </Box>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Main Product Paper */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            {/* Product Image */}
            <Box
              onClick={() => setOpenImage(true)}
              sx={{
                width: isMobile ? "100%" : 400,
                flexShrink: 0,
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                aspectRatio: "2 / 3",
                cursor: "pointer",
              }}
            >
              <img
                src={product.image}
                alt={product.name[lang]}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            {/* Product Text */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" gutterBottom>
                {product.name[lang]}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description[lang]}
              </Typography>
              {/* <Typography variant="h6">
                {t("productDetail.price")}: ${product.price.toFixed(2)}
              </Typography>
              <Typography
                variant="h6"
                color={product.inStock ? "success.main" : "error.main"}
              >
                {product.inStock
                  ? t("productDetail.inStock")
                  : t("productDetail.outOfStock")}
              </Typography> */}
              {/* {product.tags.length > 0 && (
                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {product.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag[lang]}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              )} */}
            </Box>
          </Box>
        </Paper>

        {/* Fullscreen Image Modal */}
        <Dialog
          open={openImage}
          onClose={() => setOpenImage(false)}
          fullScreen
          PaperProps={{
            sx: {
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
            onClick={() => setOpenImage(false)}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={product.image}
            alt={product.name[lang]}
            style={{ maxHeight: "90%", maxWidth: "90%", objectFit: "contain" }}
          />
        </Dialog>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <Box>
            <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
              {t("productDetail.relatedProducts")}
            </Typography>

            <ProductGrid products={relatedProducts} lang={i18n.language} />
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default ProductDetail;
