import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Navbar = () => {
  return (
    <AppBar position="stick">
      <StyledToolbar>Steve Dev</StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
