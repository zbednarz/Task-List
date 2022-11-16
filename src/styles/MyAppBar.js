import AppBar from "@mui/material/AppBar";
import styled from "@emotion/styled";

export const MyAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: theme.palette.common.white,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));
