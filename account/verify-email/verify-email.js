"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyEmail = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Dialog_1 = tslib_1.__importDefault(require("@material-ui/core/Dialog"));
const DialogTitle_1 = tslib_1.__importDefault(require("@material-ui/core/DialogTitle"));
const email_code_step_1 = require("./email-code-step");
const verify_code_step_1 = require("./verify-code-step");
function VerifyEmail({ step, open, onClose, verifyEmailTitleText, emailCodeStepProps, verifyCodeStepProps, }) {
    return (react_1.default.createElement(Dialog_1.default, { open: open, onClose: () => onClose(), scroll: "body" },
        react_1.default.createElement(DialogTitle_1.default, { style: { textAlign: "center" } }, verifyEmailTitleText),
        step === "email-code" && react_1.default.createElement(email_code_step_1.EmailCodeStep, Object.assign({}, emailCodeStepProps)),
        step === "verify-code" && react_1.default.createElement(verify_code_step_1.VerifyCodeStep, Object.assign({}, verifyCodeStepProps))));
}
exports.VerifyEmail = VerifyEmail;
//# sourceMappingURL=verify-email.js.map