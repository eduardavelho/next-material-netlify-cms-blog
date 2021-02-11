import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export interface FinishStepProps {
  finishStepTitleText: string;
  finishButtonLabel: string;
  FinishStepInfoText: () => JSX.Element;
  onClickFinishButton: () => void;
}

export function FinishStep({
  finishStepTitleText,
  FinishStepInfoText,
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
        <Typography>
          <FinishStepInfoText />
        </Typography>
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
