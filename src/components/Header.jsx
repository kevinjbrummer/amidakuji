import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import AdbIcon from '@mui/icons-material/Adb';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography component="a" href="/">Logo</Typography>
      </Toolbar>
    </AppBar>
  );
}
