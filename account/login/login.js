"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const DialogTitle_1 = tslib_1.__importDefault(require("@material-ui/core/DialogTitle"));
const DialogContent_1 = tslib_1.__importDefault(require("@material-ui/core/DialogContent"));
const login_step_1 = require("./login-step");
const phone_verification_step_1 = require("./phone-verification-step");
function Login({ step, loginTitleText, loginStepProps, phoneVerificationStepProps, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DialogTitle_1.default, { style: { textAlign: "center" } }, loginTitleText),
        react_1.default.createElement(DialogContent_1.default, { style: {
                display: "flex",
                flexDirection: "column",
            } }, step === "login" ? (react_1.default.createElement(login_step_1.LoginStep, Object.assign({}, loginStepProps))) : (react_1.default.createElement(phone_verification_step_1.PhoneVerificationStep, Object.assign({}, phoneVerificationStepProps))))));
}
exports.Login = Login;
//# sourceMappingURL=login.js.map