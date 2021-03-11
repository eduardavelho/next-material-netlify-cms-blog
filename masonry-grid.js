"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasonryGrid = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const react_masonry_css_1 = tslib_1.__importDefault(require("react-masonry-css"));
function MasonryGrid({ children, xl = 4, lg = 3, md = 2, sm = 1, xs = 1, spacing = 0, }) {
    const theme = styles_1.useTheme();
    const styles = useStyles({ spacing });
    return (react_1.default.createElement("div", { className: styles.root },
        react_1.default.createElement(react_masonry_css_1.default, { className: "masonry-grid", columnClassName: "masonry-grid-column", breakpointCols: {
                default: xl,
                [theme.breakpoints.values.xl]: xl,
                [theme.breakpoints.values.lg]: lg,
                [theme.breakpoints.values.md]: md,
                [theme.breakpoints.values.sm]: sm,
                [theme.breakpoints.values.xs]: xs,
            } }, children)));
}
exports.MasonryGrid = MasonryGrid;
const useStyles = core_1.makeStyles({
    root: {
        "& .masonry-grid": {
            marginLeft: ({ spacing }) => spacing * -1,
            display: "flex",
        },
        "& .masonry-grid-column": {
            paddingLeft: ({ spacing }) => spacing,
        },
        "& .masonry-grid-column > div": {
            marginBottom: ({ spacing }) => spacing,
        },
    },
});
//# sourceMappingURL=masonry-grid.js.map