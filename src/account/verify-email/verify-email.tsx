import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { EmailCodeStep, EmailCodeStepProps } from "./email-code-step";
import { VerifyCodeStep, VerifyCodeStepProps } from "./verify-code-step";

export type CreateAccountViewStep = "email-code" | "verify-code";

export interface VerifyEmailProps {
  step: CreateAccountViewStep;
  open: boolean;
  onClose: () => void;
  verifyEmailTitleText: string;
  emailCodeStepProps: EmailCodeStepProps;
  verifyCodeStepProps: VerifyCodeStepProps;
}

export function VerifyEmail({
  step,
  open,
  onClose,
  verifyEmailTitleText,
  emailCodeStepProps,
  verifyCodeStepProps,
}: VerifyEmailProps) {
  return (
    <Dialog open={open} onClose={() => onClose()} scroll="body">
      <DialogTitle style={{ textAlign: "center" }}>
        {verifyEmailTitleText}
      </DialogTitle>
      {step === "email-code" && <EmailCodeStep {...emailCodeStepProps} />}
      {step === "verify-code" && <VerifyCodeStep {...verifyCodeStepProps} />}
    </Dialog>
  );
}
