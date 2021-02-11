import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Login, LoginProps } from "./login";
import { CreateAccount, CreateAccountProps } from "./create-account";
import { RecoveryAccount, RecoveryAccountProps } from "./recovery-account";

export type AccountView =
  | undefined
  | "login"
  | "recovery-account"
  | "create-account";

export interface AccountProps {
  view: AccountView;
  setView: (view: AccountView) => void;
  backButtonVisible: boolean;
  setBackButtonVisible: (visible: boolean) => void;
  backButtonView: AccountView;
  setBackButtonView: (view: AccountView) => void;
  loginProps: LoginProps;
  createAccountProps: CreateAccountProps;
  recoveryAccountProps: RecoveryAccountProps;
}

function SwitchView({
  view,
  loginProps,
  createAccountProps,
  recoveryAccountProps,
}: AccountProps) {
  switch (view) {
    case "login":
      return <Login {...loginProps} />;
    case "create-account":
      return <CreateAccount {...createAccountProps} />;
    case "recovery-account":
      return <RecoveryAccount {...recoveryAccountProps} />;
    default:
      return null;
  }
}

export function Account(props: AccountProps) {
  const { backButtonVisible, backButtonView, view, setView } = props;
  return (
    <Dialog
      open={view !== undefined}
      onClose={() => setView(undefined)}
      scroll="body"
    >
      {backButtonVisible && (
        <DialogContent>
          <IconButton
            onClick={() => setView(backButtonView)}
            edge="start"
            color="inherit"
            aria-label="Voltar"
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </DialogContent>
      )}
      <SwitchView {...props} />
    </Dialog>
  );
}
