import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Typography } from "@mui/material";
interface prop {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
}
const Explaination = ({ open, setOpen, title, description }: prop) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      sx={{ backgroundColor: "#008170" }}
      BackdropProps={{
        style: { backgroundColor: "#232D3F" },
      }}
    >
      <DialogTitle sx={{ backgroundColor: "#008170" }}>{title}</DialogTitle>
      <DialogContent sx={{ backgroundColor: "#008170", maxWidth: "70vh" }}>
        {description}
      </DialogContent>

      <DialogActions sx={{ backgroundColor: "#008170" }}>
        <Button onClick={() => setOpen(false)} variant="contained">
          <Typography color={"info.main"}>Ok</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Explaination;
