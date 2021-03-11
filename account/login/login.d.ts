import { ReactNode } from "react";
import { LoginStepProps } from "./login-step";
import { PhoneVerificationStepProps } from "./phone-verification-step";
export declare type CreateAccountViewStep = "login" | "phone-verification";
export interface LoginProps {
    loginTitleText: ReactNode;
    step: CreateAccountViewStep;
    loginStepProps: LoginStepProps;
    phoneVerificationStepProps: PhoneVerificationStepProps;
}
export declare function Login({ step, loginTitleText, loginStepProps, phoneVerificationStepProps, }: LoginProps): JSX.Element;
