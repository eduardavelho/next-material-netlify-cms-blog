/// <reference types="react" />
import { FormInput } from "../types";
export interface UpdatePhoneStepProps {
    loading: boolean;
    UpdatePhoneStepInfoText: () => JSX.Element;
    onSubmit: () => void;
    phoneNumberMask: string;
    submitButtonLabel: string;
    form: {
        phoneNumber: FormInput<string>;
    };
}
export declare function UpdatePhoneStep({ loading, form, phoneNumberMask, onSubmit, submitButtonLabel, UpdatePhoneStepInfoText, }: UpdatePhoneStepProps): JSX.Element;
