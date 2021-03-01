import React, { ReactNode } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { FormInput } from "../types";

export interface VerifyCodeStepProps {
  verifyCodeInfoText: ReactNode;
  onClickResendCode: () => void;
  onSubmit: () => void;
  resendCodeLinkLabel: string;
  onSubmitButtonLabel: string;
  loading: boolean;
  form: {
    code: FormInput<string>;
  };
}

export function VerifyCodeStep({
  verifyCodeInfoText,
  onClickResendCode,
  resendCodeLinkLabel,
  onSubmitButtonLabel,
  onSubmit,
  loading,
  form,
}: VerifyCodeStepProps) {
  return (
    <>
      <DialogContent>
        <Box marginBottom={1}>
          <Typography>
            {verifyCodeInfoText}
            <Link onClick={() => loading === false && onClickResendCode()}>
              {resendCodeLinkLabel}
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
      </DialogContent>
    </>
  );
}
