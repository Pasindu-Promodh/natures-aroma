// import { useTranslation } from "react-i18next";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Typography,
//   Box,
//   Button,
//   Chip,
//   Paper,
//   Card,
//   CardMedia,
//   CardContent,
//   useTheme,
//   useMediaQuery,
//   Grid,
// } from "@mui/material";

// import { motion } from "framer-motion";
// import { getProducts } from "../data/products";

// const ProductDetail = () => {
//   const { t } = useTranslation();
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const products = getProducts();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return <Typography variant="h5">Product not found</Typography>;
//   }

//   const relatedProducts = products.filter(
//     (p) => p.typeKey === product.typeKey && p.id !== product.id
//   );

//   return (
//     <Box sx={{ p: 2 }}>
//       {/* Back Button */}
//       <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => navigate("/products")}
//         >
//           {t("productDetail.back")}
//         </Button>
//       </Box>

//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
//           {isMobile ? (
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//               {/* Image on top */}
//               <Box
//                 sx={{
//                   width: "100%",
//                   pt: "100%",
//                   position: "relative",
//                   borderRadius: 2,
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src={product.image}
//                   alt={t(product.nameKey)}
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               </Box>

//               {/* Content below */}
//               <Box>
//                 <Typography variant="h3" gutterBottom>
//                   {t(product.nameKey)}
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                   {t(product.descKey)}
//                 </Typography>
//                 <Typography variant="h6">
//                   {t("productDetail.price")}: ${product.price.toFixed(2)}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   color={product.inStock ? "success.main" : "error.main"}
//                 >
//                   {product.inStock
//                     ? t("productDetail.inStock")
//                     : t("productDetail.outOfStock")}
//                 </Typography>
//                 <Typography variant="h6" sx={{ mt: 2 }}>
//                   {t("productDetail.tags")}:
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
//                   {product.tags.map((tag, index) => (
//                     <Chip
//                       key={index}
//                       label={tag}
//                       color="primary"
//                       variant="outlined"
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </Box>
//           ) : (
//             <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
//               {/* Image left */}
//               <Box
//                 sx={{
//                   width: 400,
//                   flexShrink: 0,
//                   borderRadius: 2,
//                   overflow: "hidden",
//                 }}
//               >
//                 <Box sx={{ width: "100%", pt: "100%", position: "relative" }}>
//                   <img
//                     src={product.image}
//                     alt={t(product.nameKey)}
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Box>
//               </Box>

//               {/* Content right */}
//               <Box sx={{ flex: 1 }}>
//                 <Typography variant="h3" gutterBottom>
//                   {t(product.nameKey)}
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                   {t(product.descKey)}
//                 </Typography>
//                 <Typography variant="h6">
//                   {t("productDetail.price")}: ${product.price.toFixed(2)}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   color={product.inStock ? "success.main" : "error.main"}
//                 >
//                   {product.inStock
//                     ? t("productDetail.inStock")
//                     : t("productDetail.outOfStock")}
//                 </Typography>
//                 <Typography variant="h6" sx={{ mt: 2 }}>
//                   {t("productDetail.tags")}:
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
//                   {product.tags.map((tag, index) => (
//                     <Chip
//                       key={index}
//                       label={tag}
//                       color="primary"
//                       variant="outlined"
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </Box>
//           )}
//         </Paper>

//         {/* Related Products */}
//         {relatedProducts.length > 0 && (
//           <Box>
//             <Typography variant="h4" sx={{ mb: 2 }}>
//               {t("productDetail.relatedProducts")}
//             </Typography>
//             <Grid container spacing={3}>
//               {relatedProducts.map((rp) => (
//                 <Grid key={rp.id} size={{ xs: 12, sm: 6, md: 4 }}>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                     onClick={() => navigate(`/products/${rp.id}`)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <Card>
//                       <CardMedia
//                         component="img"
//                         height="200"
//                         image={rp.image}
//                         alt={t(rp.nameKey)}
//                       />
//                       <CardContent>
//                         <Typography variant="h6">{t(rp.nameKey)}</Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           ${rp.price.toFixed(2)}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color={rp.inStock ? "success.main" : "error.main"}
//                         >
//                           {rp.inStock
//                             ? t("productDetail.inStock")
//                             : t("productDetail.outOfStock")}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         )}
//       </motion.div>
//     </Box>
//   );
// };

