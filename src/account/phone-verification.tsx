import React from "react";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormInput } from "./types";

export interface PhoneVerificationForm {
  confirmationCode: FormInput<string>;
}

export interface PhoneVerificationProps {
  finishButtonLabel: string;
  resendCodeLinkLabel: string;
  submitButtonLabel: string;
  confirmationCodeMask: string;
  onSubmit: () => void;
  onClickResendCode: () => void;
  RecoveryAccountInfoText: () => JSX.Element;
  form: PhoneVerificationForm;
  loading: boolean;
}

export function PhoneVerification({
  loading,
  confirmationCodeMask,
  submitButtonLabel,
  resendCodeLinkLabel,
  onClickResendCode,
  onSubmit,
  RecoveryAccountInfoText,
  form,
}: PhoneVerificationProps) {
  return (
    <>
      <Box marginBottom={1}>
        <Typography>
          <RecoveryAccountInfoText />
          <Link
            style={{ cursor: "pointer" }}
            onClick={() => onClickResendCode()}
          >
            {resendCodeLinkLabel}
          </Link>
        </Typography>
      </Box>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <Box marginBottom={1}>
          <InputMask
            mask={confirmationCodeMask}
            value={form.confirmationCode.value}
            disabled={loading}
            onBlur={form.confirmationCode.onBlur}
            onFocus={form.confirmationCode.onFocus}
            onChange={(event) =>
              form.confirmationCode.onChange(event.target.value)
            }
          >
            {() => (
              <TextField
                fullWidth
                label={form.confirmationCode.label}
                variant="outlined"
                error={form.confirmationCode.error}
                helperText={form.confirmationCode.helperText}
              />
            )}
          </InputMask>
        </Box>
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          {loading ? <CircularProgress /> : submitButtonLabel}
        </Button>
      </form>
    </>
  );
}
