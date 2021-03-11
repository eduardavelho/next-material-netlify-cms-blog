"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const link_1 = tslib_1.__importDefault(require("next/link"));
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const Link_1 = tslib_1.__importDefault(require("@material-ui/core/Link"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Paper_1 = tslib_1.__importDefault(require("@material-ui/core/Paper"));
const Breadcrumbs_1 = tslib_1.__importDefault(require("@material-ui/core/Breadcrumbs"));
const useMediaQuery_1 = tslib_1.__importDefault(require("@material-ui/core/useMediaQuery"));
const NavigateNext_1 = tslib_1.__importDefault(require("@material-ui/icons/NavigateNext"));
function Page({ header, children, breadcrumbs, background, dark, paper = true, }) {
    const theme = styles_1.useTheme();
    const isDesktop = useMediaQuery_1.default(theme.breakpoints.up("sm"));
    const styles = useStyles({ isDesktop });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Box_1.default, { paddingTop: isDesktop ? 8 : 2, paddingBottom: 24, paddingX: { xs: 2, sm: 2, md: 6 }, color: dark ? theme.palette.common.white : undefined, style: { background: background !== null && background !== void 0 ? background : theme.palette.primary.main } },
            react_1.default.createElement(Box_1.default, { maxWidth: "960px" }, header)),
        react_1.default.createElement(Box_1.default, { marginX: { xs: 2, sm: 2, md: 6 }, marginTop: -20, maxWidth: "960px" },
            react_1.default.createElement(Box_1.default, { color: dark ? theme.palette.common.white : undefined, marginBottom: 1 }, breadcrumbs !== undefined && (react_1.default.createElement(Breadcrumbs_1.default, { className: styles.root, color: "inherit", separator: react_1.default.createElement(NavigateNext_1.default, { fontSize: "small" }) }, breadcrumbs.map(([label, href], index) => (react_1.default.createElement(link_1.default, { href: href, passHref: true, key: `page-breadcrumb-link-${index}` },
                react_1.default.createElement(Link_1.default, { color: "inherit" }, label))))))),
            paper ? (react_1.default.createElement(Box_1.default, { marginBottom: isDesktop ? 6 : 2 },
                react_1.default.createElement(Paper_1.default, { elevation: 6 },
                    react_1.default.createElement(Box_1.default, { padding: { xs: 2, sm: 2, md: 3 } },
                        react_1.default.createElement(Box_1.default, null, children))))) : (children))));
}
exports.Page = Page;
const useStyles = core_1.makeStyles({
    root: {
        "& .MuiBreadcrumbs-ol": {
            justifyContent: ({ isDesktop }) => isDesktop ? "start" : "center",
        },
    },
});
//# sourceMappingURL=page.js.map