import React, { ReactNode } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export interface AlertDialogProps {
  title: string;
  description: ReactNode;
  confirmButtonLabel: string;
  rejectButtonLabel: string;
  open: boolean;
  onRequestClose: () => void;
  onAnswer: (answer: boolean) => void;
}

export function AlertDialog({
  title,
  description,
  confirmButtonLabel,
  rejectButtonLabel,
  onRequestClose,
  open,
  onAnswer,
}: AlertDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onRequestClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onAnswer(true)} color="primary">
          {confirmButtonLabel}
        </Button>
        <Button onClick={() => onAnswer(false)} color="primary" autoFocus>
          {rejectButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
