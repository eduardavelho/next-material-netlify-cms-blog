"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Drawer_1 = tslib_1.__importDefault(require("@material-ui/core/Drawer"));
const Link_1 = tslib_1.__importDefault(require("@material-ui/core/Link"));
const List_1 = tslib_1.__importDefault(require("@material-ui/core/List"));
const ListItem_1 = tslib_1.__importDefault(require("@material-ui/core/ListItem"));
const ListItemIcon_1 = tslib_1.__importDefault(require("@material-ui/core/ListItemIcon"));
const ListItemText_1 = tslib_1.__importDefault(require("@material-ui/core/ListItemText"));
const link_1 = tslib_1.__importDefault(require("next/link"));
function Drawer({ linksAriaLabel, links, drawerOpen, setDrawerOpen, }) {
    return (react_1.default.createElement(Drawer_1.default, { anchor: "right", open: drawerOpen, onClose: () => setDrawerOpen(false) },
        react_1.default.createElement("nav", null,
            react_1.default.createElement(List_1.default, { style: { width: 256 }, onClick: () => setDrawerOpen(false), "arial-label": linksAriaLabel }, links.map(({ link, label, Icon }, index) => (react_1.default.createElement(link_1.default, { href: link, passHref: true, key: `drawer-link-${index}` },
                react_1.default.createElement(ListItem_1.default, { component: Link_1.default, color: "inherit", style: { textDecoration: "none" } },
                    react_1.default.createElement(ListItemIcon_1.default, null,
                        react_1.default.createElement(Icon, null)),
                    react_1.default.createElement(ListItemText_1.default, { primary: label })))))))));
}
exports.Drawer = Drawer;
//# sourceMappingURL=drawer.js.map