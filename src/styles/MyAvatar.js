import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";


export const MyAvatar = styled(Avatar)(({theme})=>({
    position: "fixed",
    top: theme.spacing(1.25),
    right: theme.spacing(0.625),
    margin: theme.spacing(0.625),
               
}));

