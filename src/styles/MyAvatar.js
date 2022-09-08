import { Avatar } from "@mui/material";
import { styled } from "@mui/system";

const MyAvatar = styled(Avatar)(()=>({
               
}));

export const PositionAvatar = styled(MyAvatar)(()=>({
    position: "fixed",
    top: "10px",
    right: "5px",
    margin: "5px"
}));

export default MyAvatar;
