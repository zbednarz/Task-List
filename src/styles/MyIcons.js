import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import styled from "@emotion/styled";


export const MyDehazeIcon = styled(DehazeIcon)(({theme}) => ({
    color: theme.palette.warning.main,
    fontSize: "56px",
    transform: "translate(40%, 0%)",
   
  }));

  export const MyCloseIcon = styled(CloseIcon)(({theme}) => ({
    color: theme.palette.warning.main,
    fontSize: "56px",
    
   
  }));