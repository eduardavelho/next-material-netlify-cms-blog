"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfiniteScrollGrid = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const styles_1 = require("@material-ui/core/styles");
const masonry_grid_1 = require("./masonry-grid");
const infinite_scroll_1 = require("./infinite-scroll");
function InfiniteScrollGrid(_a) {
    var { hasMoreItems, onRequestMoreItems, items, mapItemToComponent } = _a, gridProps = tslib_1.__rest(_a, ["hasMoreItems", "onRequestMoreItems", "items", "mapItemToComponent"]);
    const theme = styles_1.useTheme();
    return (react_1.default.createElement(infinite_scroll_1.InfiniteScroll, { itemsLength: items.length, onRequestMoreItems: onRequestMoreItems, hasMoreItems: hasMoreItems },
        react_1.default.createElement(masonry_grid_1.MasonryGrid, Object.assign({ xl: 3, spacing: theme.spacing(2) }, gridProps), items.map((props, index) => (react_1.default.createElement(Box_1.default, { key: `infinite-scroll-grid-item-${index}` }, mapItemToComponent(props)))))));
}
exports.InfiniteScrollGrid = InfiniteScrollGrid;
//# sourceMappingURL=infinite-scroll-grid.js.map