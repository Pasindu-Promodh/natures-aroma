import { useTranslation } from "react-i18next";
import { Typography, Box, Paper } from "@mui/material";
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

  const products = getProducts().slice(0, 10);

  const countries = [
    {
      name: { en: "Sri Lanka", de: "Sri Lanka", ja: "スリランカ" },
      coordinates: [80.7718, 7.8731],
    },
    {
      name: { en: "Germany", de: "Deutschland", ja: "ドイツ" },
      coordinates: [10.4515, 51.1657],
    },
    {
      name: { en: "Japan", de: "Japan", ja: "日本" },
      coordinates: [138.2529, 36.2048],
    },
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

        <InfiniteCarousel products={products} lang={lang} />

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
                  geographies.map((geo,i) => (
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
