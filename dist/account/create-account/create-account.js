"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccount = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const DialogTitle_1 = tslib_1.__importDefault(require("@material-ui/core/DialogTitle"));
const DialogContent_1 = tslib_1.__importDefault(require("@material-ui/core/DialogContent"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Stepper_1 = tslib_1.__importDefault(require("@material-ui/core/Stepper"));
const Step_1 = tslib_1.__importDefault(require("@material-ui/core/Step"));
const StepButton_1 = tslib_1.__importDefault(require("@material-ui/core/StepButton"));
const StepLabel_1 = tslib_1.__importDefault(require("@material-ui/core/StepLabel"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const personal_data_step_1 = require("./personal-data-step");
const phone_verification_step_1 = require("./phone-verification-step");
const finish_step_1 = require("./finish-step");
const steps = {
    "personal-data": 0,
    "phone-verification": 1,
    "finish-step": 2,
};
function SwitchSteps({ step, personalDataStepProps, phoneVerificationStepProps, finishStepProps, }) {
    switch (step) {
        case "personal-data":
            return react_1.default.createElement(personal_data_step_1.PersonalDataStep, Object.assign({}, personalDataStepProps));
        case "phone-verification":
            return react_1.default.createElement(phone_verification_step_1.PhoneVerificationStep, Object.assign({}, phoneVerificationStepProps));
        case "finish-step":
            return react_1.default.createElement(finish_step_1.FinishStep, Object.assign({}, finishStepProps));
    }
}
function CreateAccount(props) {
    const { onRequestGoToPersonalDataStep, personalDataStepLabel, phoneVerificationStepLabel, finishStepLabel, createAccountTitleText, createAccountInfoText, step, } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        step !== "finish-step" && (react_1.default.createElement(DialogTitle_1.default, { style: { textAlign: "center" } }, createAccountTitleText)),
        react_1.default.createElement(DialogContent_1.default, null,
            step !== "finish-step" && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Box_1.default, { marginBottom: 2, marginX: 2, textAlign: "center" },
                    react_1.default.createElement(Typography_1.default, null, createAccountInfoText)),
                react_1.default.createElement(Stepper_1.default, { activeStep: steps[step], alternativeLabel: true, style: {
                        paddingRight: 0,
                        paddingLeft: 0,
                    } },
                    react_1.default.createElement(Step_1.default, null,
                        react_1.default.createElement(StepButton_1.default, { onClick: () => onRequestGoToPersonalDataStep() }, personalDataStepLabel)),
                    react_1.default.createElement(Step_1.default, null,
                        react_1.default.createElement(StepLabel_1.default, null, phoneVerificationStepLabel)),
                    react_1.default.createElement(Step_1.default, null,
                        react_1.default.createElement(StepLabel_1.default, null, finishStepLabel))))),
            react_1.default.createElement(Box_1.default, null,
                react_1.default.createElement(SwitchSteps, Object.assign({}, props))))));
}
exports.CreateAccount = CreateAccount;
//# sourceMappingURL=create-account.js.map