import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 2, textAlign: "center", opacity: 0.6 }}>
      <Typography variant="body2">© {new Date().getFullYear()} Manikanta KNR</Typography>
    </Box>
  );
};

export default Footer;
