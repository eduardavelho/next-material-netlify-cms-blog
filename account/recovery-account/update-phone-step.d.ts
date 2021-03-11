import { ReactNode } from "react";
import { FormInput } from "../types";
export interface UpdatePhoneStepProps {
    loading: boolean;
    updatePhoneStepInfoText: ReactNode;
    onSubmit: () => void;
    phoneNumberMask: string;
    submitButtonLabel: string;
    form: {
        phoneNumber: FormInput<string>;
    };
}
export declare function UpdatePhoneStep({ loading, form, phoneNumberMask, onSubmit, submitButtonLabel, updatePhoneStepInfoText, }: UpdatePhoneStepProps): JSX.Element;
