import { ReactNode } from "react";
import { PersonalDataStepProps } from "./personal-data-step";
import { PhoneVerificationStepProps } from "./phone-verification-step";
import { FinishStepProps } from "./finish-step";
declare const steps: {
    "personal-data": number;
    "phone-verification": number;
    "finish-step": number;
};
export declare type CreateAccountStep = keyof typeof steps;
export interface CreateAccountProps {
    personalDataStepLabel: string;
    phoneVerificationStepLabel: string;
    finishStepLabel: string;
    createAccountTitleText: ReactNode;
    onRequestGoToPersonalDataStep: () => void;
    createAccountInfoText: ReactNode;
    step: CreateAccountStep;
    personalDataStepProps: PersonalDataStepProps;
    phoneVerificationStepProps: PhoneVerificationStepProps;
    finishStepProps: FinishStepProps;
}
export declare function CreateAccount(props: CreateAccountProps): JSX.Element;
export {};
