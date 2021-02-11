/// <reference types="react" />
import { FormInput } from "../types";
export interface VerifyCodeStepProps {
    loading: boolean;
    onSubmit: () => void;
    onResendCode: () => void;
    resendCodeButtonLabel: string;
    onSubmitButtonLabel: string;
    VerifyCodeStepInfoText: () => JSX.Element;
    form: {
        code: FormInput<string>;
    };
}
export declare function VerifyCodeStep({ loading, onResendCode, VerifyCodeStepInfoText, resendCodeButtonLabel, form, onSubmit, onSubmitButtonLabel, }: VerifyCodeStepProps): JSX.Element;
