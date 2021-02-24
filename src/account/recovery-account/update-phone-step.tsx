import React, { ReactNode } from "react";
import InputMask from "react-input-mask";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormInput } from "../types";

export interface UpdatePhoneStepProps {
  loading: boolean;
  updatePhoneStepInfoText: ReactNode;
  onSubmit: () => void;
  phoneNumberMask: string;
  submitButtonLabel: string;
  form: {
    phoneNumber: FormInput<string>;
  };
}

export function UpdatePhoneStep({
  loading,
  form,
  phoneNumberMask,
  onSubmit,
  submitButtonLabel,
  updatePhoneStepInfoText,
}: UpdatePhoneStepProps) {
  return (
    <>
      <Box marginBottom={1}>
        <Typography>{updatePhoneStepInfoText}</Typography>
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
                disabled={loading}
                variant="outlined"
                fullWidth
                error={form.phoneNumber.error}
                helperText={form.phoneNumber.helperText}
              />
            )}
          </InputMask>
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress /> : submitButtonLabel}
        </Button>
      </form>
    </>
  );
}
