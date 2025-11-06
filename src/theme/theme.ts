import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    text: {
      primary: "#111",
    },
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 800,
      fontSize: "2.5rem",
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    body1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#fff",
    },
    primary: {
      main: "#90caf9",
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 800,
      fontSize: "2.5rem",
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    body1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});
