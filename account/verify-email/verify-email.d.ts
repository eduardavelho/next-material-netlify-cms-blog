import { ReactNode } from "react";
import { EmailCodeStepProps } from "./email-code-step";
import { VerifyCodeStepProps } from "./verify-code-step";
export declare type CreateAccountViewStep = "email-code" | "verify-code";
export interface VerifyEmailProps {
    step: CreateAccountViewStep;
    open: boolean;
    onClose: () => void;
    verifyEmailTitleText: ReactNode;
    emailCodeStepProps: EmailCodeStepProps;
    verifyCodeStepProps: VerifyCodeStepProps;
}
export declare function VerifyEmail({ step, open, onClose, verifyEmailTitleText, emailCodeStepProps, verifyCodeStepProps, }: VerifyEmailProps): JSX.Element;
