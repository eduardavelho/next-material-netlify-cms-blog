/// <reference types="react" />
import { AlertProps } from "@material-ui/lab/Alert";
interface Content {
    message: AlertProps["children"];
    severity: AlertProps["severity"];
}
export interface SnackbarProps {
    content: Content;
    setContent: (content: Content) => void;
}
export declare function Snackbar({ content: { message, severity }, setContent, }: SnackbarProps): JSX.Element;
export {};
