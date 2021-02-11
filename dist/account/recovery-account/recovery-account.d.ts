/// <reference types="react" />
import { EmailCodeStepProps } from "./email-code-step";
import { VerifyCodeStepProps } from "./verify-code-step";
import { UpdatePhoneStepProps } from "./update-phone-step";
import { PhoneVerificationStepProps } from "./phone-verification-step";
import { FinishStepProps } from "./finish-step";
declare const steps: {
    "email-code": number;
    "verify-code": number;
    "update-phone": number;
    "phone-verification": number;
    "finish-step": number;
};
export declare type CreateAccountViewStep = keyof typeof steps;
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
export declare function RecoveryAccount({ step, recoveryAccountTitleText, RecoveryAccountInfoText, emailCodeStepLabel, verifyCodeStepLabel, updatePhoneStepLabel, phoneVerificationStepLabel, finishStepLabel, emailCodeStepProps, verifyCodeStepProps, updatePhoneStepProps, phoneVerificationStepProps, finishStepProps, }: RecoveryAccountProps): JSX.Element;
export {};
