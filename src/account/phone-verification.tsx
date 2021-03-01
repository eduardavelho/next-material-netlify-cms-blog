import React, { ReactNode } from "react";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormInput } from "./types";

export interface PhoneVerificationForm {
  code: FormInput<string>;
}

export interface PhoneVerificationProps {
  finishButtonLabel: string;
  resendCodeLinkLabel: string;
  submitButtonLabel: string;
  codeMask: string;
  onSubmit: () => void;
  onClickResendCode: () => void;
  recoveryAccountInfoText: ReactNode;
  form: PhoneVerificationForm;
  loading: boolean;
}

export function PhoneVerification({
  loading,
  codeMask,
  submitButtonLabel,
  resendCodeLinkLabel,
  onClickResendCode,
  onSubmit,
  recoveryAccountInfoText,
  form,
}: PhoneVerificationProps) {
  return (
    <>
      <Box marginBottom={1}>
        <Typography>
          {recoveryAccountInfoText}
          <Link
            style={{ cursor: "pointer" }}
            onClick={() => loading === false && onClickResendCode()}
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
            mask={codeMask}
            value={form.code.value}
            disabled={loading}
            onBlur={form.code.onBlur}
            onFocus={form.code.onFocus}
            onChange={(event) => form.code.onChange(event.target.value)}
          >
            {() => (
              <TextField
                fullWidth
                label={form.code.label}
                disabled={loading}
                variant="outlined"
                error={form.code.error}
                helperText={form.code.helperText}
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
