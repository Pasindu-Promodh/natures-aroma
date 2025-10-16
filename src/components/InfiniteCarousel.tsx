import { useRef, useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface InfiniteCarouselProps {
  products: any[];
  lang: string;
  cardWidth?: number;
  cardSpacing?: number;
  scrollDuration?: number; // seconds
}

interface Product {
  id: string;
  name: { [key: string]: string };
  price: number;
  inStock: boolean;
  image: string;
}

interface ProductCardProps {
  product: Product;
  lang: string;
  onClick: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  lang,
  onClick,
}) => {
  // const { t } = useTranslation();
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      style={{
        cursor: "pointer",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => onClick(product.id)}
    >
      <Paper
        sx={{
          width: "100%",
          position: "relative",
          paddingBottom: "150%", // 2:3 aspect ratio
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name[lang]}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            background: "rgba(0,0,0,0.7)",
            textAlign: "center",
            py: 1,
            color: "white",
          }}
        >
          <Typography variant="subtitle1" noWrap>
            {product.name[lang] || product.name.en}
          </Typography>
          {/* <Typography variant="body2">${product.price.toFixed(2)}</Typography>
          <Typography
            variant="body2"
            color={product.inStock ? "success.main" : "error.main"}
          >
            {product.inStock
              ? t("productDetail.inStock")
              : t("productDetail.outOfStock")}
          </Typography> */}
        </Box>
      </Paper>
    </motion.div>
  );
};

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  products,
  lang,
  cardWidth = 200,
  cardSpacing = 16,
  scrollDuration = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (containerRef.current) {
      // total width of one set of products
      const width = containerRef.current.scrollWidth / 2;
      setTotalWidth(width);
    }
  }, [products]);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", py: 2 }}>
      <motion.div
        ref={containerRef}
        style={{ display: "flex", gap: `${cardSpacing}px` }}
        animate={{ x: [-0, -totalWidth] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: scrollDuration,
          },
        }}
      >
        {/* duplicate products twice for seamless scroll */}
        {[...products, ...products].map((p, idx) => (
          <Box
            key={`${p.id}-${idx}`}
            sx={{ width: cardWidth, flexShrink: 0, cursor: "pointer" }}
          >
            <ProductCard
              product={p}
              lang={lang}
              onClick={(id) => navigate(`/products/${id}`)}
            />
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default InfiniteCarousel;
