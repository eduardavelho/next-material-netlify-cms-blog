import React, { ReactNode } from "react";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormInput } from "../types";

export interface LoginStepProps {
  onSubmit: () => void;
  loading: boolean;
  submitButtonLabel: string;
  recoveryAccountTitleText: ReactNode;
  recoveryAccountLinkLabel: string;
  createAccountButtonLabel: string;
  phoneNumberMask: string;
  recoveryAccountOnClick: () => void;
  createAccountOnClick: () => void;
  form: {
    phoneNumber: FormInput<string>;
  };
}

export function LoginStep({
  form,
  onSubmit,
  loading,
  submitButtonLabel,
  recoveryAccountTitleText,
  recoveryAccountLinkLabel,
  phoneNumberMask,
  recoveryAccountOnClick,
  createAccountButtonLabel,
  createAccountOnClick,
}: LoginStepProps) {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box marginBottom={1}>
          <InputMask
            mask={phoneNumberMask}
            value={form.phoneNumber.value}
            disabled={loading}
            onFocus={form.phoneNumber.onFocus}
            onBlur={form.phoneNumber.onBlur}
            onChange={(event) => form.phoneNumber.onChange(event.target.value)}
          >
            {() => (
              <TextField
                label={form.phoneNumber.label}
                variant="outlined"
                fullWidth
                disabled={loading}
                error={form.phoneNumber.error}
                helperText={form.phoneNumber.helperText}
              />
            )}
          </InputMask>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress /> : submitButtonLabel}
        </Button>
      </form>
      <Box marginY={2}>
        <Typography>
          {recoveryAccountTitleText}
          <Link
            onClick={() => loading === false && recoveryAccountOnClick()}
            style={{ cursor: "pointer" }}
          >
            {recoveryAccountLinkLabel}
          </Link>
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => loading === false && createAccountOnClick()}
      >
        {createAccountButtonLabel}
      </Button>
    </>
  );
}
