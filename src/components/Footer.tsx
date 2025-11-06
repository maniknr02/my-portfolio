import React from "react";
import { Typography } from "@mui/material";
import { FooterContainer } from "./styles/StyledComponents";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Typography variant="body2">© {new Date().getFullYear()} Manikanta KNR</Typography>
    </FooterContainer>
  );
};

export default Footer;
