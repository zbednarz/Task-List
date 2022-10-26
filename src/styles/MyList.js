import List from "@mui/material/List";
import styled from "@emotion/styled";

export const MyList = styled(List)(({ theme }) => ({
  textAlign: "start",
  display: "flex",
  flexDirection: "column",
  marginRight: "1rem",
 

  [theme.breakpoints.up("xs")]: {
    maxWidth: "100%",
    
  },
  [theme.breakpoints.up("sx")]: {
    width: "80%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "75%",
  },
  [theme.breakpoints.up("md")]: {
    width: "65%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
