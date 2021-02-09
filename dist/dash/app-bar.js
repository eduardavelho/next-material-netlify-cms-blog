"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBar = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Tabs_1 = tslib_1.__importDefault(require("@material-ui/core/Tabs"));
const Tab_1 = tslib_1.__importDefault(require("@material-ui/core/Tab"));
const AppBar_1 = tslib_1.__importDefault(require("@material-ui/core/AppBar"));
const Toolbar_1 = tslib_1.__importDefault(require("@material-ui/core/Toolbar"));
const IconButton_1 = tslib_1.__importDefault(require("@material-ui/core/IconButton"));
const Hidden_1 = tslib_1.__importDefault(require("@material-ui/core/Hidden"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const Menu_1 = tslib_1.__importDefault(require("@material-ui/icons/Menu"));
const link_1 = tslib_1.__importDefault(require("next/link"));
function AppBar({ backgroundColor, color, shortName, logo, links, linksAriaLabel, drawerButtonAriaLabel, setDrawerOpen, }) {
    return (react_1.default.createElement(AppBar_1.default, { position: "sticky", style: {
            backgroundColor,
            color,
        } },
        react_1.default.createElement(Toolbar_1.default, null,
            react_1.default.createElement(link_1.default, { href: "/", passHref: true },
                react_1.default.createElement("a", { style: {
                        color: "inherit",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    } },
                    react_1.default.createElement(Box_1.default, { marginRight: 1, display: "flex", alignItems: "center", justifyContent: "center" },
                        react_1.default.createElement("img", { alt: shortName, src: logo, style: {
                                width: 42,
                            } })),
                    react_1.default.createElement(Box_1.default, { marginRight: 3 },
                        react_1.default.createElement(Typography_1.default, { variant: "h6", component: "span" }, shortName)))),
            react_1.default.createElement(Hidden_1.default, { smDown: true },
                react_1.default.createElement("nav", null,
                    react_1.default.createElement(Tabs_1.default, { value: false, "arial-label": linksAriaLabel }, links.map(({ link, label }, index) => (react_1.default.createElement(link_1.default, { href: link, passHref: true, key: `app-bar-link-${index}` },
                        react_1.default.createElement(Tab_1.default, { label: label, component: "a" }))))))),
            react_1.default.createElement(Box_1.default, { display: "flex", flexGrow: 1, justifyContent: "flex-end" },
                react_1.default.createElement(IconButton_1.default, { edge: "end", color: "inherit", "aria-label": drawerButtonAriaLabel, onClick: () => setDrawerOpen(true) },
                    react_1.default.createElement(Menu_1.default, null))))));
}
exports.AppBar = AppBar;
//# sourceMappingURL=app-bar.js.map