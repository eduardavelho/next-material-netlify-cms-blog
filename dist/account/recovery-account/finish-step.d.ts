/// <reference types="react" />
export interface FinishStepProps {
    finishStepTitleText: string;
    finishButtonLabel: string;
    FinishStepInfoText: () => JSX.Element;
    onClickFinishButton: () => void;
}
export declare function FinishStep({ finishButtonLabel, finishStepTitleText, FinishStepInfoText, onClickFinishButton, }: FinishStepProps): JSX.Element;