// export default ProductDetail;

// import { useTranslation } from "react-i18next";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Typography,
//   Box,
//   Button,
//   Chip,
//   Paper,
//   Card,
//   CardMedia,
//   CardContent,
//   useTheme,
//   useMediaQuery,
//   Grid,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { getProducts } from "../data/products";

// const ProductDetail = () => {
//   const { t, i18n } = useTranslation();
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const products = getProducts();
//   const product = products.find((p) => p.id === id);

//   const currentLang = i18n.language as "en" | "de" | "ja";

//   if (!product) {
//     return <Typography variant="h5">Product not found</Typography>;
//   }

//   const relatedProducts = products.filter(
//     (p) => p.type === product.type && p.id !== product.id
//   );

//   const PRODUCT_CARD_WIDTH = 300;
//   const PRODUCT_IMAGE_HEIGHT = (PRODUCT_CARD_WIDTH * 3) / 2; // 2:3 ratio
//   const PRODUCT_CARD_HEIGHT = PRODUCT_IMAGE_HEIGHT + 100; // extra for text
//   const CARD_SPACING = 16;

//   return (
//     <Box sx={{ p: 2 }}>
//       {/* Back Button */}
//       <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => navigate("/products")}
//         >
//           {t("productDetail.back")}
//         </Button>
//       </Box>

//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
//           {isMobile ? (
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//               {/* Image on top */}
//               <Box
//                 sx={{
//                   width: "100%",
//                   pt: "100%",
//                   position: "relative",
//                   borderRadius: 2,
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name[currentLang] || product.name.en}
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               </Box>

//               {/* Content below */}
//               <Box>
//                 <Typography variant="h3" gutterBottom>
//                   {product.name[currentLang] || product.name.en}
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                   {product.description[currentLang] || product.description.en}
//                 </Typography>
//                 <Typography variant="h6">
//                   {t("productDetail.price")}: ${product.price.toFixed(2)}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   color={product.inStock ? "success.main" : "error.main"}
//                 >
//                   {product.inStock
//                     ? t("productDetail.inStock")
//                     : t("productDetail.outOfStock")}
//                 </Typography>
//                 {product.tags && product.tags.length > 0 && (
//                   <>
//                     <Typography variant="h6" sx={{ mt: 2 }}>
//                       {t("productDetail.tags")}:
//                     </Typography>
//                     <Box
//                       sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
//                     >
//                       {product.tags.map(
//                         (
//                           tag: { en: string; de: string; ja: string },
//                           index: number
//                         ) => (
//                           <Chip
//                             key={index}
//                             label={tag[currentLang] || tag.en}
//                             color="primary"
//                             variant="outlined"
//                           />
//                         )
//                       )}
//                     </Box>
//                   </>
//                 )}
//               </Box>
//             </Box>
//           ) : (
//             <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
//               {/* Image left */}
//               <Box
//                 sx={{
//                   width: 400,
//                   flexShrink: 0,
//                   borderRadius: 2,
//                   overflow: "hidden",
//                 }}
//               >
//                 <Box sx={{ width: "100%", pt: "100%", position: "relative" }}>
//                   <img
//                     src={product.image}
//                     alt={product.name[currentLang] || product.name.en}
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Box>
//               </Box>

