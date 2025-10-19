// import { useTranslation } from "react-i18next";
// import {
//   Typography,
//   Box,
//   TextField,
//   Button,
//   Paper,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import EmailIcon from "@mui/icons-material/Email";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import PhoneIcon from "@mui/icons-material/Phone";
// import InstagramIcon from "@mui/icons-material/Instagram"; // ✅ Added

// const Contact = () => {
//   const { t } = useTranslation();

//   const email = "info@natureproducts.com";
//   const phone = "+94705890009";

//   const copyEmail = () => {
//     navigator.clipboard.writeText(email);
//     alert(`Copied email: ${email}`);
//   };

//   return (
//     <Box>
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         <Paper elevation={3} sx={{ p: 4 }}>
//           <Typography variant="h3" gutterBottom>
//             {t("contact.title")}
//           </Typography>
//           <img
//             src="https://placehold.co/600x200?text=Contact+Us&font=poppins"
//             alt="Contact Us"
//             style={{ width: "100%", borderRadius: "8px" }}
//           />
//           <form noValidate autoComplete="off">
//             <TextField
//               fullWidth
//               label={t("contact.name")}
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               fullWidth
//               label={t("contact.email")}
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               fullWidth
//               label={t("contact.message")}
//               variant="outlined"
//               multiline
//               rows={4}
//               sx={{ mb: 2 }}
//             />
//             <Button variant="contained" color="primary">
//               {t("contact.submit")}
//             </Button>
//           </form>

//           {/* Social Media Icons */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               gap: 3,
//               mt: 4,
//               flexWrap: "wrap",
//             }}
//           >
//             <Tooltip title={t("contact.copyEmail")}>
//               <IconButton color="primary" onClick={copyEmail}>
//                 <EmailIcon />
//               </IconButton>
//             </Tooltip>

//             <Tooltip title={t("contact.faceBook")}>
//               <IconButton
//                 color="primary"
//                 onClick={() =>
//                   window.open(
//                     "https://www.facebook.com/Naturesaroma.pvt.Ltd",
//                     "_blank"
//                   )
//                 }
//               >
//                 <FacebookIcon />
//               </IconButton>
//             </Tooltip>

//             <Tooltip title={t("contact.instagram")}>
//               <IconButton
//                 color="primary"
//                 onClick={
//                   () =>
//                     window.open(
//                       "https://www.instagram.com/naturesaroma_secrets/",
//                       "_blank"
//                     ) // ✅ Update with your real handle
//                 }
//               >
//                 <InstagramIcon />
//               </IconButton>
//             </Tooltip>

//             <Tooltip title={t("contact.whatsApp")}>
//               <IconButton
//                 color="primary"
//                 onClick={() =>
//                   window.open(`https://wa.me/94705890009`, "_blank")
//                 }
//               >
//                 <WhatsAppIcon />
//               </IconButton>
//             </Tooltip>

//             <Tooltip title={t("contact.youtube")}>
//               <IconButton
//                 color="primary"
//                 onClick={() =>
//                   window.open("https://www.youtube.com/YourChannel", "_blank")
//                 }
//               >
//                 <YouTubeIcon />
//               </IconButton>
//             </Tooltip>

//             <Tooltip title={t("contact.callUs")}>
//               <IconButton color="primary" href={`tel:${phone}`}>
//                 <PhoneIcon />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </Paper>
//       </motion.div>
//     </Box>
//   );
// };

// export default Contact;



import { useTranslation } from "react-i18next";
import {
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  const { t } = useTranslation();

  const email = "info@natureproducts.com";
  const phone = "+94705890009";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_uf5ya3g",      // e.g. service_abc123
        "template_4mk0o9x",     // e.g. template_xyz789
        formData,
        "Zfjo1OPbLpakHUwOg"       // e.g. UeYxNxxxxxxx
      );
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            {t("contact.title")}
          </Typography>

          <img
            src="/natures-aroma/media/contact-us.jpg"
            alt="Contact Us"
            style={{ width: "100%", borderRadius: "8px" }}
          />

          <form onSubmit={sendEmail} noValidate autoComplete="off">
            <TextField
              fullWidth
              label={t("contact.name")}
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label={t("contact.email")}
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label={t("contact.message")}
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              sx={{ mb: 2 }}
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : t("contact.submit")}
            </Button>
          </form>

          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            <Tooltip title={t("contact.copyEmail")}>
              <IconButton color="primary" onClick={copyEmail}>
                <EmailIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title={t("contact.faceBook")}>
              <IconButton
                color="primary"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/Naturesaroma.pvt.Ltd",
                    "_blank"
                  )
                }
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title={t("contact.instagram")}>
              <IconButton
                color="primary"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/naturesaroma_secrets/",
                    "_blank"
                  )
                }
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title={t("contact.whatsApp")}>
              <IconButton
                color="primary"
                onClick={() =>
                  window.open(`https://wa.me/94705890009`, "_blank")
                }
              >
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title={t("contact.youtube")}>
              <IconButton
                color="primary"
                onClick={() =>
                  window.open("https://www.youtube.com/YourChannel", "_blank")
                }
              >
                <YouTubeIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title={t("contact.callUs")}>
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
