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
  paddingBottom: "30px",
  width: "100%",
}));

export const MyMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: "#000",
}));

export const MyLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  margin: "8px",
}));
