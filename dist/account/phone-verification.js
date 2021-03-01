"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneVerification = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_input_mask_1 = tslib_1.__importDefault(require("react-input-mask"));
const TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
const Link_1 = tslib_1.__importDefault(require("@material-ui/core/Link"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
function PhoneVerification({ loading, codeMask, submitButtonLabel, resendCodeLinkLabel, onClickResendCode, onSubmit, recoveryAccountInfoText, form, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Box_1.default, { marginBottom: 1 },
            react_1.default.createElement(Typography_1.default, null,
                recoveryAccountInfoText,
                react_1.default.createElement(Link_1.default, { style: { cursor: "pointer" }, onClick: () => loading === false && onClickResendCode() }, resendCodeLinkLabel))),
        react_1.default.createElement("form", { onSubmit: (event) => {
                event.preventDefault();
                onSubmit();
            } },
            react_1.default.createElement(Box_1.default, { marginBottom: 1 },
                react_1.default.createElement(react_input_mask_1.default, { mask: codeMask, value: form.code.value, disabled: loading, onBlur: form.code.onBlur, onFocus: form.code.onFocus, onChange: (event) => form.code.onChange(event.target.value) }, () => (react_1.default.createElement(TextField_1.default, { fullWidth: true, label: form.code.label, disabled: loading, variant: "outlined", error: form.code.error, helperText: form.code.helperText })))),
            react_1.default.createElement(Button_1.default, { disabled: loading, type: "submit", variant: "contained", color: "primary", fullWidth: true }, loading ? react_1.default.createElement(CircularProgress_1.default, null) : submitButtonLabel))));
}
exports.PhoneVerification = PhoneVerification;
//# sourceMappingURL=phone-verification.js.map