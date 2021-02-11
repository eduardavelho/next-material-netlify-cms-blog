/// <reference types="react" />
import { FormInput } from "../types";
export interface LoginStepProps {
    onSubmit: () => void;
    loading: boolean;
    submitButtonLabel: string;
    recoveryAccountTitleLabel: string;
    recoveryAccountLinkLabel: string;
    createAccountButtonLabel: string;
    phoneNumberMask: string;
    recoveryAccountOnClick: () => void;
    createAccountOnClick: () => void;
    form: {
        phoneNumber: FormInput<string>;
    };
}
export default function LoginStep({ form, onSubmit, loading, submitButtonLabel, recoveryAccountTitleLabel, recoveryAccountLinkLabel, phoneNumberMask, recoveryAccountOnClick, createAccountButtonLabel, createAccountOnClick, }: LoginStepProps): JSX.Element;
