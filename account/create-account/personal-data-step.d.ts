/// <reference types="react" />
import { FormInput } from "../types";
export interface PersonalDataStepProps {
    onSubmit: () => void;
    loading: boolean;
    phoneNumberMask: string;
    submitButtonLabel: string;
    form: {
        name: FormInput<string>;
        surname: FormInput<string>;
        email: FormInput<string>;
        phoneNumber: FormInput<string>;
    };
}
export declare function PersonalDataStep({ phoneNumberMask, submitButtonLabel, onSubmit, form, loading, }: PersonalDataStepProps): JSX.Element;
