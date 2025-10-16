import { useTranslation } from "react-i18next";
import {
  Typography,
  Box,
  Paper,
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
    <Box>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <img
            src="https://placehold.co/600x200?text=About+Us&font=roboto"
            alt="About Us"
            style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
          />

          {/* About Us */}
          <Typography variant="h3" gutterBottom>
            {t("about.title")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about.description")}
          </Typography>

          {/* Our Vision */}
          <Typography variant="h4" sx={{ mt: 4, mb: 1 }}>
            {t("about.ourVision")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about.vision")}
          </Typography>

          {/* Our Mission */}
          <Typography variant="h4" sx={{ mt: 4, mb: 1 }}>
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

          {/* Our Approach */}
          <Typography variant="h4" sx={{ mt: 4, mb: 1 }}>
            {t("about.ourApproach")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about.approach")}
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default About;
