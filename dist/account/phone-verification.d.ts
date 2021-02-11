import { ReactNode } from "react";
import { FormInput } from "./types";
export interface PhoneVerificationForm {
    confirmationCode: FormInput<string>;
}
export interface PhoneVerificationProps {
    finishButtonLabel: string;
    resendCodeLinkLabel: string;
    submitButtonLabel: string;
    confirmationCodeMask: string;
    onSubmit: () => void;
    onClickResendCode: () => void;
    recoveryAccountInfoText: ReactNode;
    form: PhoneVerificationForm;
    loading: boolean;
}
export declare function PhoneVerification({ loading, confirmationCodeMask, submitButtonLabel, resendCodeLinkLabel, onClickResendCode, onSubmit, recoveryAccountInfoText, form, }: PhoneVerificationProps): JSX.Element;
