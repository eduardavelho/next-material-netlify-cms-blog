import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

export interface EmailCodeStepProps {
  EmailCodeInfoText: () => JSX.Element;
  onClickCloseButton: () => void;
  onSubmit: () => void;
  closeButtonLabel: string;
  onSubmitButtonLabel: string;
  loading: boolean;
}

export function EmailCodeStep({
  EmailCodeInfoText,
  onClickCloseButton,
  onSubmit,
  closeButtonLabel,
  onSubmitButtonLabel,
  loading,
}: EmailCodeStepProps) {
  return (
    <>
      <DialogContent>
        <Typography>
          <EmailCodeInfoText />
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onClickCloseButton()}
        >
          {closeButtonLabel}
        </Button>
        <Button
          variant="contained"
          color="primary"
          autoFocus
          disabled={loading}
          onClick={() => onSubmit()}
        >
          {loading ? <CircularProgress /> : onSubmitButtonLabel}
        </Button>
      </DialogActions>
    </>
  );
}
