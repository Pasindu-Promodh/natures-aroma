import { useTranslation } from "react-i18next";
import {
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { getProducts } from "../data/products";
import InfiniteCarousel from "../components/InfiniteCarousel";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  createCoordinates,
} from "@vnedyalk0v/react19-simple-maps";
import geo from "../data/countries-110m.json";

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "de" | "ja";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const TYPE_CARD_SIZE = 217;

  const products = getProducts().slice(0, 10);

  const countries = [
    {
      name: { en: "Sri Lanka", de: "Sri Lanka", ja: "スリランカ" },
      coordinates: [80.7718, 7.8731],
    },
    {
      name: { en: "Japan", de: "Japan", ja: "日本" },
      coordinates: [138.2529, 36.2048],
    },
    {
      name: { en: "India", de: "Indien", ja: "インド" },
      coordinates: [78.9629, 20.5937],
    },
    {
      name: { en: "Switzerland", de: "Schweiz", ja: "スイス" },
      coordinates: [8.2275, 46.8182],
    },
    {
      name: {
        en: "United States",
        de: "Vereinigte Staaten",
        ja: "アメリカ合衆国",
      },
      coordinates: [-95.7129, 37.0902],
    },
    {
      name: {
        en: "United Kingdom",
        de: "Vereinigtes Königreich",
        ja: "イギリス",
      },
      coordinates: [-3.436, 55.3781],
    },
    {
      name: {
        en: "United Arab Emirates (Dubai)",
        de: "Vereinigte Arabische Emirate (Dubai)",
        ja: "アラブ首長国連邦（ドバイ）",
      },
      coordinates: [55.2708, 25.2048],
    },
  ];

  const ourCustomers = [
    { key: "1", name: "Hemas", image: "/natures-aroma/media/customers/Hemas.jpeg" },
    { key: "2", name: "Pyramid vilmar", image: "/natures-aroma/media/customers/pw.png" },
    { key: "3", name: "Celebration holdings", image: "/natures-aroma/media/customers/ch.png" },
    { key: "4", name: "Atnasal pvt ltd", image: "/natures-aroma/media/customers/atnasal.webp" },
    { key: "5", name: "Ayuviva", image: "/natures-aroma/media/customers/ayuviva.jpg" },
  ];

  return (
    <Box>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Paper elevation={3} sx={{ p: 4, textAlign: "center", mb: 6 }}>
          <img
            src="/natures-aroma/media/Natures-landscape.png"
            alt="Nature Landscape"
            style={{ width: "100%", 
              // maxWidth: "800px", 
              borderRadius: "8px" }}
          />
          <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
            {t("home.title")}
          </Typography>
          <Typography variant="body1">{t("home.description")}</Typography>
        </Paper>

        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          {t("home.popularProducts")}
        </Typography>

        <InfiniteCarousel products={products} lang={lang} />

        <Typography variant="h4" sx={{ mb: 3, textAlign: "center", mt: 4 }}>
          {t("home.ourCustomers")}
        </Typography>

        {/* <InfiniteCarousel products={ourCustomers} lang={lang} /> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          {ourCustomers.map((c) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              // onClick={() => handleTypeClick(type.key)}
              key={c.key}
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
                  // ...(selectedType === type.key && {
                  //   border: "2px solid",
                  //   borderColor: "primary.main",
                  // }),
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: "100%",objectFit:"contain",  }} // image takes 70% of card height
                  image={c.image}
                  alt={c.name}

                />
                {/* <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Typography variant="subtitle1" align="center">
                    {c.name}
                  </Typography>
                </CardContent> */}
              </Card>
            </motion.div>
          ))}
        </Box>

        <Box
          sx={{
            maxWidth: "100%",
            mx: "auto",
            textAlign: "center",
            mt: { xs: 4, md: 6 },
            px: { xs: 1, sm: 2 },
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t("home.ourGlobalReach")}
          </Typography>

          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              "& svg": {
                width: "100%",
                height: "auto",
              },
            }}
          >
            <ComposableMap
              projectionConfig={{ scale: 160 }}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <Geographies geography={geo}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo, i) => (
                    <Geography
                      key={i}
                      geography={geo}
                      style={{
                        default: { fill: "#e0e0e0", outline: "none" },
                        hover: { fill: "#9ccc65", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Lines from Sri Lanka to others */}
              {countries.map(({ coordinates }, i) =>
                i !== 0 ? (
                  <Line
                    key={`line-${i}`}
                    // from={countries[0].coordinates}
                    // to={coordinates}
                    from={createCoordinates(
                      countries[0].coordinates[0],
                      countries[0].coordinates[1]
                    )}
                    to={createCoordinates(coordinates[0], coordinates[1])}
                    stroke="red"
                    strokeWidth={1}
                    strokeLinecap="round"
                  />
                ) : null
              )}

              {/* Markers */}
              {countries.map(({ name, coordinates }, i) => (
                <Marker
                  key={i}
                  coordinates={createCoordinates(
                    coordinates[0],
                    coordinates[1]
                  )}
                >
                  <circle
                    r={5}
                    fill={i === 0 ? "#006904ff" : "#28c42dff"}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                  <text
                    textAnchor="middle"
                    y={-10}
                    fontSize={10}
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: 900,
                      fill: "#333",
                    }}
                  >
                    {name[lang] || name.en}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;
