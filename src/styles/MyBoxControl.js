import Box from "@mui/material/Box";
import styled from "@emotion/styled";

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
