"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_input_mask_1 = tslib_1.__importDefault(require("react-input-mask"));
const TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
const Link_1 = tslib_1.__importDefault(require("@material-ui/core/Link"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
function LoginStep({ form, onSubmit, loading, submitButtonLabel, recoveryAccountTitleText, recoveryAccountLinkLabel, phoneNumberMask, recoveryAccountOnClick, createAccountButtonLabel, createAccountOnClick, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { onSubmit: (event) => {
                event.preventDefault();
                onSubmit();
            }, style: {
                display: "flex",
                flexDirection: "column",
            } },
            react_1.default.createElement(Box_1.default, { marginBottom: 1 },
                react_1.default.createElement(react_input_mask_1.default, { mask: phoneNumberMask, value: form.phoneNumber.value, disabled: loading, onFocus: form.phoneNumber.onFocus, onBlur: form.phoneNumber.onBlur, onChange: (event) => form.phoneNumber.onChange(event.target.value) }, () => (react_1.default.createElement(TextField_1.default, { label: form.phoneNumber.label, variant: "outlined", fullWidth: true, disabled: loading, error: form.phoneNumber.error, helperText: form.phoneNumber.helperText })))),
            react_1.default.createElement(Button_1.default, { variant: "outlined", color: "primary", type: "submit", disabled: loading }, loading ? react_1.default.createElement(CircularProgress_1.default, null) : submitButtonLabel)),
        react_1.default.createElement(Box_1.default, { marginY: 2 },
            react_1.default.createElement(Typography_1.default, null,
                recoveryAccountTitleText,
                react_1.default.createElement(Link_1.default, { onClick: () => loading === false && recoveryAccountOnClick(), style: { cursor: "pointer" } }, recoveryAccountLinkLabel))),
        react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: () => loading === false && createAccountOnClick() }, createAccountButtonLabel)));
}
exports.LoginStep = LoginStep;
//# sourceMappingURL=login-step.js.map