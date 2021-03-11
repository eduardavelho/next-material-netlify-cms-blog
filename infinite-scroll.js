"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfiniteScroll = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_infinite_scroll_component_1 = tslib_1.__importDefault(require("react-infinite-scroll-component"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
function InfiniteScroll({ onRequestMoreItems, hasMoreItems, itemsLength, children, }) {
    return (react_1.default.createElement(react_infinite_scroll_component_1.default, { dataLength: itemsLength, next: onRequestMoreItems, hasMore: hasMoreItems, loader: react_1.default.createElement(Box_1.default, { paddingTop: 1.6, display: "flex", justifyContent: "center" },
            react_1.default.createElement(Box_1.default, { width: "64px", height: "64px", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" },
                react_1.default.createElement(CircularProgress_1.default, null))) }, children));
}
exports.InfiniteScroll = InfiniteScroll;
//# sourceMappingURL=infinite-scroll.js.map