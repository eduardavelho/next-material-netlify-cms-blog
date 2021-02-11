import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormInput } from "../types";

export interface VerifyCodeStepProps {
  loading: boolean;
  onSubmit: () => void;
  onResendCode: () => void;
  resendCodeButtonLabel: string;
  onSubmitButtonLabel: string;
  VerifyCodeStepInfoText: () => JSX.Element;
  form: {
    code: FormInput<string>;
  };
}

export function VerifyCodeStep({
  loading,
  onResendCode,
  VerifyCodeStepInfoText,
  resendCodeButtonLabel,
  form,
  onSubmit,
  onSubmitButtonLabel,
}: VerifyCodeStepProps) {
  return (
    <>
      <Box marginBottom={1}>
        <Typography>
          <VerifyCodeStepInfoText />
          <Link
            onClick={() => {
              onResendCode();
            }}
          >
            {resendCodeButtonLabel}
          </Link>
        </Typography>
      </Box>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <Box marginBottom={1}>
          <TextField
            label={form.code.label}
            variant="outlined"
            fullWidth
            value={form.code.value}
            disabled={loading}
            helperText={form.code.helperText}
            onFocus={form.code.onFocus}
            onBlur={form.code.onBlur}
            error={form.code.error}
            onChange={(event) => form.code.onChange(event.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress /> : onSubmitButtonLabel}
        </Button>
      </form>
    </>
  );
}
