// import { useTranslation } from "react-i18next";
// import {
//   Typography,
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   FormControl,
//   Select,
//   MenuItem,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   IconButton,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getProducts } from "../data/products";
// import SortIcon from "@mui/icons-material/Sort";
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

// const productTypes = [
//   {
//     key: "type1",
//     image: "https://placehold.co/300x200?text=Herbal+Teas&font=montserrat",
//   },
//   {
//     key: "type2",
//     image: "https://placehold.co/300x200?text=Essential+Oils&font=montserrat",
//   },
//   {
//     key: "type3",
//     image: "https://placehold.co/300x200?text=Organic+Skincare&font=montserrat",
//   },
// ];

// const Products = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const products = getProducts();

//   const [sortOption, setSortOption] = useState("nameAsc");
//   const [inStockOnly, setInStockOnly] = useState(false);
//   const [selectedType, setSelectedType] = useState<string | null>(null);
//   const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);

//   const handleProductClick = (id: string) => navigate(`/products/${id}`);
//   const handleTypeClick = (typeKey: string) =>
//     setSelectedType(selectedType === typeKey ? null : typeKey);

//   const filteredByType = selectedType
//     ? products.filter(
//         (product) => product.typeKey === `products.${selectedType}`
//       )
//     : products;

//   const sortedAndFilteredProducts = [...filteredByType]
//     .filter((product) => !inStockOnly || product.inStock)
//     .sort((a, b) => {
//       const aName = t(a.nameKey).toLowerCase();
//       const bName = t(b.nameKey).toLowerCase();
//       switch (sortOption) {
//         case "nameAsc":
//           return aName.localeCompare(bName);
//         case "nameDesc":
//           return bName.localeCompare(aName);
//         case "priceAsc":
//           return a.price - b.price;
//         case "priceDesc":
//           return b.price - a.price;
//         default:
//           return 0;
//       }
//     });

//   const handleSortClick = (event: React.MouseEvent<HTMLElement>) =>
//     setSortAnchorEl(event.currentTarget);
//   const handleSortClose = () => setSortAnchorEl(null);
//   const handleSortChange = (option: string) => {
//     setSortOption(option);
//     handleSortClose();
//   };

//   const CARD_WIDTH = 300;
//   const CARD_HEIGHT = 280; // same as major products card height including content
//   const CARD_SPACING = 16; // spacing between cards

//   return (
//     <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: 3, textAlign: "center" }}>
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         {/* Header */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             mb: 3,
//             gap: 2,
//           }}
//         >
//           <Typography variant={isMobile ? "h4" : "h3"}>
//             {t("products.title")}
//           </Typography>
//           {isMobile ? (
//             <IconButton
//               color="primary"
//               onClick={() =>
//                 window.open(
//                   "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//                   "_blank"
//                 )
//               }
//             >
//               <PictureAsPdfIcon />
//             </IconButton>
//           ) : (
//             <Button
//               variant="outlined"
//               color="primary"
//               onClick={() =>
//                 window.open(
//                   "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//                   "_blank"
//                 )
//               }
//             >
//               {t("products.viewCatalogue")}
//             </Button>
//           )}
//         </Box>

//         {/* Major Product Types */}
//         <Typography variant="h5" gutterBottom>
//           {t("products.types")}
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 2,
//             flexWrap: "wrap",
//             mb: 4,
//           }}
//         >
//           {productTypes.map((type) => (
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => handleTypeClick(type.key)}
//               key={type.key}
//               style={{
//                 cursor: "pointer",
//                 width: isMobile ? "calc(50% - 8px)" : CARD_WIDTH, // 2 columns in mobile
//               }}
//             >
//               <Card
//                 sx={{
//                   width: "100%",
//                   height: isMobile ? 180 : CARD_HEIGHT,
//                   ...(selectedType === type.key && {
//                     border: "2px solid",
//                     borderColor: "primary.main",
//                   }),
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height={isMobile ? 100 : 200}
//                   image={type.image}
//                   alt={t(`products.${type.key}`)}
//                 />
//                 <CardContent>
//                   <Typography variant="subtitle1" align="center">
//                     {t(`products.${type.key}`)}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </Box>

