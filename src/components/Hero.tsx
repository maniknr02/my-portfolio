import React from "react";
import { Button, Stack, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { HeroContainer, HeroSubtitle, HeroTitle } from "./styles/StyledComponents";

const Hero: React.FC = () => {
  return (
    <HeroContainer
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <HeroTitle>Hi, I'm Manikanta 👋</HeroTitle>
      <HeroSubtitle>
        Full Stack Engineer passionate about building scalable web applications and crafting elegant
        frontend experiences.
      </HeroSubtitle>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <IconButton href="https://github.com/maniknr02" target="_blank" color="inherit">
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton href="https://linkedin.com/in/manikantaknr" target="_blank" color="inherit">
          <LinkedIn fontSize="large" />
        </IconButton>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        href="/vite.svg"
        download
        sx={{ borderRadius: 2, px: 3 }}
      >
        Download Resume
      </Button>
    </HeroContainer>
  );
};

export default Hero;
