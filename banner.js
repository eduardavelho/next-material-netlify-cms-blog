"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const styles_1 = require("@material-ui/core/styles");
const useMediaQuery_1 = tslib_1.__importDefault(require("@material-ui/core/useMediaQuery"));
function Banner({ image, imageAlt, background, color, title, subtitle, }) {
    const theme = styles_1.useTheme();
    const isDesktop = useMediaQuery_1.default(theme.breakpoints.up("sm"));
    return (react_1.default.createElement(Box_1.default, { paddingY: 16, paddingX: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: color, style: {
            background,
            backgroundSize: "cover",
        } },
        react_1.default.createElement(Box_1.default, { maxWidth: 960, marginX: "auto" },
            react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 },
                react_1.default.createElement("img", { src: image, alt: imageAlt, style: {
                        width: 128,
                    } })),
            react_1.default.createElement(Box_1.default, { marginBottom: 2 },
                react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h3" : "h4", component: "h1", align: "center" }, title)),
            react_1.default.createElement(Box_1.default, null,
                react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h4" : "h6", component: "h2", align: "center", style: {
                        fontWeight: 300,
                    } }, subtitle)))));
}
exports.Banner = Banner;
//# sourceMappingURL=banner.js.map