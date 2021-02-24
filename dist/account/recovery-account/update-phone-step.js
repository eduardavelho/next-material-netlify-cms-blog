"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhoneStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_input_mask_1 = tslib_1.__importDefault(require("react-input-mask"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
const CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
function UpdatePhoneStep({ loading, form, phoneNumberMask, onSubmit, submitButtonLabel, updatePhoneStepInfoText, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Box_1.default, { marginBottom: 1 },
            react_1.default.createElement(Typography_1.default, null, updatePhoneStepInfoText)),
        react_1.default.createElement("form", { style: {
                display: "flex",
                flexDirection: "column",
            }, onSubmit: (event) => {
                event.preventDefault();
                onSubmit();
            } },
            react_1.default.createElement(Box_1.default, { marginBottom: 1 },
                react_1.default.createElement(react_input_mask_1.default, { mask: phoneNumberMask, value: form.phoneNumber.value, disabled: loading, onFocus: form.phoneNumber.onFocus, onBlur: form.phoneNumber.onBlur, onChange: (event) => form.phoneNumber.onChange(event.target.value) }, () => (react_1.default.createElement(TextField_1.default, { label: form.phoneNumber.label, disabled: loading, variant: "outlined", fullWidth: true, error: form.phoneNumber.error, helperText: form.phoneNumber.helperText })))),
            react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", type: "submit", disabled: loading }, loading ? react_1.default.createElement(CircularProgress_1.default, null) : submitButtonLabel))));
}
exports.UpdatePhoneStep = UpdatePhoneStep;
//# sourceMappingURL=update-phone-step.js.map