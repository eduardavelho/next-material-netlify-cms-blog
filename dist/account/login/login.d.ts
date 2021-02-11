/// <reference types="react" />
import { LoginStepProps } from "./login-step";
import { PhoneVerificationStepProps } from "./phone-verification-step";
export declare type CreateAccountViewStep = "login" | "phone-verification";
export interface LoginProps {
    loginTitleLabel: string;
    step: CreateAccountViewStep;
    loginStepProps: LoginStepProps;
    phoneVerificationStepProps: PhoneVerificationStepProps;
}
export declare function Login({ step, loginTitleLabel, loginStepProps, phoneVerificationStepProps, }: LoginProps): JSX.Element;
