"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const search_header_1 = require("../search-header");
const post_card_grid_1 = require("./post-card-grid");
function Blog({ title, background, searchOptions, searchDefaultValue, searchPlaceholder, searchNoOptionsText, searchDisabled, loading, dark, color, onRequestMorePosts, hasMorePosts, posts, }) {
    const searchHeaderProps = {
        title,
        background,
        searchOptions,
        searchDefaultValue,
        searchPlaceholder,
        searchNoOptionsText,
        searchDisabled,
        loading,
        dark,
    };
    const postCardGridProps = {
        color,
        onRequestMorePosts,
        hasMorePosts,
        posts,
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(search_header_1.SearchHeader, Object.assign({}, searchHeaderProps)),
        react_1.default.createElement(post_card_grid_1.PostCardGrid, Object.assign({}, postCardGridProps))));
}
exports.Blog = Blog;
//# sourceMappingURL=blog.js.map