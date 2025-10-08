import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Chip,
  Paper,
  Card,
  CardMedia,
  CardContent,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";

import { motion } from "framer-motion";
import { getProducts } from "../data/products";

const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const products = getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  const relatedProducts = products.filter(
    (p) => p.typeKey === product.typeKey && p.id !== product.id
  );

  return (
    <Box sx={{ p: 2 }}>
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
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          {isMobile ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Image on top */}
              <Box
                sx={{
                  width: "100%",
                  pt: "100%",
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={t(product.nameKey)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Content below */}
              <Box>
                <Typography variant="h3" gutterBottom>
                  {t(product.nameKey)}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t(product.descKey)}
                </Typography>
                <Typography variant="h6">
                  {t("productDetail.price")}: ${product.price.toFixed(2)}
                </Typography>
                <Typography
                  variant="h6"
                  color={product.inStock ? "success.main" : "error.main"}
                >
                  {product.inStock
                    ? t("productDetail.inStock")
                    : t("productDetail.outOfStock")}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {t("productDetail.tags")}:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {product.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
              {/* Image left */}
              <Box
                sx={{
                  width: 400,
                  flexShrink: 0,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box sx={{ width: "100%", pt: "100%", position: "relative" }}>
                  <img
                    src={product.image}
                    alt={t(product.nameKey)}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>

              {/* Content right */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h3" gutterBottom>
                  {t(product.nameKey)}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t(product.descKey)}
                </Typography>
                <Typography variant="h6">
                  {t("productDetail.price")}: ${product.price.toFixed(2)}
                </Typography>
                <Typography
                  variant="h6"
                  color={product.inStock ? "success.main" : "error.main"}
                >
                  {product.inStock
                    ? t("productDetail.inStock")
                    : t("productDetail.outOfStock")}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {t("productDetail.tags")}:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {product.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </Paper>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {t("productDetail.relatedProducts")}
            </Typography>
            <Grid container spacing={3}>
              {relatedProducts.map((rp) => (
                <Grid key={rp.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => navigate(`/products/${rp.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={rp.image}
                        alt={t(rp.nameKey)}
                      />
                      <CardContent>
                        <Typography variant="h6">{t(rp.nameKey)}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          ${rp.price.toFixed(2)}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={rp.inStock ? "success.main" : "error.main"}
                        >
                          {rp.inStock
                            ? t("productDetail.inStock")
                            : t("productDetail.outOfStock")}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default ProductDetail;