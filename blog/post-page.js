"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostPage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const post_info_1 = require("./post-info");
const page_1 = require("../page");
const markdown_styles_1 = require("../markdown-styles");
function PostPage(_a) {
    var { htmlContent, background, dark, paper } = _a, postInfoProps = tslib_1.__rest(_a, ["htmlContent", "background", "dark", "paper"]);
    const markdownClasses = markdown_styles_1.markdownStyles();
    const pageProps = {
        background,
        dark,
        paper,
    };
    return (react_1.default.createElement(page_1.Page, Object.assign({}, pageProps, { header: react_1.default.createElement(post_info_1.PostInfo, Object.assign({}, postInfoProps, { dark: dark })) }),
        react_1.default.createElement("article", { className: markdownClasses.markdown, dangerouslySetInnerHTML: { __html: htmlContent } })));
}
exports.PostPage = PostPage;
//# sourceMappingURL=post-page.js.map