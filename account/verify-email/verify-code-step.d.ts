import { ReactNode } from "react";
import { FormInput } from "../types";
export interface VerifyCodeStepProps {
    verifyCodeInfoText: ReactNode;
    onClickResendCode: () => void;
    onSubmit: () => void;
    resendCodeLinkLabel: string;
    onSubmitButtonLabel: string;
    loading: boolean;
    form: {
        code: FormInput<string>;
    };
}
export declare function VerifyCodeStep({ verifyCodeInfoText, onClickResendCode, resendCodeLinkLabel, onSubmitButtonLabel, onSubmit, loading, form, }: VerifyCodeStepProps): JSX.Element;
