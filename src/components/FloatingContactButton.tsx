import { useState } from "react";
import { Box, Fab, Tooltip, Zoom } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("pasindugunathilaka96@gmail.com");
    alert("Email copied to clipboard!");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/94705890009", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+94705890009";
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1200,
      }}
    >
      {/* Animated child icons */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginBottom: "8px",
            }}
          >
            <Tooltip title="Email" placement="left">
              <Zoom in={open}>
                <Fab
                  size="small"
                  color="info"
                  sx={{ mb: 1 }}
                  onClick={handleEmailClick}
                >
                  <EmailIcon />
                </Fab>
              </Zoom>
            </Tooltip>

            <Tooltip title="WhatsApp" placement="left">
              <Zoom in={open}>
                <Fab
                  size="small"
                  color="success"
                  sx={{ mb: 1 }}
                  onClick={handleWhatsAppClick}
                >
                  <WhatsAppIcon />
                </Fab>
              </Zoom>
            </Tooltip>

            <Tooltip title="Call" placement="left">
              <Zoom in={open}>
                <Fab size="small" color="primary" onClick={handlePhoneClick}>
                  <PhoneIcon />
                </Fab>
              </Zoom>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Contact Button */}
      <Fab
        color="secondary"
        onClick={() => setOpen(!open)}
        sx={{ boxShadow: 4 }}
      >
        <ContactMailIcon />
      </Fab>
    </Box>
  );
};

export default FloatingContactButton;
