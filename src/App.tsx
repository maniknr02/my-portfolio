import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProviderWrapper } from "./theme/ThemeProviderWrapper";
import { Container } from "@mui/material";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const App: React.FC = () => {
  return (
    <ThemeProviderWrapper>
      <Header />
      <Container>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </Container>
      <Footer />
    </ThemeProviderWrapper>
  );
};

export default App;
