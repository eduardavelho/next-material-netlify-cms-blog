"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemList = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const styles_1 = require("@material-ui/core/styles");
const useMediaQuery_1 = tslib_1.__importDefault(require("@material-ui/core/useMediaQuery"));
function InfoViewImage({ image, text }) {
    const theme = styles_1.useTheme();
    const isDesktop = useMediaQuery_1.default(theme.breakpoints.up("sm"));
    return (react_1.default.createElement("img", { src: image, alt: text, style: {
            width: isDesktop ? 128 : 72,
        } }));
}
function InfoViewText({ text, reverse }) {
    const theme = styles_1.useTheme();
    const isDesktop = useMediaQuery_1.default(theme.breakpoints.up("sm"));
    return (react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center", flexGrow: 1 },
        react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h5" : "body1", component: "p", align: reverse === true ? "right" : undefined, style: {
                width: "100%",
            } }, text)));
}
function InfoView({ text, image, reverse, }) {
    if (reverse) {
        return (react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center" },
            react_1.default.createElement(InfoViewText, { text: text, reverse: true }),
            react_1.default.createElement(Box_1.default, { marginLeft: 2 },
                react_1.default.createElement(InfoViewImage, { image: image, text: text }))));
    }
    else {
        return (react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center" },
            react_1.default.createElement(Box_1.default, { marginRight: 2 },
                react_1.default.createElement(InfoViewImage, { image: image, text: text })),
            react_1.default.createElement(InfoViewText, { text: text })));
    }
}
function ItemList({ title, color, backgroundColor, items, }) {
    const theme = styles_1.useTheme();
    const isDesktop = useMediaQuery_1.default(theme.breakpoints.up("sm"));
    return (react_1.default.createElement(Box_1.default, { paddingY: 16, paddingX: 2, style: {
            backgroundColor,
            color,
        } },
        react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", maxWidth: 720, marginX: "auto" },
            react_1.default.createElement(Box_1.default, { marginBottom: 4 },
                react_1.default.createElement(Typography_1.default, { align: "center", variant: isDesktop ? "h3" : "h4", component: "h1" }, "O que voc\u00EA encontra?")),
            items.map(({ text, image }, index) => (react_1.default.createElement(Box_1.default, { key: `how-works-${index}`, marginBottom: items.length - 1 === index ? 0 : 8, width: "100%" },
                react_1.default.createElement(InfoView, { text: text, image: image, reverse: index % 2 !== 0 })))))));
}
exports.ItemList = ItemList;
//# sourceMappingURL=item-list.js.map