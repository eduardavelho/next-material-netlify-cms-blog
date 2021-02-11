import React, { ReactNode } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormInput } from "../types";

export interface EmailCodeStepProps {
  loading: boolean;
  emailCodeTitleText: ReactNode;
  submitButtonLabel: string;
  onSubmit: () => void;
  form: {
    email: FormInput<string>;
  };
}

export function EmailCodeStep({
  loading,
  emailCodeTitleText,
  submitButtonLabel,
  onSubmit,
  form,
}: EmailCodeStepProps) {
  return (
    <>
      <Box marginBottom={1}>
        <Typography>{emailCodeTitleText}</Typography>
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
            label={form.email.label}
            variant="outlined"
            fullWidth
            value={form.email.value}
            disabled={loading}
            helperText={form.email.helperText}
            onFocus={form.email.onFocus}
            onBlur={form.email.onBlur}
            error={form.email.error}
            onChange={(event) => form.email.onChange(event.target.value)}
          />
        </Box>
        <Button
          disabled={loading}
          variant="contained"
          color="primary"
          type="submit"
        >
          {loading ? <CircularProgress /> : submitButtonLabel}
        </Button>
      </form>
    </>
  );
}
