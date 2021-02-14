import { ReactNode } from "react";
export interface AlertDialogProps {
    title: string;
    description: ReactNode;
    confirmButtonLabel: string;
    rejectButtonLabel: string;
    open: boolean;
    onRequestClose: () => void;
    onAnswer: (answer: boolean) => void;
}
export declare function AlertDialog({ title, description, confirmButtonLabel, rejectButtonLabel, onRequestClose, open, onAnswer, }: AlertDialogProps): JSX.Element;
