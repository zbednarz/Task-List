import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";


const MyInput = styled(TextField)(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: "1rem",
  fontSize: "3rem",
  
 
  [theme.breakpoints.down("sx")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "10%",
  },
  [theme.breakpoints.up("md")]: {
    width: "20%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "10%",
    
  },


}));


export default MyInput;
