"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialIcons = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const SvgIcon_1 = tslib_1.__importDefault(require("@material-ui/core/SvgIcon"));
const Facebook_1 = tslib_1.__importDefault(require("@material-ui/icons/Facebook"));
const Twitter_1 = tslib_1.__importDefault(require("@material-ui/icons/Twitter"));
const WhatsApp_1 = tslib_1.__importDefault(require("@material-ui/icons/WhatsApp"));
const LinkedIn_1 = tslib_1.__importDefault(require("@material-ui/icons/LinkedIn"));
const Instagram_1 = tslib_1.__importDefault(require("@material-ui/icons/Instagram"));
const Email_1 = tslib_1.__importDefault(require("@material-ui/icons/Email"));
const icons = [
    [
        "facebook",
        Facebook_1.default,
        "#3b5999",
        (url) => `https://www.facebook.com/sharer.php?u=${encodeURI(url)}`,
        "Facebook",
    ],
    [
        "twitter",
        Twitter_1.default,
        "#55acee",
        (url) => `https://twitter.com/intent/tweet?url=${encodeURI(url)}`,
        "Twitter",
    ],
    [
        "whatsApp",
        WhatsApp_1.default,
        "#25D366",
        (url) => `https://wa.me/?text=${encodeURI(url)}`,
        "WhatsApp",
    ],
    [
        "linkedIn",
        LinkedIn_1.default,
        "#0077B5",
        (url) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(url)}`,
        "LinkedIn",
    ],
    ["instagram", Instagram_1.default, "#e4405f", (url) => url, "Instagram"],
    [
        "lattes",
        (props) => (react_1.default.createElement(SvgIcon_1.default, Object.assign({}, props),
            react_1.default.createElement("path", { d: "M9.623 2c-2.56-.005-4.65.716-5.924 2.14-1.337 1.498-1.837 2.772-1.667 5.18.038.54.107 1.179.155 1.42.188.952.335 1.141.429 1.173.054.018 1.816.658 3.916.944 2.1.286 3.882.13 3.962.135.185.009.263-.174.156-.37a9.606 9.606 0 01-.26-.544c-1.84-3.966-2.057-5.736-.63-6.99.937-.824 2.755-1.173 5.143-.989 1.528.118 2.413.12 2.543.005.176-.155-.205-.404-1.165-.763C13.888 2.448 11.614 2.004 9.623 2zm3.027 3.866c-.453 0-.87.053-1.195.166-.521.182-1.103.615-1.329.99-.249.415-.26 1.108-.027 1.638.487 1.105 1.993 2.072 3.67 2.352h-.002c.775.13 2.002-.04 2.633-.362.952-.487 1.323-1.509.878-2.424-.346-.713-1.278-1.48-2.33-1.916-.691-.287-1.544-.442-2.298-.444zm5.52 1.266h-.018c-.17.019-.19.05-.167.265.014.134.163.516.332.848.428.841.527 1.203.522 1.89-.007.724-.182 1.153-.729 1.776-.443.506-.985.88-1.886 1.301-1.703.796-3.894 1.192-6.586 1.192-2.034 0-3.254-.118-5.538-.535-1.299-.237-1.43-.251-1.43-.15 0 .061 1.285 2.548 3.447 6.665h.001c.666 1.269.88 1.616.994 1.616.537 0 3.144-.524 4.757-.957 3.002-.804 5.176-1.802 7.046-3.236 1.126-.863 1.798-1.623 2.406-2.72.99-1.787.896-3.634-.274-5.342-.668-.975-2.464-2.602-2.876-2.613z" }))),
        "#3a72aa",
        (url) => url,
        "Lattes",
    ],
    ["email", Email_1.default, "#3a72aa", (email) => `mailto:${email}`, "Email"],
];
const fontSizes = [
    ["smallIcons", "small"],
    ["largeIcons", "large"],
    ["iconsInheritFontSize", "inherit"],
];
function SocialIcons(props) {
    const { socialAnchorTitle, smallIcons, largeIcons, iconsInheritFontSize } = props, socialIcons = tslib_1.__rest(props, ["socialAnchorTitle", "smallIcons", "largeIcons", "iconsInheritFontSize"]);
    const [[, fontSize]] = fontSizes
        .filter(([size]) => props[size])
        .concat([["largeIcons", "large"]]);
    const [url, setUrl] = react_1.default.useState("");
    react_1.default.useEffect(() => {
        setUrl(window.location.href);
    }, []);
    return (react_1.default.createElement(Box_1.default, { display: "inline-flex" }, icons
        .filter(([icon]) => socialIcons[icon] !== undefined)
        .map(([icon, Icon, color, getHref, name], index) => (react_1.default.createElement(Box_1.default, { marginLeft: index && 1.6, display: "inline-flex", key: `social-icon-${index}` },
        react_1.default.createElement("a", { href: typeof socialIcons[icon] === "string"
                ? getHref(socialIcons[icon])
                : getHref(url), target: "_blank", rel: "nofollow noopener noreferrer", title: `${socialAnchorTitle} ${name}` },
            react_1.default.createElement(Icon, { style: { color, cursor: "pointer" }, fontSize: fontSize })))))));
}
exports.SocialIcons = SocialIcons;
//# sourceMappingURL=social-icons.js.map