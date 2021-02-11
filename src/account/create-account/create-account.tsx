import React, { ReactNode } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { PersonalDataStep, PersonalDataStepProps } from "./personal-data-step";
import {
  PhoneVerificationStep,
  PhoneVerificationStepProps,
} from "./phone-verification-step";
import { FinishStep, FinishStepProps } from "./finish-step";

const steps = {
  "personal-data": 0,
  "phone-verification": 1,
  "finish-step": 2,
};

export type CreateAccountStep = keyof typeof steps;

export interface CreateAccountProps {
  personalDataStepLabel: string;
  phoneVerificationStepLabel: string;
  finishStepLabel: string;
  createAccountTitleText: ReactNode;
  onRequestGoToPersonalDataStep: () => void;
  createAccountInfoText: ReactNode;
  step: CreateAccountStep;
  personalDataStepProps: PersonalDataStepProps;
  phoneVerificationStepProps: PhoneVerificationStepProps;
  finishStepProps: FinishStepProps;
}

function SwitchSteps({
  step,
  personalDataStepProps,
  phoneVerificationStepProps,
  finishStepProps,
}: CreateAccountProps) {
  switch (step) {
    case "personal-data":
      return <PersonalDataStep {...personalDataStepProps} />;
    case "phone-verification":
      return <PhoneVerificationStep {...phoneVerificationStepProps} />;
    case "finish-step":
      return <FinishStep {...finishStepProps} />;
  }
}

export function CreateAccount(props: CreateAccountProps) {
  const {
    onRequestGoToPersonalDataStep,
    personalDataStepLabel,
    phoneVerificationStepLabel,
    finishStepLabel,
    createAccountTitleText,
    createAccountInfoText,
    step,
  } = props;

  return (
    <>
      {step !== "finish-step" && (
        <DialogTitle style={{ textAlign: "center" }}>
          {createAccountTitleText}
        </DialogTitle>
      )}
      <DialogContent>
        {step !== "finish-step" && (
          <>
            <Box marginBottom={2} marginX={2} textAlign="center">
              <Typography>{createAccountInfoText}</Typography>
            </Box>
            <Stepper
              activeStep={steps[step]}
              alternativeLabel
              style={{
                paddingRight: 0,
                paddingLeft: 0,
              }}
            >
              <Step>
                <StepButton onClick={() => onRequestGoToPersonalDataStep()}>
                  {personalDataStepLabel}
                </StepButton>
              </Step>
              <Step>
                <StepLabel>{phoneVerificationStepLabel}</StepLabel>
              </Step>
              <Step>
                <StepLabel>{finishStepLabel}</StepLabel>
              </Step>
            </Stepper>
          </>
        )}
        <Box>
          <SwitchSteps {...props} />
        </Box>
      </DialogContent>
    </>
  );
}
