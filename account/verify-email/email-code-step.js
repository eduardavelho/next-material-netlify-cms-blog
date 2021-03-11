"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailCodeStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const DialogContent_1 = tslib_1.__importDefault(require("@material-ui/core/DialogContent"));
const DialogActions_1 = tslib_1.__importDefault(require("@material-ui/core/DialogActions"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
function EmailCodeStep({ emailCodeInfoText, onClickCloseButton, onSubmit, closeButtonLabel, onSubmitButtonLabel, loading, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DialogContent_1.default, null,
            react_1.default.createElement(Typography_1.default, null, emailCodeInfoText)),
        react_1.default.createElement(DialogActions_1.default, null,
            react_1.default.createElement(Button_1.default, { variant: "outlined", color: "primary", onClick: () => onClickCloseButton() }, closeButtonLabel),
            react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", autoFocus: true, disabled: loading, onClick: () => onSubmit() }, loading ? react_1.default.createElement(CircularProgress_1.default, null) : onSubmitButtonLabel))));
}
exports.EmailCodeStep = EmailCodeStep;
//# sourceMappingURL=email-code-step.js.map