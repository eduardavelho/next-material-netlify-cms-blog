import React, { ReactNode } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export interface FinishStepProps {
  finishStepTitleText: ReactNode;
  finishButtonLabel: string;
  finishStepInfoText: ReactNode;
  onClickFinishButton: () => void;
}

export function FinishStep({
  finishStepTitleText,
  finishStepInfoText,
  finishButtonLabel,
  onClickFinishButton,
}: FinishStepProps) {
  return (
    <>
      <Box marginBottom={3} textAlign="center">
        <Typography variant="h6">{finishStepTitleText}</Typography>
        <Box marginY={2}>
          <CheckCircleOutlineIcon
            style={{ width: "6em", height: "6em" }}
            color="primary"
          />
        </Box>
        <Typography>{finishStepInfoText}</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => onClickFinishButton()}
      >
        {finishButtonLabel}
      </Button>
    </>
  );
}
