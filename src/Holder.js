import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Holder = styled(Box)(() => ({
    width: "1200px",
    background: "#fb8c00",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    transform: "translate(-50%, 0%)",
    position: "absolute",
    top: "10%",
    left: "50%",
  }));

  export default Holder;