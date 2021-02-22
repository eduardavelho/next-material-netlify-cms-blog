"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Tabs_1 = tslib_1.__importDefault(require("@material-ui/core/Tabs"));
const Tab_1 = tslib_1.__importDefault(require("@material-ui/core/Tab"));
const link_1 = tslib_1.__importDefault(require("next/link"));
function Footer({ backgroundColor, color, itemsAriaLabel, items, }) {
    return (react_1.default.createElement("footer", { style: {
            backgroundColor,
            color,
        } },
        react_1.default.createElement("nav", null,
            react_1.default.createElement(Tabs_1.default, { variant: "scrollable", scrollButtons: "on", "arial-label": itemsAriaLabel, value: false }, items.map((item, index) => "href" in item ? (react_1.default.createElement(link_1.default, { href: item.href, passHref: true, key: `footer-item-${index}` },
                react_1.default.createElement(Tab_1.default, { component: "a", label: item.label }))) : (react_1.default.createElement(Tab_1.default, { key: `footer-item-${index}`, label: item.label, onClick: item.onClick, style: {
                    cursor: "pointer",
                } })))))));
}
exports.Footer = Footer;
//# sourceMappingURL=footer.js.map