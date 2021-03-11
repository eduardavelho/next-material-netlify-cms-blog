"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleDescriptionInfo = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const useMediaQuery_1 = tslib_1.__importDefault(require("@material-ui/core/useMediaQuery"));
const styles_1 = require("@material-ui/core/styles");
function TitleDescriptionInfo({ title, description, }) {
    const theme = styles_1.useTheme();
    const isDesktop = useMediaQuery_1.default(theme.breakpoints.up("md"));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Box_1.default, null,
            react_1.default.createElement(Typography_1.default, { component: "h1", variant: isDesktop ? "h3" : "h5" }, title)),
        description !== undefined && (react_1.default.createElement(Box_1.default, { marginTop: 2 },
            react_1.default.createElement(Typography_1.default, { component: "h2", variant: isDesktop ? "subtitle1" : "subtitle2" }, description)))));
}
exports.TitleDescriptionInfo = TitleDescriptionInfo;
//# sourceMappingURL=title-description-info.js.map