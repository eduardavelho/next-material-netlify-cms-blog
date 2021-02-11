"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailCodeStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
const CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
function EmailCodeStep({ loading, emailCodeTitleText, submitButtonLabel, onSubmit, form, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Box_1.default, { marginBottom: 1 },
            react_1.default.createElement(Typography_1.default, null, emailCodeTitleText)),
        react_1.default.createElement("form", { style: {
                display: "flex",
                flexDirection: "column",
            }, onSubmit: (event) => {
                event.preventDefault();
                onSubmit();
            } },
            react_1.default.createElement(Box_1.default, { marginBottom: 1 },
                react_1.default.createElement(TextField_1.default, { label: form.email.label, variant: "outlined", fullWidth: true, value: form.email.value, disabled: loading, helperText: form.email.helperText, onFocus: form.email.onFocus, onBlur: form.email.onBlur, error: form.email.error, onChange: (event) => form.email.onChange(event.target.value) })),
            react_1.default.createElement(Button_1.default, { disabled: loading, variant: "contained", color: "primary", type: "submit" }, loading ? react_1.default.createElement(CircularProgress_1.default, null) : submitButtonLabel))));
}
exports.EmailCodeStep = EmailCodeStep;
//# sourceMappingURL=email-code-step.js.map