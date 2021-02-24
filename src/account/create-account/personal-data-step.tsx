import React from "react";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormInput } from "../types";

export interface PersonalDataStepProps {
  onSubmit: () => void;
  loading: boolean;
  phoneNumberMask: string;
  submitButtonLabel: string;
  form: {
    name: FormInput<string>;
    surname: FormInput<string>;
    email: FormInput<string>;
    phoneNumber: FormInput<string>;
  };
}

export function PersonalDataStep({
  phoneNumberMask,
  submitButtonLabel,
  onSubmit,
  form,
  loading,
}: PersonalDataStepProps) {
  return (
    <form
      style={{ margin: "auto" }}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            label={form.name.label}
            variant="outlined"
            value={form.name.value}
            disabled={loading}
            error={form.name.error}
            helperText={form.name.helperText}
            onFocus={form.name.onFocus}
            onBlur={form.name.onBlur}
            onChange={(event) => form.name.onChange(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            fullWidth
            label={form.surname.label}
            variant="outlined"
            value={form.surname.value}
            disabled={loading}
            error={form.surname.error}
            helperText={form.surname.helperText}
            onFocus={form.surname.onFocus}
            onBlur={form.surname.onBlur}
            onChange={(event) => form.surname.onChange(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            fullWidth
            label={form.email.label}
            variant="outlined"
            value={form.email.value}
            disabled={loading}
            error={form.email.error}
            helperText={form.email.helperText}
            onFocus={form.email.onFocus}
            onBlur={form.email.onBlur}
            onChange={(event) => form.email.onChange(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={5}>
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
                fullWidth
                label={form.phoneNumber.label}
                variant="outlined"
                disabled={loading}
                error={form.phoneNumber.error}
                helperText={form.phoneNumber.helperText}
              />
            )}
          </InputMask>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress /> : submitButtonLabel}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
