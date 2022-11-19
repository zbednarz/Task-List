import styled from "@emotion/styled";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

export const MySelect = styled(Select)(({ theme }) => ({
  height: "40px",
  background: theme.palette.common.white,
  margin: theme.spacing(0.5),
  borderRadius: "15px",
  fontSize: "24px",
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    width: "90%",
    transform: "translate(5%, 0%)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    transform: "translate(50%, 0%)",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
    transform: "translate(50%, 0%)",
  },
  [theme.breakpoints.up("lg")]: {
    width: "30%",
    transform: "translate(120%, 0%)",
  },
}));

export default MySelect;

export const MyBox = styled(Box)(() => ({
  "& .MuiTextField-root": { width: "10ch" },
  "& fieldset": { border: "none" },
}));

export const MyBoxControl = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
}));
