import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActionArea,
} from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import i18n from "../i18n";

const blogs = [
  {
    id: 1,
    title: {
      en: "Exploring the Beauty of Nature",
      de: "Die Schönheit der Natur entdecken",
      ja: "自然の美しさを探る",
    },
    date: "2025-08-20",
    image: "https://placehold.co/600x400?text=Nature",
    excerpt: {
      en: "Discover how spending time in nature can boost your creativity and well-being.",
      de: "Erfahre, wie Zeit in der Natur deine Kreativität und dein Wohlbefinden fördern kann.",
      ja: "自然の中で過ごすことで、創造力と幸福感がどのように高まるかを発見しましょう。",
    },
  },
  {
    id: 2,
    title: {
      en: "AI in 2025 — What’s Next?",
      de: "KI im Jahr 2025 — Was kommt als Nächstes?",
      ja: "2025年のAI — 次に来るものは？",
    },
    date: "2025-09-05",
    image: "https://placehold.co/600x400?text=AI",
    excerpt: {
      en: "Artificial intelligence continues to evolve rapidly. Here’s what to expect next.",
      de: "Künstliche Intelligenz entwickelt sich rasant weiter. Das erwartet uns als Nächstes.",
      ja: "人工知能は急速に進化し続けています。次に何が起こるのかを見てみましょう。",
    },
  },
  {
    id: 3,
    title: {
      en: "Mastering React with TypeScript",
      de: "React mit TypeScript meistern",
      ja: "TypeScriptでReactを極める",
    },
    date: "2025-07-15",
    image: "https://placehold.co/600x400?text=React+TS",
    excerpt: {
      en: "A guide for developers who want to take their React apps to the next level.",
      de: "Ein Leitfaden für Entwickler, die ihre React-Apps auf das nächste Level bringen möchten.",
      ja: "Reactアプリを次のレベルに引き上げたい開発者のためのガイドです。",
    },
  },
  {
    id: 4,
    title: {
      en: "Building Modern UI with MUI and Framer Motion",
      de: "Moderne Benutzeroberflächen mit MUI und Framer Motion erstellen",
      ja: "MUIとFramer MotionでモダンなUIを構築する",
    },
    date: "2025-06-10",
    image: "https://placehold.co/600x400?text=MUI+Motion",
    excerpt: {
      en: "Learn how to combine Material UI and Framer Motion for beautiful, smooth UIs.",
      de: "Lerne, wie du Material UI und Framer Motion kombinierst, um schöne, flüssige Benutzeroberflächen zu erstellen.",
      ja: "Material UIとFramer Motionを組み合わせて、美しく滑らかなUIを作る方法を学びましょう。",
    },
  },
  {
    id: 5,
    title: {
      en: "Tech Trends in 2024",
      de: "Technologietrends im Jahr 2024",
      ja: "2024年のテクノロジートレンド",
    },
    date: "2024-12-22",
    image: "https://placehold.co/600x400?text=Tech+2024",
    excerpt: {
      en: "A look back at the biggest technology changes of 2024.",
      de: "Ein Rückblick auf die größten technologischen Veränderungen des Jahres 2024.",
      ja: "2024年に起きた最大の技術変化を振り返ります。",
    },
  },
];

