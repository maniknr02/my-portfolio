// src/components/styles/StyledComponents.ts
import { styled } from "@mui/material/styles";
import { Paper, Box, Toolbar, Card, CardMedia, CardContent, Chip } from "@mui/material";
import { type Theme } from "@mui/material/styles";

// ---------- HEADER ----------
export const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0",
  position: "relative",
}));

// ---------- HERO ----------
export const HeroContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(4),
  transition: "color 0.3s ease, background 0.3s ease",
}));

export const HeroTitle = styled("h1")(({ theme }: { theme: Theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 800,
  fontSize: "2.5rem",
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export const HeroSubtitle = styled("p")(({ theme }: { theme: Theme }) => ({
  fontFamily: "'Lato', sans-serif",
  maxWidth: 600,
  fontSize: "1.2rem",
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
}));

// ---------- ABOUT ----------
export const StyledAboutPaper = styled(Paper)(({ theme }: { theme: Theme }) => ({
  padding: "2rem",
  borderRadius: "1.5rem",
  backdropFilter: "blur(12px)",
  transition: "all 0.3s ease",
  background: theme.palette.mode === "light" ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.06)",
  boxShadow:
    theme.palette.mode === "light" ? "0 8px 24px rgba(0,0,0,0.08)" : "0 8px 24px rgba(0,0,0,0.5)",
  border: `1px solid ${
    theme.palette.mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"
  }`,
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow:
      theme.palette.mode === "light"
        ? "0 10px 32px rgba(0,0,0,0.12)"
        : "0 10px 32px rgba(0,0,0,0.6)",
  },
}));

export const AboutContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(12, 2),
}));

// ---------- CONTACT ----------
export const ContactContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(12, 2),
  textAlign: "center",
}));

// ---------- FOOTER ----------
export const FooterContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  opacity: 0.6,
  fontFamily: "'Lato', sans-serif",
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
}));

// ---------- PROJECTS ----------
export const ProjectsContainer = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: theme.spacing(4),
  padding: theme.spacing(10, 2),
}));

export const ProjectCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  borderRadius: "1rem",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  background: theme.palette.mode === "light" ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.06)",
  boxShadow:
    theme.palette.mode === "light" ? "0 6px 20px rgba(0,0,0,0.1)" : "0 6px 20px rgba(0,0,0,0.5)",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow:
      theme.palette.mode === "light"
        ? "0 10px 28px rgba(0,0,0,0.15)"
        : "0 10px 28px rgba(0,0,0,0.7)",
  },
}));

export const ProjectImage = styled(CardMedia)({
  height: 180,
});

export const ProjectContent = styled(CardContent)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(2),
  textAlign: "left",
}));

export const ExperienceContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(10, 2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ExperienceCard = styled(Paper)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "1rem",
  marginBottom: theme.spacing(4),
  maxWidth: 800,
  width: "100%",
  backdropFilter: "blur(12px)",
  background: theme.palette.mode === "light" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.08)",
  boxShadow:
    theme.palette.mode === "light" ? "0 6px 20px rgba(0,0,0,0.1)" : "0 6px 20px rgba(0,0,0,0.5)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

export const SkillChip = styled(Chip)(({ theme }: { theme: Theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 600,
  borderRadius: "8px",
  backgroundColor:
    theme.palette.mode === "light" ? theme.palette.primary.light : theme.palette.primary.dark,
  color:
    theme.palette.mode === "light"
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,
  "&:hover": {
    opacity: 0.9,
  },
}));
