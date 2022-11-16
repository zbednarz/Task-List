import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const Holder = styled(Box)(({ theme }) => ({
  maxWidth: "83%",
  minWidth: "150px",
  background: theme.palette.warning.main,
  borderRadius: theme.spacing(1.25),
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(-50%, 0%)",
  position: "relative",
  top: "25px",
  left: "50%",
}));

export default Holder;