//               {/* Content right */}
//               <Box sx={{ flex: 1 }}>
//                 <Typography variant="h3" gutterBottom>
//                   {product.name[currentLang] || product.name.en}
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                   {product.description[currentLang] || product.description.en}
//                 </Typography>
//                 <Typography variant="h6">
//                   {t("productDetail.price")}: ${product.price.toFixed(2)}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   color={product.inStock ? "success.main" : "error.main"}
//                 >
//                   {product.inStock
//                     ? t("productDetail.inStock")
//                     : t("productDetail.outOfStock")}
//                 </Typography>
//                 {product.tags && product.tags.length > 0 && (
//                   <>
//                     <Typography variant="h6" sx={{ mt: 2 }}>
//                       {t("productDetail.tags")}:
//                     </Typography>
//                     <Box
//                       sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
//                     >
//                       {product.tags.map(
//                         (
//                           tag: { en: string; de: string; ja: string },
//                           index: number
//                         ) => (
//                           <Chip
//                             key={index}
//                             label={tag[currentLang] || tag.en}
//                             color="primary"
//                             variant="outlined"
//                           />
//                         )
//                       )}
//                     </Box>
//                   </>
//                 )}
//               </Box>
//             </Box>
//           )}
//         </Paper>

//         {/* Related Products */}
//         <Typography variant="h4" sx={{ mb: 2 }}>
//           {t("productDetail.relatedProducts")}
//         </Typography>
        
//         {relatedProducts.length > 0 && (
//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: `${CARD_SPACING}px`,
//             }}
//           >
//             {relatedProducts.map((product) => (
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => navigate(`/products/${product.id}`)}
//                 key={product.id}
//                 style={{ cursor: "pointer", width: PRODUCT_CARD_WIDTH }}
//               >
//                 <Card
//                   sx={{
//                     width: PRODUCT_CARD_WIDTH,
//                     height: PRODUCT_CARD_HEIGHT,
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height={PRODUCT_IMAGE_HEIGHT}
//                     image={product.image}
//                     alt={t(product.name[currentLang] || product.name.en)}
//                   />
//                   <CardContent>
//                     <Typography variant="subtitle1" align="center" noWrap>
//                       {t(product.name[currentLang] || product.name.en)}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       align="center"
//                     >
//                       ${product.price.toFixed(2)}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color={product.inStock ? "success.main" : "error.main"}
//                       align="center"
//                     >
//                       {product.inStock
//                         ? t("productDetail.inStock")
//                         : t("productDetail.outOfStock")}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </Box>
//         )}
//       </motion.div>
//     </Box>
//   );
// };

// export default ProductDetail;




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
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { getProducts } from "../data/products";
import { useState } from "react";

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

  const CARD_WIDTH = 300;
  const CARD_IMAGE_HEIGHT = (CARD_WIDTH * 3) / 2; // 2:3 ratio
  const CARD_HEIGHT = CARD_IMAGE_HEIGHT + 100;
  const CARD_SPACING = 16;

  return (
    <Box sx={{ p: 2 }}>
      {/* Back Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button variant="contained" color="primary" onClick={() => navigate("/products")}>
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
              {product.tags.length > 0 && (
                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {product.tags.map((tag, index) => (
                    <Chip key={index} label={tag[lang]} color="primary" variant="outlined" />
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Paper>

        {/* Fullscreen Image Modal */}
        <Dialog
          open={openImage}
          onClose={() => setOpenImage(false)}
          fullScreen
          PaperProps={{
            sx: { backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center" },
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

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: `${CARD_SPACING}px`,
              }}
            >
              {relatedProducts.map((rp) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => navigate(`/products/${rp.id}`)}
                  key={rp.id}
                  style={{ cursor: "pointer", width: CARD_WIDTH }}
                >
                  <Card sx={{ width: CARD_WIDTH, height: CARD_HEIGHT }}>
                    <CardMedia
                      component="img"
                      height={CARD_IMAGE_HEIGHT}
                      image={rp.image}
                      alt={rp.name[lang]}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography variant="subtitle1" align="center" noWrap>
                        {rp.name[lang]}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        ${rp.price.toFixed(2)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={rp.inStock ? "success.main" : "error.main"}
                        align="center"
                      >
                        {rp.inStock
                          ? t("productDetail.inStock")
                          : t("productDetail.outOfStock")}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default ProductDetail;
