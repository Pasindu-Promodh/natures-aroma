import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const jobs = [
  {
    id: 1,
    title: {
      en: "Senior Game Developer",
      de: "Senior Game-Entwickler",
      ja: "シニアゲーム開発者",
    },
    department: {
      en: "Game Development",
      de: "Spielentwicklung",
      ja: "ゲーム開発",
    },
    location: {
      en: "Colombo, Sri Lanka",
      de: "Colombo, Sri Lanka",
      ja: "コロンボ、スリランカ",
    },
    description: {
      en: "We are seeking a passionate Senior Game Developer experienced in Unity and Unreal Engine. The ideal candidate will lead projects, mentor junior developers, and help drive innovation in gameplay and systems design.",
      de: "Wir suchen einen leidenschaftlichen Senior Game-Entwickler mit Erfahrung in Unity und Unreal Engine. Der ideale Kandidat wird Projekte leiten, Junior-Entwickler betreuen und Innovationen im Gameplay und Systemdesign vorantreiben.",
      ja: "UnityおよびUnreal Engineの経験を持つ熱心なシニアゲーム開発者を募集しています。理想的な候補者は、プロジェクトをリードし、ジュニア開発者を指導し、ゲームプレイやシステム設計の革新を推進します。",
    },
  },
  {
    id: 2,
    title: {
      en: "Frontend Developer",
      de: "Frontend-Entwickler",
      ja: "フロントエンド開発者",
    },
    department: {
      en: "Web Development",
      de: "Webentwicklung",
      ja: "ウェブ開発",
    },
    location: {
      en: "Remote",
      de: "Fernarbeit",
      ja: "リモート",
    },
    description: {
      en: "Join our growing web team to build modern, responsive, and dynamic web applications using React and TypeScript. Familiarity with MUI, Redux, and performance optimization is an advantage.",
      de: "Treten Sie unserem wachsenden Webteam bei, um moderne, reaktionsschnelle und dynamische Webanwendungen mit React und TypeScript zu entwickeln. Vertrautheit mit MUI, Redux und Leistungsoptimierung ist von Vorteil.",
      ja: "成長中のウェブチームに参加し、ReactとTypeScriptを使用してモダンでレスポンシブかつダイナミックなウェブアプリケーションを構築してください。MUI、Redux、パフォーマンス最適化の知識があると尚良いです。",
    },
  },
  {
    id: 3,
    title: {
      en: "UI/UX Designer",
      de: "UI/UX-Designer",
      ja: "UI/UXデザイナー",
    },
    department: {
      en: "Design",
      de: "Design",
      ja: "デザイン",
    },
    location: {
      en: "Colombo, Sri Lanka",
      de: "Colombo, Sri Lanka",
      ja: "コロンボ、スリランカ",
    },
    description: {
      en: "We are looking for a creative and detail-oriented UI/UX Designer to craft intuitive, visually appealing interfaces for both web and mobile products. A strong portfolio demonstrating design process and creativity is required.",
      de: "Wir suchen einen kreativen und detailorientierten UI/UX-Designer, der intuitive und visuell ansprechende Schnittstellen für Web- und Mobile-Produkte erstellt. Ein starkes Portfolio, das den Designprozess und die Kreativität zeigt, ist erforderlich.",
      ja: "ウェブおよびモバイル製品向けに直感的で視覚的に魅力的なインターフェースを作成できる、創造的で細部に注意を払えるUI/UXデザイナーを募集しています。デザインプロセスと創造性を示す強力なポートフォリオが必要です。",
    },
  },
  {
    id: 4,
    title: {
      en: "Backend Developer",
      de: "Backend-Entwickler",
      ja: "バックエンド開発者",
    },
    department: {
      en: "Web Development",
      de: "Webentwicklung",
      ja: "ウェブ開発",
    },
    location: {
      en: "Colombo, Sri Lanka",
      de: "Colombo, Sri Lanka",
      ja: "コロンボ、スリランカ",
    },
    description: {
      en: "An experienced Backend Developer is needed to design and develop scalable RESTful APIs, optimize database structures, and integrate cloud-based services. Proficiency in Node.js, PostgreSQL, and system architecture is preferred.",
      de: "Ein erfahrener Backend-Entwickler wird benötigt, um skalierbare RESTful-APIs zu entwerfen und zu entwickeln, Datenbankstrukturen zu optimieren und Cloud-Dienste zu integrieren. Kenntnisse in Node.js, PostgreSQL und Systemarchitektur sind von Vorteil.",
      ja: "スケーラブルなRESTful APIを設計・開発し、データベース構造を最適化し、クラウドベースのサービスを統合できる経験豊富なバックエンド開発者が必要です。Node.js、PostgreSQL、およびシステムアーキテクチャの習熟が望まれます。",
    },
  },
];

const Career = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "de" | "ja";
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);

  const handleClose = () => setSelectedJob(null);

  return (
    <Box>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <img
            src="https://placehold.co/600x200?text=Career&font=roboto"
            alt="Career Banner"
            style={{ width: "100%", borderRadius: "8px", marginBottom: 16 }}
          />
          <Typography variant="h3" gutterBottom>
            {t("career.title")}
          </Typography>
          <Typography variant="body1">{t("career.description")}</Typography>
        </Paper>

        {/* 🔹 Job Listings */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)", // mobile: 1 column
              sm: "repeat(2, 1fr)", // desktop: 2 columns
            },
            gap: 2,
          }}
        >
          {jobs.map((j) => (
            <motion.div
              key={j.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              style={{
                cursor: "pointer",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => setSelectedJob(j)}
            >
              <Card>
                <CardActionArea>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" noWrap color="black" gutterBottom>
                      {j.title[lang] || j.title.en}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
                    >
                      {j.description[lang].length > 70
                        ? j.description[lang].slice(0, 70) + "..."
                        : j.description[lang] || j.description.en}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* 🔹 Job Details Dialog */}
        <Dialog
          open={!!selectedJob}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            {selectedJob?.title[lang] || selectedJob?.title.en}
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {selectedJob?.department[lang] || selectedJob?.department.en} |{" "}
              {selectedJob?.location[lang] || selectedJob?.location.en}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              {selectedJob?.description[lang] || selectedJob?.description.en}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {t("career.close")}
            </Button>
            <Button variant="contained" color="primary">
              {t("career.applyNow")}
            </Button>
          </DialogActions>
        </Dialog>
      </motion.div>
    </Box>
  );
};

export default Career;
