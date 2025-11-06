import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { ThemeProviderWrapper } from "./theme/ThemeProviderWrapper";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <ThemeProviderWrapper>
      <Header />
      <Container>
        <Hero />
      </Container>
      <Footer />
    </ThemeProviderWrapper>
  );
};

export default App;
