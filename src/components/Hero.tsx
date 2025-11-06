import React from "react";
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Hero: React.FC = () => {
  return (
    <Box
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
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Hi, I'm Manikanta 👋
      </Typography>
      <Typography variant="h6" sx={{ mb: 3, maxWidth: 600 }}>
        Full Stack Engineer passionate about building scalable web applications and crafting elegant
        frontend experiences.
      </Typography>

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
    </Box>
  );
};

export default Hero;
