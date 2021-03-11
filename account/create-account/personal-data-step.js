"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalDataStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_input_mask_1 = tslib_1.__importDefault(require("react-input-mask"));
const TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
const Grid_1 = tslib_1.__importDefault(require("@material-ui/core/Grid"));
const CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
function PersonalDataStep({ phoneNumberMask, submitButtonLabel, onSubmit, form, loading, }) {
    return (react_1.default.createElement("form", { style: { margin: "auto" }, onSubmit: (event) => {
            event.preventDefault();
            onSubmit();
        } },
        react_1.default.createElement(Grid_1.default, { container: true, spacing: 1 },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 5 },
                react_1.default.createElement(TextField_1.default, { fullWidth: true, label: form.name.label, variant: "outlined", value: form.name.value, disabled: loading, error: form.name.error, helperText: form.name.helperText, onFocus: form.name.onFocus, onBlur: form.name.onBlur, onChange: (event) => form.name.onChange(event.target.value) })),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 7 },
                react_1.default.createElement(TextField_1.default, { fullWidth: true, label: form.surname.label, variant: "outlined", value: form.surname.value, disabled: loading, error: form.surname.error, helperText: form.surname.helperText, onFocus: form.surname.onFocus, onBlur: form.surname.onBlur, onChange: (event) => form.surname.onChange(event.target.value) })),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 7 },
                react_1.default.createElement(TextField_1.default, { fullWidth: true, label: form.email.label, variant: "outlined", value: form.email.value, disabled: loading, error: form.email.error, helperText: form.email.helperText, onFocus: form.email.onFocus, onBlur: form.email.onBlur, onChange: (event) => form.email.onChange(event.target.value) })),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 5 },
                react_1.default.createElement(react_input_mask_1.default, { mask: phoneNumberMask, value: form.phoneNumber.value, disabled: loading, onFocus: form.phoneNumber.onFocus, onBlur: form.phoneNumber.onBlur, onChange: (event) => form.phoneNumber.onChange(event.target.value) }, () => (react_1.default.createElement(TextField_1.default, { fullWidth: true, label: form.phoneNumber.label, variant: "outlined", disabled: loading, error: form.phoneNumber.error, helperText: form.phoneNumber.helperText })))),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                react_1.default.createElement(Button_1.default, { type: "submit", variant: "contained", color: "primary", fullWidth: true, disabled: loading }, loading ? react_1.default.createElement(CircularProgress_1.default, null) : submitButtonLabel)))));
}
exports.PersonalDataStep = PersonalDataStep;
//# sourceMappingURL=personal-data-step.js.map