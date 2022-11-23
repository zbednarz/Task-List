import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MyBoxBottomNavigation = styled(Box)(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: "#000",
  position: "fixed",
  bottom: "0",
  textAlign: "center",
  paddingBottom: theme.spacing(6),
  width: "100%",
}));

export const MyMenuItem = styled(MenuItem)(() => ({
  backgroundColor: "#000",
}));

export const MyLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  margin: theme.spacing(1),
  fontSize: "20px",
}));

export const MyReturnLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  margin: theme.spacing(1),
  fontSize: "14px",
}));
