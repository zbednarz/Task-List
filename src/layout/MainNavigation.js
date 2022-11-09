import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { MyDehazeIcon } from "../styles/MyIcons";
import { MyAvatar } from "../styles/MyAvatar";
import { MyNavigationBox } from "../styles/MyMainNavigation";
import { MyNavigationTypography } from "../styles/MyMainNavigation";
import { MyNavigationButton } from "../styles/MyMainNavigation";
import { MyBox } from "../styles/MyMainNavigation";
import { Link } from "react-router-dom";

const pages = ["Home", "Task", "TaskList"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MyNavigationBox>
            <MyDehazeIcon
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </MyDehazeIcon>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </MyNavigationBox>

          <MyNavigationTypography
            variant="h5"
          ></MyNavigationTypography>
          <MyBox>
            {pages.map((page) => (
              <MyNavigationButton
                key={page}
                onClick={handleCloseNavMenu}
              >
                <Link to={page}>{page}</Link>
              </MyNavigationButton>
            ))}
          </MyBox>
          <Tooltip title="Zbigniew Bednarz">
            <MyAvatar src="photo.jpg" />
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
