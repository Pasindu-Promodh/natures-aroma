import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: { [key: string]: string };
  price: number;
  inStock: boolean;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  lang: string; // "en" | "de" | "ja"
  cardSpacing?: number; // optional spacing
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  lang,
  cardSpacing = 16,
}) => {

  // const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProductClick = (id: string) => navigate(`/products/${id}`);
  
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)", // mobile: 2 columns
          sm: "repeat(3, 1fr)", // tablet: 3 columns
          md: "repeat(4, 1fr)", // desktop: 4 columns
        },
        gap: `${cardSpacing}px`,
      }}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{
            cursor: "pointer",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => handleProductClick(product.id)}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: 0,
              paddingBottom: "150%", // 2:3 aspect ratio
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name[lang]}
              sx={{
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                background: "rgba(0, 0, 0, 0.7)",
                textAlign: "center",
                // py: 1,
              }}
            >
              <Typography variant="subtitle1" noWrap color="white">
                {product.name[lang] || product.name.en}
              </Typography>
              {/* <Typography variant="body2" color="white">
                ${product.price.toFixed(2)}
              </Typography>
              <Typography
                variant="body2"
                color={product.inStock ? "success.main" : "error.main"}
              >
                {product.inStock
                      ? t("productDetail.inStock")
                      : t("productDetail.outOfStock")}
              </Typography> */}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
};

export default ProductGrid;
