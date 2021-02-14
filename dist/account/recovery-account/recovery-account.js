"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoveryAccount = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const DialogTitle_1 = tslib_1.__importDefault(require("@material-ui/core/DialogTitle"));
const DialogContent_1 = tslib_1.__importDefault(require("@material-ui/core/DialogContent"));
const Stepper_1 = tslib_1.__importDefault(require("@material-ui/core/Stepper"));
const Step_1 = tslib_1.__importDefault(require("@material-ui/core/Step"));
const StepLabel_1 = tslib_1.__importDefault(require("@material-ui/core/StepLabel"));
const StepContent_1 = tslib_1.__importDefault(require("@material-ui/core/StepContent"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const email_code_step_1 = require("./email-code-step");
const verify_code_step_1 = require("./verify-code-step");
const update_phone_step_1 = require("./update-phone-step");
const phone_verification_step_1 = require("./phone-verification-step");
const finish_step_1 = require("./finish-step");
const steps = {
    "email-code": 0,
    "verify-code": 1,
    "update-phone": 2,
    "phone-verification": 3,
    "finish-step": 4,
};
function RecoveryAccount({ step, recoveryAccountTitleText, recoveryAccountInfoText, emailCodeStepLabel, verifyCodeStepLabel, updatePhoneStepLabel, phoneVerificationStepLabel, finishStepLabel, emailCodeStepProps, verifyCodeStepProps, updatePhoneStepProps, phoneVerificationStepProps, finishStepProps, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DialogTitle_1.default, { style: { textAlign: "center" } }, recoveryAccountTitleText),
        react_1.default.createElement(DialogContent_1.default, null,
            react_1.default.createElement(Box_1.default, { marginBottom: 2, marginX: 2, textAlign: "center" },
                react_1.default.createElement(Typography_1.default, null, recoveryAccountInfoText)),
            react_1.default.createElement(Stepper_1.default, { activeStep: steps[step], orientation: "vertical", style: {
                    paddingLeft: 0,
                    paddingRight: 0,
                } },
                react_1.default.createElement(Step_1.default, null,
                    react_1.default.createElement(StepLabel_1.default, null, emailCodeStepLabel),
                    react_1.default.createElement(StepContent_1.default, null,
                        react_1.default.createElement(email_code_step_1.EmailCodeStep, Object.assign({}, emailCodeStepProps)))),
                react_1.default.createElement(Step_1.default, null,
                    react_1.default.createElement(StepLabel_1.default, null, verifyCodeStepLabel),
                    react_1.default.createElement(StepContent_1.default, null,
                        react_1.default.createElement(verify_code_step_1.VerifyCodeStep, Object.assign({}, verifyCodeStepProps)))),
                react_1.default.createElement(Step_1.default, null,
                    react_1.default.createElement(StepLabel_1.default, null, updatePhoneStepLabel),
                    react_1.default.createElement(StepContent_1.default, null,
                        react_1.default.createElement(update_phone_step_1.UpdatePhoneStep, Object.assign({}, updatePhoneStepProps)))),
                react_1.default.createElement(Step_1.default, null,
                    react_1.default.createElement(StepLabel_1.default, null, phoneVerificationStepLabel),
                    react_1.default.createElement(StepContent_1.default, null,
                        react_1.default.createElement(phone_verification_step_1.PhoneVerificationStep, Object.assign({}, phoneVerificationStepProps)))),
                react_1.default.createElement(Step_1.default, null,
                    react_1.default.createElement(StepLabel_1.default, null, finishStepLabel),
                    react_1.default.createElement(StepContent_1.default, { style: {
                            marginLeft: 0,
                            marginRight: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                        } },
                        react_1.default.createElement(finish_step_1.FinishStep, Object.assign({}, finishStepProps))))))));
}
exports.RecoveryAccount = RecoveryAccount;
//# sourceMappingURL=recovery-account.js.map