import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const MyBoxControl = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
}));

export const MyReturnBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(1),
}));
