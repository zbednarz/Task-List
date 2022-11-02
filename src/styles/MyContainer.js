import Container from "@mui/material/Container";
import styled from "@emotion/styled";

export const MyContainer = styled(Container)(({ theme }) => ({
  margin: theme.spacing(1),
  background: theme.palette.common.white,
  color: theme.palette.common.black,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "center",
  transition: "all 0.5s ease",
  borderRadius: "10px",

  [theme.breakpoints.up("xs")]: {
    fontSize: "13px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "26px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "26px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "28px",
  },
}));
