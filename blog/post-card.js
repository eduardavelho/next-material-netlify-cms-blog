"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCard = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const link_1 = tslib_1.__importDefault(require("next/link"));
const Card_1 = tslib_1.__importDefault(require("@material-ui/core/Card"));
const CardActionArea_1 = tslib_1.__importDefault(require("@material-ui/core/CardActionArea"));
const CardContent_1 = tslib_1.__importDefault(require("@material-ui/core/CardContent"));
const CardMedia_1 = tslib_1.__importDefault(require("@material-ui/core/CardMedia"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const Chip_1 = tslib_1.__importDefault(require("@material-ui/core/Chip"));
const Avatar_1 = tslib_1.__importDefault(require("@material-ui/core/Avatar"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const styles_1 = require("@material-ui/core/styles");
const Favorite_1 = tslib_1.__importDefault(require("@material-ui/icons/Favorite"));
const ModeComment_1 = tslib_1.__importDefault(require("@material-ui/icons/ModeComment"));
const Visibility_1 = tslib_1.__importDefault(require("@material-ui/icons/Visibility"));
function PostCard(_a) {
    var { title, subtitle, image, date, dateText, likes, likesAriaLabel, comments, commentsAriaLabel, views, viewsAriaLabel, authorName, authorPicture, tags, color, elevation } = _a, props = tslib_1.__rest(_a, ["title", "subtitle", "image", "date", "dateText", "likes", "likesAriaLabel", "comments", "commentsAriaLabel", "views", "viewsAriaLabel", "authorName", "authorPicture", "tags", "color", "elevation"]);
    const theme = styles_1.useTheme();
    const postCard = (react_1.default.createElement(Card_1.default, { elevation: elevation, onClick: () => "onClick" in props && props.onClick() },
        react_1.default.createElement(CardActionArea_1.default, null,
            react_1.default.createElement(CardMedia_1.default, { image: image, title: title, style: {
                    height: "140px",
                } }),
            authorPicture !== undefined && (react_1.default.createElement(Avatar_1.default, { alt: authorName, src: authorPicture, style: {
                    margin: "-28px auto 0",
                    position: "relative",
                    width: "56px",
                    height: "56px",
                } })),
            react_1.default.createElement(CardContent_1.default, null,
                tags !== undefined && tags.length > 0 && (react_1.default.createElement(Box_1.default, { marginTop: 0.8, marginBottom: 2.4 }, tags.map((tag, index) => (react_1.default.createElement(Chip_1.default, { key: `post-card-chip-${index}`, size: "small", label: tag, style: {
                        marginBottom: theme.spacing(0.3),
                        marginRight: theme.spacing(0.3),
                        cursor: "pointer",
                    } }))))),
                date !== undefined && (react_1.default.createElement(Box_1.default, null,
                    react_1.default.createElement(Typography_1.default, { variant: "caption", component: "time", dateTime: date.toISOString() }, dateText !== null && dateText !== void 0 ? dateText : date.toLocaleString()))),
                react_1.default.createElement(Box_1.default, { marginBottom: 0.4 },
                    react_1.default.createElement(Typography_1.default, { variant: "h6", component: "span", style: {
                            lineHeight: "1.3",
                            color: color !== null && color !== void 0 ? color : theme.palette.primary.main,
                        } }, title)),
                react_1.default.createElement(Box_1.default, null,
                    react_1.default.createElement(Typography_1.default, { variant: "body2", color: "textSecondary", component: "span" }, subtitle))),
            (likes !== undefined ||
                views !== undefined ||
                comments !== undefined) && (react_1.default.createElement(Box_1.default, { display: "flex", paddingY: 1.6 },
                likes !== undefined && (react_1.default.createElement(CardInfo, { amount: likes, Icon: Favorite_1.default, ariaLabel: likesAriaLabel })),
                views !== undefined && (react_1.default.createElement(CardInfo, { amount: views, Icon: Visibility_1.default, ariaLabel: viewsAriaLabel })),
                comments !== undefined && (react_1.default.createElement(CardInfo, { amount: comments, Icon: ModeComment_1.default, ariaLabel: commentsAriaLabel })))))));
    if ("href" in props) {
        return (react_1.default.createElement(Box_1.default, null,
            react_1.default.createElement(link_1.default, { href: props.href, passHref: true },
                react_1.default.createElement("a", { style: {
                        textDecoration: "none",
                        color: "inherit",
                    } }, postCard))));
    }
    else {
        return react_1.default.createElement(Box_1.default, null, postCard);
    }
}
exports.PostCard = PostCard;
function CardInfo({ Icon, amount, ariaLabel, }) {
    const theme = styles_1.useTheme();
    return (react_1.default.createElement(Box_1.default, { display: "flex", flex: 1, alignItems: "center", justifyContent: "center", "aria-label": ariaLabel, title: ariaLabel },
        react_1.default.createElement(Icon, { fontSize: "small" }),
        react_1.default.createElement(Typography_1.default, { variant: "body2", component: "div", style: {
                marginLeft: theme.spacing(0.5),
            } }, amount)));
}
//# sourceMappingURL=post-card.js.map