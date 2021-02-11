"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const CheckCircleOutline_1 = tslib_1.__importDefault(require("@material-ui/icons/CheckCircleOutline"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
function FinishStep({ finishStepTitleText, finishStepInfoText, finishButtonLabel, onClickFinishButton, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Box_1.default, { marginBottom: 3, textAlign: "center" },
            react_1.default.createElement(Typography_1.default, { variant: "h6" }, finishStepTitleText),
            react_1.default.createElement(Box_1.default, { marginY: 2 },
                react_1.default.createElement(CheckCircleOutline_1.default, { style: { width: "6em", height: "6em" }, color: "primary" })),
            react_1.default.createElement(Typography_1.default, null, finishStepInfoText)),
        react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", fullWidth: true, onClick: () => onClickFinishButton() }, finishButtonLabel)));
}
exports.FinishStep = FinishStep;
//# sourceMappingURL=finish-step.js.map