//         {/* Sorting & Filter */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             mb: 3,
//             mt: 4,
//             gap: 2,
//           }}
//         >
//           {isMobile ? (
//             <Box>
//               <IconButton onClick={handleSortClick} color="primary">
//                 <SortIcon />
//               </IconButton>
//               <Box
//                 sx={{
//                   position: "absolute",
//                   mt: 1,
//                   bgcolor: "background.paper",
//                   boxShadow: 2,
//                   borderRadius: 1,
//                   display: sortAnchorEl ? "block" : "none",
//                   zIndex: 1000,
//                 }}
//               >
//                 <MenuItem onClick={() => handleSortChange("nameAsc")}>
//                   {t("products.sortNameAsc")}
//                 </MenuItem>
//                 <MenuItem onClick={() => handleSortChange("nameDesc")}>
//                   {t("products.sortNameDesc")}
//                 </MenuItem>
//                 <MenuItem onClick={() => handleSortChange("priceAsc")}>
//                   {t("products.sortPriceAsc")}
//                 </MenuItem>
//                 <MenuItem onClick={() => handleSortChange("priceDesc")}>
//                   {t("products.sortPriceDesc")}
//                 </MenuItem>
//               </Box>
//             </Box>
//           ) : (
//             <FormControl sx={{ minWidth: 150 }}>
//               <Select
//                 value={sortOption}
//                 onChange={(e) => setSortOption(e.target.value)}
//               >
//                 <MenuItem value="nameAsc">{t("products.sortNameAsc")}</MenuItem>
//                 <MenuItem value="nameDesc">
//                   {t("products.sortNameDesc")}
//                 </MenuItem>
//                 <MenuItem value="priceAsc">
//                   {t("products.sortPriceAsc")}
//                 </MenuItem>
//                 <MenuItem value="priceDesc">
//                   {t("products.sortPriceDesc")}
//                 </MenuItem>
//               </Select>
//             </FormControl>
//           )}
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={inStockOnly}
//                 onChange={(e) => setInStockOnly(e.target.checked)}
//               />
//             }
//             label={t("products.inStockOnly")}
//           />
//         </Box>

//         {/* Products Section */}
//         <Typography
//           variant={isMobile ? "h4" : "h5"}
//           gutterBottom
//           sx={{ mt: 2 }}
//         >
//           {t("products.products")}
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: `${CARD_SPACING}px`,
//           }}
//         >
//           {sortedAndFilteredProducts.map((product) => (
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => handleProductClick(product.id)}
//               key={product.id}
//               style={{ cursor: "pointer", width: CARD_WIDTH }}
//             >
//               <Card sx={{ width: CARD_WIDTH, height: CARD_HEIGHT + 20 }}>
//                 <CardMedia
//                   component="img"
//                   height={200}
//                   image={product.image}
//                   alt={t(product.nameKey)}
//                 />
//                 <CardContent>
//                   <Typography variant="subtitle1" align="center">
//                     {t(product.nameKey)}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     align="center"
//                   >
//                     ${product.price.toFixed(2)}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color={product.inStock ? "success.main" : "error.main"}
//                     align="center"
//                   >
//                     {product.inStock
//                       ? t("productDetail.inStock")
//                       : t("productDetail.outOfStock")}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default Products;

import { useTranslation } from "react-i18next";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../data/products";
import SortIcon from "@mui/icons-material/Sort";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const productTypes = [
  {
    key: "type1",
    image: "https://placehold.co/300x200?text=Herbal+Teas&font=montserrat",
    name: {
      en: "Herbal Teas",
      de: "Kräutertees",
      ja: "ハーブティー",
    },
  },
  {
    key: "type2",
    image: "https://placehold.co/300x200?text=Essential+Oils&font=montserrat",
    name: {
      en: "Essential Oils",
      de: "Ätherische Öle",
      ja: "エッセンシャルオイル",
    },
  },
  {
    key: "type3",
    image: "https://placehold.co/300x200?text=Organic+Skincare&font=montserrat",
    name: {
      en: "Organic Skincare",
      de: "Bio-Hautpflege",
      ja: "オーガニックスキンケア",
    },
  },
];

