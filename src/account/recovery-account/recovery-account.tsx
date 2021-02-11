import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { EmailCodeStep, EmailCodeStepProps } from "./email-code-step";
import { VerifyCodeStep, VerifyCodeStepProps } from "./verify-code-step";
import { UpdatePhoneStep, UpdatePhoneStepProps } from "./update-phone-step";
import {
  PhoneVerificationStep,
  PhoneVerificationStepProps,
} from "./phone-verification-step";
import { FinishStep, FinishStepProps } from "./finish-step";

const steps = {
  "email-code": 0,
  "verify-code": 1,
  "update-phone": 2,
  "phone-verification": 3,
  "finish-step": 4,
};

export type CreateAccountViewStep = keyof typeof steps;

export interface RecoveryAccountProps {
  step: CreateAccountViewStep;
  recoveryAccountTitleText: string;
  RecoveryAccountInfoText: () => JSX.Element;
  emailCodeStepLabel: string;
  verifyCodeStepLabel: string;
  updatePhoneStepLabel: string;
  phoneVerificationStepLabel: string;
  finishStepLabel: string;
  emailCodeStepProps: EmailCodeStepProps;
  verifyCodeStepProps: VerifyCodeStepProps;
  updatePhoneStepProps: UpdatePhoneStepProps;
  phoneVerificationStepProps: PhoneVerificationStepProps;
  finishStepProps: FinishStepProps;
}

export function RecoveryAccount({
  step,
  recoveryAccountTitleText,
  RecoveryAccountInfoText,
  emailCodeStepLabel,
  verifyCodeStepLabel,
  updatePhoneStepLabel,
  phoneVerificationStepLabel,
  finishStepLabel,
  emailCodeStepProps,
  verifyCodeStepProps,
  updatePhoneStepProps,
  phoneVerificationStepProps,
  finishStepProps,
}: RecoveryAccountProps) {
  return (
    <>
      <DialogTitle style={{ textAlign: "center" }}>
        {recoveryAccountTitleText}
      </DialogTitle>
      <DialogContent>
        <Box marginBottom={2} marginX={2} textAlign="center">
          <Typography>
            <RecoveryAccountInfoText />
          </Typography>
        </Box>
        <Stepper activeStep={steps[step]} orientation="vertical">
          <Step>
            <StepLabel>{emailCodeStepLabel}</StepLabel>
            <StepContent>
              <EmailCodeStep {...emailCodeStepProps} />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>V{verifyCodeStepLabel}</StepLabel>
            <StepContent>
              <VerifyCodeStep {...verifyCodeStepProps} />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{updatePhoneStepLabel}</StepLabel>
            <StepContent>
              <UpdatePhoneStep {...updatePhoneStepProps} />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{phoneVerificationStepLabel}</StepLabel>
            <StepContent>
              <PhoneVerificationStep {...phoneVerificationStepProps} />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{finishStepLabel}</StepLabel>
            <StepContent>
              <FinishStep {...finishStepProps} />
            </StepContent>
          </Step>
        </Stepper>
      </DialogContent>
    </>
  );
}
