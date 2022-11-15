import styled from "@emotion/styled";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

export const MySelect = styled(Select)(({ theme }) => ({
  height: "50px",
  background: theme.palette.common.white,
  margin: theme.spacing(0.625),
  borderRadius: "15px",
  fontSize: "24px",

  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
  [theme.breakpoints.up("md")]: {
    width: "20%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20%",
  },
}));

export default MySelect;

export const MyBox = styled(Box)(({ theme }) => ({
  "& .MuiTextField-root": { width: "10ch" },
  "& fieldset": { border: "none" },
}));

export const MyBoxControl = styled(Box)(({ theme }) => ({
  display: "flex", 
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
}));