const Products = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const products = getProducts();
  const lang = i18n.language as "en" | "de" | "ja";

  const [sortOption, setSortOption] = useState("nameAsc");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);

  const handleProductClick = (id: string) => navigate(`/products/${id}`);
  const handleTypeClick = (typeKey: string) =>
    setSelectedType(selectedType === typeKey ? null : typeKey);

  const filteredByType = selectedType
    ? products.filter((product) => product.type === selectedType)
    : products;

  const sortedAndFilteredProducts = [...filteredByType]
    .filter((product) => !inStockOnly || product.inStock)
    .sort((a, b) => {
      const aName = a.name[lang]?.toLowerCase() || a.name.en.toLowerCase();
      const bName = b.name[lang]?.toLowerCase() || b.name.en.toLowerCase();
      switch (sortOption) {
        case "nameAsc":
          return aName.localeCompare(bName);
        case "nameDesc":
          return bName.localeCompare(aName);
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) =>
    setSortAnchorEl(event.currentTarget);
  const handleSortClose = () => setSortAnchorEl(null);
  const handleSortChange = (option: string) => {
    setSortOption(option);
    handleSortClose();
  };

  const CARD_WIDTH = 300;
  const CARD_HEIGHT = 280;
  const CARD_SPACING = 16;

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: 3, textAlign: "center" }}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 3,
            gap: 2,
          }}
        >
          <Typography variant={isMobile ? "h4" : "h3"}>
            {t("products.title")}
          </Typography>
          {isMobile ? (
            <IconButton
              color="primary"
              onClick={() =>
                window.open(
                  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  "_blank"
                )
              }
            >
              <PictureAsPdfIcon />
            </IconButton>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                window.open(
                  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  "_blank"
                )
              }
            >
              {t("products.viewCatalogue")}
            </Button>
          )}
        </Box>

        {/* Product Types */}
        <Typography variant="h5" gutterBottom>
          {t("products.types")}
        </Typography>
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
                width: isMobile ? "calc(50% - 8px)" : CARD_WIDTH,
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: isMobile ? 180 : CARD_HEIGHT,
                  ...(selectedType === type.key && {
                    border: "2px solid",
                    borderColor: "primary.main",
                  }),
                }}
              >
                <CardMedia
                  component="img"
                  height={isMobile ? 100 : 200}
                  image={type.image}
                  alt={type.name[lang]}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {type.name[lang]}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Sorting & Filter */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 3,
            mt: 4,
            gap: 2,
          }}
        >
          {isMobile ? (
            <Box>
              <IconButton onClick={handleSortClick} color="primary">
                <SortIcon />
              </IconButton>
              <Box
                sx={{
                  position: "absolute",
                  mt: 1,
                  bgcolor: "background.paper",
                  boxShadow: 2,
                  borderRadius: 1,
                  display: sortAnchorEl ? "block" : "none",
                  zIndex: 1000,
                }}
              >
                <MenuItem onClick={() => handleSortChange("nameAsc")}>
                  {t("products.sortNameAsc")}
                </MenuItem>
                <MenuItem onClick={() => handleSortChange("nameDesc")}>
                  {t("products.sortNameDesc")}
                </MenuItem>
                <MenuItem onClick={() => handleSortChange("priceAsc")}>
                  {t("products.sortPriceAsc")}
                </MenuItem>
                <MenuItem onClick={() => handleSortChange("priceDesc")}>
                  {t("products.sortPriceDesc")}
                </MenuItem>
              </Box>
            </Box>
          ) : (
            <FormControl sx={{ minWidth: 150 }}>
              <Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <MenuItem value="nameAsc">{t("products.sortNameAsc")}</MenuItem>
                <MenuItem value="nameDesc">
                  {t("products.sortNameDesc")}
                </MenuItem>
                <MenuItem value="priceAsc">
                  {t("products.sortPriceAsc")}
                </MenuItem>
                <MenuItem value="priceDesc">
                  {t("products.sortPriceDesc")}
                </MenuItem>
              </Select>
            </FormControl>
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
            }
            label={t("products.inStockOnly")}
          />
        </Box>

        {/* Product List */}
        <Typography
          variant={isMobile ? "h4" : "h5"}
          gutterBottom
          sx={{ mt: 2 }}
        >
          {t("products.products")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: `${CARD_SPACING}px`,
          }}
        >
          {sortedAndFilteredProducts.map((product) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleProductClick(product.id)}
              key={product.id}
              style={{ cursor: "pointer", width: CARD_WIDTH }}
            >
              <Card sx={{ width: CARD_WIDTH, height: CARD_HEIGHT + 20 }}>
                <CardMedia
                  component="img"
                  height={200}
                  image={product.image}
                  // src={product.image}
                  alt={product.name[lang]}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {product.name[lang] || product.name.en}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={product.inStock ? "success.main" : "error.main"}
                    align="center"
                  >
                    {product.inStock
                      ? t("productDetail.inStock")
                      : t("productDetail.outOfStock")}
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

export default Products;
