import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => (
  <Box
    sx={{
      backgroundColor: "#2e7d32",
      py: 3,
      textAlign: "center",
      color: "white",
      mt: 6,
    }}
  >
    <Typography variant="body2">
      © 2025 Nature Essence. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
