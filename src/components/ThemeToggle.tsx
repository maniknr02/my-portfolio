import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { ThemeContext } from "../theme/themeContext";
import { LightMode, DarkMode } from "@mui/icons-material";

const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggle;
