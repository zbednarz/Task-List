import * as React from "react";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/styles";
import style from "../styles/MyModal";


export default function TransitionsModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={handleOpen}>
          <CloseIcon
           color="orange"
            style={{
              fontSize: "56",
            }}
          />
        </Button>
        <Modal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Button onClick={handleClose}>
                <DehazeIcon
                  color="orange"
                  style={{
                    fontSize: "56",
                    transform: "translate(-10%, -50%)",
                  }}
                />
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
