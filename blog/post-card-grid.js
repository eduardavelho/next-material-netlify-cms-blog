"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCardGrid = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useMediaQuery_1 = tslib_1.__importDefault(require("@material-ui/core/useMediaQuery"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const styles_1 = require("@material-ui/core/styles");
const infinite_scroll_grid_1 = require("../infinite-scroll-grid");
const post_card_1 = require("./post-card");
function PostCardGrid({ color, onRequestMorePosts, hasMorePosts, posts, }) {
    const theme = styles_1.useTheme();
    const isDesktop = useMediaQuery_1.default(theme.breakpoints.up("md"));
    return (react_1.default.createElement(Box_1.default, { maxWidth: "960px", marginX: isDesktop ? "auto" : 1.6, marginY: 1.6 },
        react_1.default.createElement(infinite_scroll_grid_1.InfiniteScrollGrid, { onRequestMoreItems: onRequestMorePosts, hasMoreItems: hasMorePosts, items: posts, mapItemToComponent: (props) => react_1.default.createElement(post_card_1.PostCard, Object.assign({}, props, { color: color })) })));
}
exports.PostCardGrid = PostCardGrid;
//# sourceMappingURL=post-card-grid.js.map