const Blog = () => {
  const { t } = useTranslation();
  const lang = i18n.language as "en" | "de" | "ja";
  const [sortType, setSortType] = useState("date");
  const [filterType, setFilterType] = useState<"year" | "month" | "date">(
    "date"
  );
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const sortedBlogs = useMemo(() => {
    let sorted = [...blogs];
    if (sortType === "date") {
      sorted.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortType === "month") {
      sorted.sort(
        (a, b) => new Date(b.date).getMonth() - new Date(a.date).getMonth()
      );
    } else if (sortType === "year") {
      sorted.sort(
        (a, b) =>
          new Date(b.date).getFullYear() - new Date(a.date).getFullYear()
      );
    }
    return sorted;
  }, [sortType]);

  const filteredBlogs = useMemo(() => {
    if (!selectedDate) return sortedBlogs;
    return sortedBlogs.filter((blog) => {
      const blogDate = dayjs(blog.date);
      if (filterType === "year") return blogDate.year() === selectedDate.year();
      if (filterType === "month")
        return (
          blogDate.year() === selectedDate.year() &&
          blogDate.month() === selectedDate.month()
        );
      return blogDate.isSame(selectedDate, "day");
    });
  }, [selectedDate, filterType, sortedBlogs]);

  const handleClearFilter = () => setSelectedDate(null);

  const topBlogs = sortedBlogs.slice(0, 3);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  // const handleProductClick = (id: string) => navigate(`/products/${id}`);

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: 3 }}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, mb: 4 }}> */}
        {/* <Typography variant="h3" gutterBottom>
            {t("blog.title")}
          </Typography> */}

        {/* 🔹 Top Blogs Carousel */}
        <Box sx={{ mb: 4 }}>
          <Slider {...settings}>
            {topBlogs.map((blog) => (
              <Box key={blog.id} sx={{ px: 1 }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    width: "100%",
                    // maxWidth: 800,
                    mx: "auto",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={blog.image}
                      alt={blog.title.en}
                      sx={{
                        width: "100%",
                        objectFit: "cover",
                        aspectRatio: "16/9",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {blog.title[lang] || blog.title.en}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog.excerpt[lang] || blog.excerpt.en}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
        {/* </Paper> */}

        <Divider sx={{ my: 3 }} />

        {/* 🔹 Sorting + Date Filter + Count */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            mb: 3,
          }}
        >
          <Typography variant="h6">
            {t("blog.totalBlogs")}: {filteredBlogs.length}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <FormControl size="small" sx={{ minWidth: 130 }}>
              <InputLabel>{t("blog.sortBy")}</InputLabel>
              <Select
                value={sortType}
                label="Sort By"
                onChange={(e) => setSortType(e.target.value)}
              >
                <MenuItem value="date">{t("blog.date")}</MenuItem>
                <MenuItem value="month">{t("blog.month")}</MenuItem>
                <MenuItem value="year">{t("blog.year")}</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 130 }}>
              <InputLabel>{t("blog.filterType")}</InputLabel>
              <Select
                value={filterType}
                label="Filter Type"
                onChange={(e) =>
                  setFilterType(e.target.value as "year" | "month" | "date")
                }
              >
                <MenuItem value="date">{t("blog.date")}</MenuItem>
                <MenuItem value="month">{t("blog.month")}</MenuItem>
                <MenuItem value="year">{t("blog.year")}</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={`Pick ${filterType}`}
                views={
                  filterType === "year"
                    ? ["year"]
                    : filterType === "month"
                    ? ["year", "month"]
                    : ["year", "month", "day"]
                }
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                slotProps={{
                  textField: { size: "small", variant: "outlined" },
                }}
              />
            </LocalizationProvider>

            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClearFilter}
            >
              {t("blog.clearFilter")}
            </Button>
          </Box>
        </Box>

        {/* 🔹 All Blogs Grid */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)", // mobile: 2 columns
              sm: "repeat(2, 1fr)", // tablet: 3 columns
              md: "repeat(2, 1fr)", // desktop: 4 columns
            },
            gap: `16px`,
          }}
        >
          {filteredBlogs.map((b) => (
            <motion.div
              key={b.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              style={{
                cursor: "pointer",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              // onClick={() => handleProductClick(product.id)}
            >
              <CardActionArea>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: 0,
                    paddingBottom: "66%", // 2:3 aspect ratio
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={b.image}
                    alt={b.title.en}
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
                      height: "35%",
                      background: "rgba(0, 0, 0, 0.7)",
                      textAlign: "center",
                      py: 1,
                    }}
                  >
                    <Typography variant="subtitle1" noWrap color="white">
                      {b.title[lang] || b.title.en}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {b.date}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {b.excerpt[lang] || b.excerpt.en}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Blog;
