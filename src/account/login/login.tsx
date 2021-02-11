import React, { ReactNode } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { LoginStep, LoginStepProps } from "./login-step";
import {
  PhoneVerificationStep,
  PhoneVerificationStepProps,
} from "./phone-verification-step";

export type CreateAccountViewStep = "login" | "phone-verification";

export interface LoginProps {
  loginTitleText: ReactNode;
  step: CreateAccountViewStep;
  loginStepProps: LoginStepProps;
  phoneVerificationStepProps: PhoneVerificationStepProps;
}

export function Login({
  step,
  loginTitleText,
  loginStepProps,
  phoneVerificationStepProps,
}: LoginProps) {
  return (
    <>
      <DialogTitle style={{ textAlign: "center" }}>
        {loginTitleText}
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
