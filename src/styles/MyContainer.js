import Container from "@mui/material/Container";
import styled from "@emotion/styled";

export const MyContainer = styled(Container)(({ theme }) => ({
    margin: "0.5rem",
    background: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: "1.5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "center",
    transition: "all 0.5s ease",
    borderRadius: "10px",
    

    [theme.breakpoints.up("xs")]: {
        
      },
      [theme.breakpoints.up("sx")]: {
        
      },
      [theme.breakpoints.up("sm")]: {
       
      
      },
}));
