import { ReactNode } from "react";
import { FormInput } from "../types";
export interface LoginStepProps {
    onSubmit: () => void;
    loading: boolean;
    submitButtonLabel: string;
    recoveryAccountTitleText: ReactNode;
    recoveryAccountLinkLabel: string;
    createAccountButtonLabel: string;
    phoneNumberMask: string;
    recoveryAccountOnClick: () => void;
    createAccountOnClick: () => void;
    form: {
        phoneNumber: FormInput<string>;
    };
}
export declare function LoginStep({ form, onSubmit, loading, submitButtonLabel, recoveryAccountTitleText, recoveryAccountLinkLabel, phoneNumberMask, recoveryAccountOnClick, createAccountButtonLabel, createAccountOnClick, }: LoginStepProps): JSX.Element;
