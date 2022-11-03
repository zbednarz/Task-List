import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

export const MyStack = styled(Stack)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },

  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("xl")]: {
    flexDirection: "row",
  },
}));
