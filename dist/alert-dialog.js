"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertDialog = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
const Dialog_1 = tslib_1.__importDefault(require("@material-ui/core/Dialog"));
const DialogActions_1 = tslib_1.__importDefault(require("@material-ui/core/DialogActions"));
const DialogContent_1 = tslib_1.__importDefault(require("@material-ui/core/DialogContent"));
const DialogContentText_1 = tslib_1.__importDefault(require("@material-ui/core/DialogContentText"));
const DialogTitle_1 = tslib_1.__importDefault(require("@material-ui/core/DialogTitle"));
function AlertDialog({ title, description, confirmButtonLabel, rejectButtonLabel, onRequestClose, open, onAnswer, }) {
    return (react_1.default.createElement(Dialog_1.default, { open: open, onClose: onRequestClose, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description" },
        react_1.default.createElement(DialogTitle_1.default, { id: "alert-dialog-title" }, title),
        react_1.default.createElement(DialogContent_1.default, null,
            react_1.default.createElement(DialogContentText_1.default, { id: "alert-dialog-description" }, description)),
        react_1.default.createElement(DialogActions_1.default, null,
            react_1.default.createElement(Button_1.default, { onClick: () => onAnswer(true), color: "primary" }, confirmButtonLabel),
            react_1.default.createElement(Button_1.default, { onClick: () => onAnswer(false), color: "primary", autoFocus: true }, rejectButtonLabel))));
}
exports.AlertDialog = AlertDialog;
//# sourceMappingURL=alert-dialog.js.map