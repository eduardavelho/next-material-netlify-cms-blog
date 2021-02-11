/// <reference types="react" />
import { FormInput } from "../types";
export interface VerifyCodeStepProps {
    VerifyCodeInfoText: () => JSX.Element;
    onClickResendCode: () => void;
    onSubmit: () => void;
    resendCodeLinkLabel: string;
    onSubmitButtonLabel: string;
    loading: boolean;
    form: {
        code: FormInput<string>;
    };
}
export declare function VerifyCodeStep({ VerifyCodeInfoText, onClickResendCode, resendCodeLinkLabel, onSubmitButtonLabel, onSubmit, loading, form, }: VerifyCodeStepProps): JSX.Element;
