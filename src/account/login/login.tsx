import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import LoginStep, { LoginStepProps } from "./login-step";
import {
  PhoneVerificationStep,
  PhoneVerificationStepProps,
} from "./phone-verification-step";

export type CreateAccountViewStep = "login" | "phone-verification";

export interface LoginProps {
  loginTitleLabel: string;
  step: CreateAccountViewStep;
  loginStepProps: LoginStepProps;
  phoneVerificationStepProps: PhoneVerificationStepProps;
}

export function Login({
  step,
  loginTitleLabel,
  loginStepProps,
  phoneVerificationStepProps,
}: LoginProps) {
  return (
    <>
      <DialogTitle style={{ textAlign: "center" }}>
        {loginTitleLabel}
      </DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {step === "login" ? (
          <LoginStep {...loginStepProps} />
        ) : (
          <PhoneVerificationStep {...phoneVerificationStepProps} />
        )}
      </DialogContent>
    </>
  );
}
