"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dash = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Hidden_1 = tslib_1.__importDefault(require("@material-ui/core/Hidden"));
const app_bar_1 = require("./app-bar");
const bottom_navigation_1 = require("./bottom-navigation");
const drawer_1 = require("./drawer");
const footer_1 = require("./footer");
function Dash({ appBarBackgroundColor, appBarColor, logo, shortName, appBarLinks, appBarLinksAriaLabel, drawerButtonAriaLabel, drawerLinksAriaLabel, drawerLinks, footerLinksAriaLabel, footerLinks, bottomNavigationLinks, theme, children, }) {
    const [drawerOpen, setDrawerOpen] = react_1.default.useState(false);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(app_bar_1.AppBar, { backgroundColor: appBarBackgroundColor, color: appBarColor, shortName: shortName, logo: logo, drawerButtonAriaLabel: drawerButtonAriaLabel, linksAriaLabel: appBarLinksAriaLabel, setDrawerOpen: (drawerOpen) => setDrawerOpen(drawerOpen), links: appBarLinks }),
        react_1.default.createElement(drawer_1.Drawer, { linksAriaLabel: drawerLinksAriaLabel, links: drawerLinks, drawerOpen: drawerOpen, setDrawerOpen: (drawerOpen) => setDrawerOpen(drawerOpen) }),
        react_1.default.createElement("main", null, children),
        react_1.default.createElement(footer_1.Footer, { linksAriaLabel: footerLinksAriaLabel, links: footerLinks, color: theme.palette.secondary.contrastText, backgroundColor: theme.palette.secondary.main }),
        react_1.default.createElement(Hidden_1.default, { smUp: true },
            react_1.default.createElement(bottom_navigation_1.BottomNavigation, { color: theme.palette.primary.main, links: bottomNavigationLinks }))));
}
exports.Dash = Dash;
//# sourceMappingURL=dash.js.map