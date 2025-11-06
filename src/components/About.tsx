import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import { AboutContainer, StyledAboutPaper } from "./styles/StyledComponents";

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <StyledAboutPaper elevation={0}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
          <Avatar src="/profile.jpg" alt="Manikanta" sx={{ width: 120, height: 120 }} />
          <Box maxWidth={600}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I’m a Full Stack Engineer passionate about building performant, scalable web apps. I
              enjoy solving complex backend problems and crafting delightful UI experiences. My
              expertise includes Node.js, Spring Boot, Golang, React, and AWS.
            </Typography>
          </Box>
        </Stack>
      </StyledAboutPaper>
    </AboutContainer>
  );
};

export default About;
