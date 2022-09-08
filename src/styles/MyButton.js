import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MyButton = styled(Button)(() => ({}));

export const CompleteButton = styled(MyButton)(() => ({
  margin: "5px",
  background: "linear-gradient(45deg, #00c853, #b9f6ca)",
  color: "white",
  ":hover": {
    color: "green",
    backgroundColor: "white",
    background: "linear-gradient(45deg, white, white)",
  },
}));

export const DeleteButton = styled(MyButton)(() => ({
  margin: "5px",
  background: "linear-gradient(45deg, #dd2c00, #FF9e80)",
  color: "white",
  ":hover": {
    color: "red",
    background: "linear-gradient(45deg, white, white)",
  },
}));

export const NewTask = styled(MyButton)(() => ({
  color: "secondary",
  fontSize: "25px",
  borderRadius: "15px",
  textTransform: "none",
  backgroundColor: "white",
  ":hover": {
    color: "white",
    backgroundColor: "darkblue",
  },
}));

export default MyButton;
