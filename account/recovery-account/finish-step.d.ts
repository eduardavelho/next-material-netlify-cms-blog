import { ReactNode } from "react";
export interface FinishStepProps {
    finishStepTitleText: ReactNode;
    finishButtonLabel: string;
    finishStepInfoText: ReactNode;
    onClickFinishButton: () => void;
}
export declare function FinishStep({ finishButtonLabel, finishStepTitleText, finishStepInfoText, onClickFinishButton, }: FinishStepProps): JSX.Element;
