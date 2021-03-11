import { ReactNode } from "react";
export interface FinishStepProps {
    finishStepTitleText: ReactNode;
    finishButtonLabel: string;
    finishStepInfoText: ReactNode;
    onClickFinishButton: () => void;
}
export declare function FinishStep({ finishStepTitleText, finishStepInfoText, finishButtonLabel, onClickFinishButton, }: FinishStepProps): JSX.Element;
