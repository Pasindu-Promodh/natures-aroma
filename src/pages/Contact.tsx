import { useTranslation } from 'react-i18next';
import { Typography, Box, TextField, Button, Paper, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  const { t } = useTranslation();

  const email = "info@natureproducts.com";
  const phone = "+94705890009";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert(`Copied email: ${email}`);
  };

  return (
    <Box>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" gutterBottom>
            {t('contact.title')}
          </Typography>
          <img src="https://placehold.co/600x200?text=Contact+Us&font=poppins" alt="Contact Us" style={{ width: '100%', borderRadius: '8px'}} />
          <form noValidate autoComplete="off">
            <TextField fullWidth label={t('contact.name')} variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label={t('contact.email')} variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label={t('contact.message')} variant="outlined" multiline rows={4} sx={{ mb: 2 }} />
            <Button variant="contained" color="primary">
              {t('contact.submit')}
            </Button>
          </form>

          {/* Social Media Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            <Tooltip title="Copy Email">
              <IconButton color="primary" onClick={copyEmail}>
                <EmailIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Facebook">
              <IconButton
                color="primary"
                onClick={() =>
                  window.open("https://www.facebook.com/YourPage", "_blank")
                }
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="WhatsApp">
              <IconButton
                color="primary"
                onClick={() =>
                  window.open(
                    `https://wa.me/94705890009`,
                    "_blank"
                  )
                }
              >
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="YouTube">
              <IconButton
                color="primary"
                onClick={() =>
                  window.open("https://www.youtube.com/YourChannel", "_blank")
                }
              >
                <YouTubeIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Call Us">
              <IconButton color="primary" href={`tel:${phone}`}>
                <PhoneIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Contact;