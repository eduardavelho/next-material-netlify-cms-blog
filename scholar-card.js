"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScholarCard = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Card_1 = tslib_1.__importDefault(require("@material-ui/core/Card"));
const CardContent_1 = tslib_1.__importDefault(require("@material-ui/core/CardContent"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const Chip_1 = tslib_1.__importDefault(require("@material-ui/core/Chip"));
const Avatar_1 = tslib_1.__importDefault(require("@material-ui/core/Avatar"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const ListItem_1 = tslib_1.__importDefault(require("@material-ui/core/ListItem"));
const ListItemText_1 = tslib_1.__importDefault(require("@material-ui/core/ListItemText"));
const ListItemAvatar_1 = tslib_1.__importDefault(require("@material-ui/core/ListItemAvatar"));
const styles_1 = require("@material-ui/core/styles");
const social_icons_1 = require("./social-icons");
function ScholarCard(_a) {
    var { name, resume, degree, picture, color, tags, lattesHref, elevation } = _a, socialIconsProps = tslib_1.__rest(_a, ["name", "resume", "degree", "picture", "color", "tags", "lattesHref", "elevation"]);
    const theme = styles_1.useTheme();
    const haveSocialIconsProps = Object.keys(socialIconsProps).length > 0;
    return (react_1.default.createElement(Card_1.default, { elevation: elevation },
        react_1.default.createElement(CardContent_1.default, { style: {
                padding: "16px",
            } },
            tags !== undefined && tags.length > 0 && (react_1.default.createElement(Box_1.default, null, tags.map((tag, index) => (react_1.default.createElement(Chip_1.default, { key: `scholar-card-chip-${index}`, size: "small", label: tag, style: {
                    marginBottom: theme.spacing(0.3),
                    marginRight: theme.spacing(0.3),
                } }))))),
            react_1.default.createElement(ListItem_1.default, { component: "div", alignItems: "flex-start", style: {
                    padding: 0,
                } },
                react_1.default.createElement(ListItemAvatar_1.default, null,
                    react_1.default.createElement(Avatar_1.default, { alt: name, src: picture })),
                react_1.default.createElement(ListItemText_1.default, { primary: react_1.default.createElement("span", { style: { color: color !== null && color !== void 0 ? color : theme.palette.primary.main } }, name), secondary: degree })),
            react_1.default.createElement(Box_1.default, { marginY: 2 },
                react_1.default.createElement(Typography_1.default, { variant: "body2" }, resume)),
            haveSocialIconsProps && (react_1.default.createElement(Box_1.default, { display: "flex", justifyContent: "center", alignItems: "center" },
                react_1.default.createElement(social_icons_1.SocialIcons, Object.assign({}, socialIconsProps)))))));
}
exports.ScholarCard = ScholarCard;
//# sourceMappingURL=scholar-card.js.map