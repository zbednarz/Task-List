import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const MyNavigationBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  flexGrow:"1",
}));

export const MyBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    flexGrow:"1",
  }));


export const MyNavigationTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  fontFamily: "monospace",
  fontWeight: "700",
  textDecoration: "none",
  marginRight: theme.spacing(2),
  flexWrap: "nowrap",
  flexGrow: "1",
  letterSpacing: "0.3rem",
}));


export const MyNavigationButton = styled(Button)(({ theme }) => ({
   color:theme.palette.common.black,
    display:"flex",
    textDecoration:"none",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }));

  
  
 