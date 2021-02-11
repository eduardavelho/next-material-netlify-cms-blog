import { ReactNode } from "react";
import { FormInput } from "../types";
export interface EmailCodeStepProps {
    loading: boolean;
    emailCodeTitleText: ReactNode;
    submitButtonLabel: string;
    onSubmit: () => void;
    form: {
        email: FormInput<string>;
    };
}
export declare function EmailCodeStep({ loading, emailCodeTitleText, submitButtonLabel, onSubmit, form, }: EmailCodeStepProps): JSX.Element;
