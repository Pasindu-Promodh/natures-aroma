// import { useTranslation } from "react-i18next";
// import {
//   Typography,
//   Box,
//   Paper,
//   Card,
//   CardContent,
//   CardActionArea,
// } from "@mui/material";
// import { motion } from "framer-motion";

// // Sample job data
// const jobs = [
//   {
//     id: 1,
//     title: "Senior Game Developer",
//     department: "Game Development",
//     location: "Colombo, Sri Lanka",
//     description:
//       "We are looking for a passionate Senior Game Developer with experience in Unity and Unreal Engine.",
//   },
//   {
//     id: 2,
//     title: "Frontend Developer",
//     department: "Web Development",
//     location: "Remote",
//     description:
//       "Join our team to build responsive and interactive web applications using React and TypeScript.",
//   },
//   {
//     id: 3,
//     title: "UI/UX Designer",
//     department: "Design",
//     location: "Colombo, Sri Lanka",
//     description:
//       "Looking for a creative UI/UX designer to create engaging interfaces for web and mobile applications.",
//   },
//   {
//     id: 4,
//     title: "Backend Developer",
//     department: "Web Development",
//     location: "Colombo, Sri Lanka",
//     description:
//       "Experienced backend developer needed for building scalable RESTful APIs and database design.",
//   },
// ];

// const Career = () => {
//   const { t } = useTranslation();

//   return (
//     <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: 4 }}>
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
//           <img
//             src="https://placehold.co/600x200?text=Career&font=roboto"
//             alt="Career Banner"
//             style={{ width: "100%", borderRadius: "8px", marginBottom: 16 }}
//           />
//           <Typography variant="h3" gutterBottom>
//             {t("career.title")}
//           </Typography>
//           <Typography variant="body1">{t("career.description")}</Typography>
//         </Paper>

//         {/* 🔹 Job Listings */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "repeat(1, 1fr)", // mobile: 2 columns
//               sm: "repeat(2, 1fr)", // tablet: 3 columns
//               md: "repeat(2, 1fr)", // desktop: 4 columns
//             },
//             gap: `16px`,
//           }}
//         >
//           {jobs.map((j) => (
//             <motion.div
//               key={j.id}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               style={{
//                 cursor: "pointer",
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//               // onClick={() => handleProductClick(product.id)}
//             >
//               <Card>
//                 <CardActionArea>
//                   <CardContent
//                     sx={{
//                       width: "100%",
//                       textAlign: "center",
//                     }}
//                   >
//                     <Typography variant="h5" noWrap color="black">
//                       {j.title}
//                     </Typography>
//                     <Typography variant="body2" color="black">
//                       {j.description}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </motion.div>
//           ))}
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default Career;

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

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Senior Game Developer",
    department: "Game Development",
    location: "Colombo, Sri Lanka",
    description:
      "We are looking for a passionate Senior Game Developer with experience in Unity and Unreal Engine. The ideal candidate will have experience managing game projects and mentoring junior developers.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Web Development",
    location: "Remote",
    description:
      "Join our team to build responsive and interactive web applications using React and TypeScript. Experience with MUI and state management is a plus.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Colombo, Sri Lanka",
    description:
      "Looking for a creative UI/UX designer to create engaging interfaces for web and mobile applications. Strong portfolio required.",
  },
  {
    id: 4,
    title: "Backend Developer",
    department: "Web Development",
    location: "Colombo, Sri Lanka",
    description:
      "Experienced backend developer needed for building scalable RESTful APIs and database design. Knowledge of Node.js and PostgreSQL preferred.",
  },
];

const Career = () => {
  const { t } = useTranslation();
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
                      {j.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
                    >
                      {j.description.length > 70
                        ? j.description.slice(0, 70) + "..."
                        : j.description}
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
          <DialogTitle>{selectedJob?.title}</DialogTitle>
          <DialogContent dividers>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {selectedJob?.department} | {selectedJob?.location}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              {selectedJob?.description}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            <Button variant="contained" color="primary">
              Apply Now
            </Button>
          </DialogActions>
        </Dialog>
      </motion.div>
    </Box>
  );
};

export default Career;
