import { ReactNode } from "react";
import { FormInput } from "./types";
export interface PhoneVerificationForm {
    code: FormInput<string>;
}
export interface PhoneVerificationProps {
    finishButtonLabel: string;
    resendCodeLinkLabel: string;
    submitButtonLabel: string;
    codeMask: string;
    onSubmit: () => void;
    onClickResendCode: () => void;
    recoveryAccountInfoText: ReactNode;
    form: PhoneVerificationForm;
    loading: boolean;
}
export declare function PhoneVerification({ loading, codeMask, submitButtonLabel, resendCodeLinkLabel, onClickResendCode, onSubmit, recoveryAccountInfoText, form, }: PhoneVerificationProps): JSX.Element;
