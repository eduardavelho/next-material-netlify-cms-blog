/// <reference types="react" />
import { LoginProps } from "./login";
import { CreateAccountProps } from "./create-account";
import { RecoveryAccountProps } from "./recovery-account";
export declare type AccountView = undefined | "login" | "recovery-account" | "create-account";
export interface AccountProps {
    view: AccountView;
    setView: (view: AccountView) => void;
    backButtonVisible: boolean;
    onBackButtonClick: () => void;
    loginProps: LoginProps;
    createAccountProps: CreateAccountProps;
    recoveryAccountProps: RecoveryAccountProps;
}
export declare function Account(props: AccountProps): JSX.Element;
