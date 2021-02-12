import { ReactNode } from "react";
import { FormInput } from "../types";
export interface VerifyCodeStepProps {
    loading: boolean;
    onSubmit: () => void;
    onResendCode: () => void;
    resendCodeButtonLabel: string;
    onSubmitButtonLabel: string;
    verifyCodeStepInfoText: ReactNode;
    form: {
        code: FormInput<string>;
    };
}
export declare function VerifyCodeStep({ loading, onResendCode, verifyCodeStepInfoText, resendCodeButtonLabel, form, onSubmit, onSubmitButtonLabel, }: VerifyCodeStepProps): JSX.Element;
