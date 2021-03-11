"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snackbar = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Snackbar_1 = tslib_1.__importDefault(require("@material-ui/core/Snackbar"));
const Alert_1 = tslib_1.__importDefault(require("@material-ui/lab/Alert"));
const emptyContent = {
    message: undefined,
    severity: undefined,
};
function Snackbar({ content: { message, severity }, setContent, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null, message && (react_1.default.createElement(Snackbar_1.default, { open: message !== undefined, autoHideDuration: 6000, onClose: () => setContent(emptyContent) },
        react_1.default.createElement(Alert_1.default, { onClose: () => setContent(emptyContent), severity: severity !== null && severity !== void 0 ? severity : "info" }, message)))));
}
exports.Snackbar = Snackbar;
//# sourceMappingURL=snackbar.js.map