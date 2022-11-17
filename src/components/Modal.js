import * as React from "react";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { MyDehazeIcon } from "../styles/MyIcons";
import { MyCloseIcon } from "../styles/MyIcons";
import MyBox from "../styles/MyModal";

export default function TransitionsModal() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <MyCloseIcon />
      </Button>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 0,
        }}
      >
        <MyBox>
          <Button onClick={handleClose}>
            <MyDehazeIcon />
          </Button>
        </MyBox>
      </Modal>
    </div>
  );
}
