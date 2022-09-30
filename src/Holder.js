import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const Holder = styled(Box)(({theme}) => ({
    width: theme.spacing(150),
    background: theme.palette.warning.main,
    borderRadius: theme.spacing(1.25),
    alignItems: "center",
    justifyContent: "center",
    transform: "translate(-50%, 0%)",
    position: "absolute",
    top: "10%",
    left: "50%",
  }));

  export default Holder;