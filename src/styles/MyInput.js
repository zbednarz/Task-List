import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

const MyInput = styled(TextField)(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: "15px",
  fontSize: "60px",
}));

export default MyInput;
