import styled from "@emotion/styled";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

export const MySelect = styled(Select)(({ theme }) => ({
  minWidth: "180px",
  height: "56px",
  background: theme.palette.common.white,
  margin: theme.spacing(0.625),
  borderRadius: "15px",
  fontSize: "24px",

}));

export default MySelect;

export const MyBox = styled(Box)(({ theme }) => ({
  "& .MuiTextField-root": { m: 1, width: "10ch" },
  "& fieldset": { border: "none" },
}));
