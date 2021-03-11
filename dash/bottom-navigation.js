"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNavigation = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const BottomNavigation_1 = tslib_1.__importDefault(require("@material-ui/core/BottomNavigation"));
const BottomNavigationAction_1 = tslib_1.__importDefault(require("@material-ui/core/BottomNavigationAction"));
const link_1 = tslib_1.__importDefault(require("next/link"));
function BottomNavigation({ items, color }) {
    return (react_1.default.createElement(BottomNavigation_1.default, { style: {
            width: "100%",
            position: "sticky",
            bottom: 0,
            color,
        }, showLabels: true }, items.map((_a, index) => {
        var { label, Icon } = _a, item = tslib_1.__rest(_a, ["label", "Icon"]);
        return "href" in item ? (react_1.default.createElement(link_1.default, { href: item.href, passHref: true, key: `bottom-navigation-item-${index}` },
            react_1.default.createElement(BottomNavigationAction_1.default, { component: "a", label: label, icon: react_1.default.createElement(Icon, null), showLabel: true }))) : (react_1.default.createElement(BottomNavigationAction_1.default, { key: `bottom-navigation-item-${index}`, onClick: item.onClick, label: label, icon: react_1.default.createElement(Icon, null), showLabel: true, style: {
                cursor: "pointer",
            } }));
    })));
}
exports.BottomNavigation = BottomNavigation;
//# sourceMappingURL=bottom-navigation.js.map