/// <reference types="react" />
export interface EmailCodeStepProps {
    EmailCodeInfoText: () => JSX.Element;
    onClickCloseButton: () => void;
    onSubmit: () => void;
    closeButtonLabel: string;
    onSubmitButtonLabel: string;
    loading: boolean;
}
export declare function EmailCodeStep({ EmailCodeInfoText, onClickCloseButton, onSubmit, closeButtonLabel, onSubmitButtonLabel, loading, }: EmailCodeStepProps): JSX.Element;
