"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownStyles = void 0;
const styles_1 = require("@material-ui/core/styles");
exports.markdownStyles = styles_1.makeStyles((theme) => ({
    markdown: {
        overflowY: "auto",
        "& > p:first-child": {
            marginTop: 0,
        },
        "& > p:last-child": {
            marginBottom: 0,
        },
        "& > p:first-child:first-letter": {
            float: "left",
            fontSize: "64.8px",
            lineHeight: 1,
            paddingRight: "7.2px",
        },
        "& p": {
            fontSize: "18px",
            fontFamily: "Roboto Slab",
            lineHeight: 1.8,
            margin: "16px 0",
        },
        "& h1, & h2": {
            fontSize: "32px",
            margin: "20px 0",
        },
        "& h3, & h4, & h5, & h6": {
            fontSize: "24px",
            margin: "16px 0",
        },
        "& li": {
            margin: "12px 0",
        },
        "& li, & dt, & dd": {
            fontSize: "16px",
            fontFamily: "Roboto Slab",
            lineHeight: 1.4,
        },
        "& a": {
            color: theme.palette.primary.main,
            textDecoration: "none",
        },
        "& a:hover": {
            textDecoration: "underline",
        },
        "& caption, & figcaption": {
            margin: "8px 0",
            fontSize: "16px",
        },
        "& blockquote": {
            fontStyle: "italic",
        },
        "& figure": {
            marginLeft: 0,
            marginRight: 0,
            textAlign: "center",
        },
        "& img": {
            maxWidth: "100%",
            display: "block",
            margin: "12px auto",
        },
        "& table": {
            fontSize: "18px",
            border: "1px solid #ccc",
            borderCollapse: "collapse",
            margin: 0,
            padding: 0,
            width: "100%",
        },
        "& table tr": {
            border: "1px solid #ddd",
            padding: "5px",
        },
        "& table th, & table td": {
            padding: "10px",
            textAlign: "center",
        },
        "& table th": {
            backgroundColor: "#f5f7fa",
            fontSize: "14px",
            letterSpacing: "1px",
            textTransform: "uppercase",
        },
        "@media screen and (max-width: 960px)": {
            "& h1, & h2": {
                fontSize: "24px",
                margin: "16px 0",
            },
        },
    },
}));
//# sourceMappingURL=markdown-styles.js.map