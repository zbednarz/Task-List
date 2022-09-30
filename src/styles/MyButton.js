import Button  from "@mui/material/Button";
import styled from "@emotion/styled";


export const CompleteButton = styled(Button)(({theme}) => ({
  margin: theme.spacing(0.625),
  background: "linear-gradient(45deg, #00c853, #b9f6ca)",
  color: theme.palette.common.white,
  ":hover": {
    color: theme.palette.success.light,
    backgroundColor: theme.palette.common.white,
    background: "linear-gradient(45deg, white, white)",
  },
}));

export const DeleteButton = styled(Button)(({theme}) => ({
  margin: theme.spacing(0.625),
  background: "linear-gradient(45deg, #dd2c00, #FF9e80)",
  color: theme.palette.common.white,
  ":hover": {
    color: theme.palette.error.main,
    background: "linear-gradient(45deg, white, white)",
  },
}));

export const NewTask = styled(Button)(({theme}) => ({
  color: theme.palette.secondary.main,
  fontSize: "25px",
  borderRadius: "15px",
  textTransform: "none",
  backgroundColor: theme.palette.common.white,
  ":hover": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.info.dark
  },
}));

