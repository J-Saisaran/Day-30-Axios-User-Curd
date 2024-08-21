import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Home, List } from "@mui/icons-material";

function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit" component={Link} to="/" sx={{ mr: 2 }}>
          <Home fontSize="large" />
        </IconButton>
        <Typography variant="h6" color="inherit" component={Link} to="/ListPages" sx={{ color: 'red', textDecoration: 'none' }}>
          <List fontSize="large" />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
