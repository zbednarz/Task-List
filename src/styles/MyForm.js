import styled from "@emotion/styled";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

export const MySelect = styled(Select)(({ theme }) => ({
  minWidth: "180px",
  height: "36px",
}));

export default MySelect;

export const MyBox = styled(Box)(({ theme }) => ({
  "& .MuiTextField-root": { m: 1, width: "10ch" },
  "& fieldset": { border: "none" },
}));
