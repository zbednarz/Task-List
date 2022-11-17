import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export const CompleteButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background: "linear-gradient(45deg, #00c853, #b9f6ca)",
  color: theme.palette.common.white,
  width: "90%",
  [theme.breakpoints.up("xs")]: {
    fontSize: "12px",
  },

  ":hover": {
    color: theme.palette.success.light,
    backgroundColor: theme.palette.common.white,
    background: "linear-gradient(45deg, white, white)",
  },
}));

export const DeleteButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background: "linear-gradient(45deg, #dd2c00, #FF9e80)",
  color: theme.palette.common.white,
  width: "90%",
  [theme.breakpoints.up("xs")]: {
    fontSize: "12px",
  },
  ":hover": {
    color: theme.palette.error.main,
    background: "linear-gradient(45deg, white, white)",
  },
}));


export const  MyLinkButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background: "linear-gradient(45deg, #0066cc, #33ccff)",
  color: theme.palette.common.white,
  width: "90%",
 
  
  [theme.breakpoints.up("xs")]: {
    fontSize: "12px",
    
  },
  ":hover": {
    color: theme.palette.error.main,
    background: "linear-gradient(45deg, white, white)",
    
  },
}));

export const NewTask = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "1.5rem",
  borderRadius: "15px",
  textTransform: "none",
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    margin: theme.spacing(0.625),
  },
  [theme.breakpoints.up("sm")]: {
    width: "35%",
  },
  [theme.breakpoints.up("md")]: {
    width: "25%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "20%",
  },

  ":hover": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.info.dark,
  },
}));
