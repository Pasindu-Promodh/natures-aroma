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
import { getProducts } from "../data/products";
import SortIcon from "@mui/icons-material/Sort";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ProductGrid from "../components/ProductGrid";
import InfiniteCarousel from "../components/InfiniteCarousel";
import FloatingContactButton from "../components/FloatingContactButton";

const productTypes = [
  {
    key: "1",
    type: "oil",
    image: "https://placehold.co/300x300?text=Herbal+Teas&font=montserrat",
    name: {
      en: "Oil",
      de: "Kräutertees",
      ja: "ハーブティー",
    },
  },
  {
    key: "2",
    type: "spice",
    image: "https://placehold.co/300x300?text=Essential+Oils&font=montserrat",
    name: {
      en: "Spice",
      de: "Ätherische Öle",
      ja: "エッセンシャルオイル",
    },
  },
  {
    key: "3",
    type: "tea",
    image: "https://placehold.co/300x300?text=Organic+Skincare&font=montserrat",
    name: {
      en: "Tea",
      de: "Bio-Hautpflege",
      ja: "オーガニックスキンケア",
    },
  },
];

const Products = () => {
  const { t, i18n } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const products = getProducts();
  const lang = i18n.language as "en" | "de" | "ja";

  const [sortOption, setSortOption] = useState("nameAsc");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);

  const popularProducts = getProducts().slice(0, 10);

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

  // Constants for card dimensions
  const TYPE_CARD_SIZE = 180; // square 1:1

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: 3, textAlign: "center" }}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          {t("home.popularProducts")}
        </Typography>

        <InfiniteCarousel products={popularProducts} lang={lang}/>
        {/* Header */}
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
              {t("products.catalogue")}
            </Button>
          )}
        </Box>

        {/* Product Types */}
        {/* <Typography variant="h5" gutterBottom>
          {t("products.types")}
        </Typography> */}
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
              onClick={() => handleTypeClick(type.type)}
              key={type.key}
              style={{
                cursor: "pointer",
                width: isMobile ? "calc(50% - 8px)" : TYPE_CARD_SIZE,
              }}
            >
              {/* <Card
                sx={{
                  width: "100%",
                  height: TYPE_CARD_SIZE,
                  ...(selectedType === type.key && {
                    border: "2px solid",
                    borderColor: "primary.main",
                  }),
                }}
              >
                <CardMedia
                  component="img"
                  height={TYPE_CARD_SIZE}
                  image={type.image}
                  alt={type.name[lang]}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {type.name[lang]}
                  </Typography>
                </CardContent>
              </Card> */}

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
        {/* <Typography
          variant={isMobile ? "h4" : "h5"}
          gutterBottom
          sx={{ mt: 2 }}
        >
          {t("products.products")}
        </Typography> */}

        <ProductGrid
          products={sortedAndFilteredProducts}
          lang={i18n.language}
        />
        <FloatingContactButton />
      </motion.div>
    </Box>
  );
};

export default Products;
