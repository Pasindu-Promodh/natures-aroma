// import { type JSX } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { useTranslation } from "react-i18next";

// export default function Footer(): JSX.Element {
//   const { t } = useTranslation();
//   return (
//     <Box
//       component="footer"
//       sx={{ py: 3, textAlign: "center", bgcolor: "background.paper" }}
//     >
//       <Typography variant="body2">
//         {t("footer", { year: new Date().getFullYear() })}
//       </Typography>
//     </Box>
//   );
// }



import React, { type JSX } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => (
<Box sx={{ backgroundColor: '#2e7d32', py: 3, textAlign: 'center', color: 'white', mt: 6 }}>
<Typography variant="body2">© 2025 Nature Essence. All Rights Reserved.</Typography>
</Box>
);

export default Footer;