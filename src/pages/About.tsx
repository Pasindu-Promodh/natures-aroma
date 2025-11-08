import { useTranslation } from "react-i18next";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { motion } from "framer-motion";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"; // ✅ bullet icon

const About = () => {
  const { t } = useTranslation();

  return (
    // <Box>
    //   <motion.div
    //     initial={{ scale: 0.9, opacity: 0 }}
    //     animate={{ scale: 1, opacity: 1 }}
    //     transition={{ duration: 0.7 }}
    //   >
    //     <Paper elevation={3} sx={{ p: 4 }}>
    //       <img
    //         src="/natures-aroma/media/about-us.png"
    //         alt="About Us"
    //         style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
    //       />

    //       {/* About Us */}
    //       <Typography variant="h3" gutterBottom>
    //         {t("about.title")}
    //       </Typography>
    //       <Typography variant="body1" paragraph>
    //         {t("about.description")}
    //       </Typography>

    //       {/* Our Vision */}
    //       <Typography variant="h4" sx={{ mt: 4, mb: 1 }}>
    //         {t("about.ourVision")}
    //       </Typography>
    //       <Typography variant="body1" paragraph>
    //         {t("about.vision")}
    //       </Typography>

    //       {/* Our Mission */}
    //       <Typography variant="h4" sx={{ mt: 4, mb: 1 }}>
    //         {t("about.ourMission")}
    //       </Typography>
    //       <List>
    //         {(t("about.mission", { returnObjects: true }) as string[]).map(
    //           (mission: string, index: number) => (
    //             <ListItem key={index} sx={{ alignItems: "flex-start" }}>
    //               <ListItemIcon sx={{ minWidth: "32px", mt: "5px" }}>
    //                 <FiberManualRecordIcon
    //                   fontSize="small"
    //                   sx={{ color: "green" }}
    //                 />
    //               </ListItemIcon>
    //               <ListItemText primary={mission} />
    //             </ListItem>
    //           )
    //         )}
    //       </List>

    //       {/* Our Approach */}
    //       <Typography variant="h4" sx={{ mt: 4, mb: 1 }}>
    //         {t("about.ourApproach")}
    //       </Typography>
    //       <Typography variant="body1" paragraph>
    //         {t("about.approach")}
    //       </Typography>
    //     </Paper>
    //   </motion.div>
    // </Box>

    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
          mb: 8,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <motion.img
            src="/natures-aroma/media/about-us.png"
            alt="About Us"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {t("about.title")}
          </Typography>
          <Typography variant="body1">{t("about.description")}</Typography>
        </Box>
      </Box>

      {/* SECTION 2 - Vision (Image Right) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          gap: 4,
          mb: 8,
          width: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <motion.img
            src="/natures-aroma/media/our_vision.jpg"
            alt="Our Vision"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              objectFit: "cover",
              display: "block",
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {t("about.ourVision")}
          </Typography>
          <Typography variant="body1">{t("about.vision")}</Typography>
        </Box>
      </Box>

      {/* SECTION 3 - Mission (Image Left) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
          mb: 8,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <motion.img
            src="/natures-aroma/media/our_mission.jpg"
            alt="Our Mission"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {t("about.ourMission")}
          </Typography>
          <List>
            {(t("about.mission", { returnObjects: true }) as string[]).map(
              (mission: string, index: number) => (
                <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: "32px", mt: "5px" }}>
                    <FiberManualRecordIcon
                      fontSize="small"
                      sx={{ color: "green" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={mission} />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Box>

      {/* SECTION 4 - Approach (Image Right) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          gap: 4,

          width: "100%",
          boxSizing: "border-box", // important to prevent overflow
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <motion.img
            src="/natures-aroma/media/about-us.png"
            alt="Our Approach"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              objectFit: "cover",
              display: "block",
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {t("about.ourApproach")}
          </Typography>
          <Typography variant="body1">{t("about.approach")}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
