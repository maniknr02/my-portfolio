import React from "react";
import { AppBar, Typography, Stack } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { Link as ScrollLink } from "react-scroll";
import { navItems } from "./constants";
import { StyledToolbar } from "./styles/StyledComponents";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <StyledToolbar>
        <Typography variant="h6" fontWeight={700}>
          Mani’s Portfolio
        </Typography>

        <Stack direction="row" spacing={3} alignItems="center">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              offset={-80}
              duration={500}
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              {item.label}
            </ScrollLink>
          ))}
          <ThemeToggle />
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
