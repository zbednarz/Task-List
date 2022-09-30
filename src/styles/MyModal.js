import styled from "@emotion/styled";
import Box  from "@mui/material/Box";

const MyBox = styled(Box)(({theme})=>({
  position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
       height: "100%",
      background: theme.palette.common.black,
      p: 4,
}));

export default MyBox;
