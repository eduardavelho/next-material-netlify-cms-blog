import { ReactNode } from "react";
export interface EmailCodeStepProps {
    emailCodeInfoText: ReactNode;
    onClickCloseButton: () => void;
    onSubmit: () => void;
    closeButtonLabel: string;
    onSubmitButtonLabel: string;
    loading: boolean;
}
export declare function EmailCodeStep({ emailCodeInfoText, onClickCloseButton, onSubmit, closeButtonLabel, onSubmitButtonLabel, loading, }: EmailCodeStepProps): JSX.Element;
