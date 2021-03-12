"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerWithButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const link_1 = tslib_1.__importDefault(require("next/link"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
const styles_1 = require("@material-ui/core/styles");
const useMediaQuery_1 = tslib_1.__importDefault(require("@material-ui/core/useMediaQuery"));
function BannerWithButton({ title, label, href, color, background, image, }) {
    const theme = styles_1.useTheme();
    const isDesktop = useMediaQuery_1.default(theme.breakpoints.up("sm"));
    return (react_1.default.createElement(Box_1.default, { style: {
            background,
        } },
        react_1.default.createElement(Box_1.default, { style: {
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto 80%",
            } },
            react_1.default.createElement(Box_1.default, { paddingY: 36, paddingX: 2, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: color, style: {
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                } },
                react_1.default.createElement(Box_1.default, { marginBottom: 6, maxWidth: 960, marginX: "auto" },
                    react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h2" : "h4", component: "h2", align: "center", style: {
                            fontWeight: 600,
                        } }, title)),
                react_1.default.createElement(Box_1.default, null,
                    react_1.default.createElement(link_1.default, { href: href, passHref: true },
                        react_1.default.createElement(Button_1.default, { variant: "outlined", color: "inherit", component: "a", style: {
                                borderWidth: "3px",
                                borderRadius: "8px",
                            } },
                            react_1.default.createElement(Box_1.default, { paddingY: 1, paddingX: isDesktop ? 4 : 3 },
                                react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h5" : "h6", component: "span", align: "center", style: {
                                        fontWeight: 600,
                                    } }, label)))))))));
}
exports.BannerWithButton = BannerWithButton;
//# sourceMappingURL=banner-with-button.js.map