import { makeStyles } from "@material-ui/core/styles";

export const markdownStyles = makeStyles((theme) => ({
  markdown: {
    overflowY: "auto",
    "& > p:first-child": {
      marginTop: 0,
    },
    "& > p:last-child": {
      marginBottom: 0,
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
    "& pre code .hljs": {
      display: "block",
      overflowX: "auto",
      padding: "1em",
    },
    "& code .hljs": {
      padding: "3px 5px",
    },
    "& pre": {
      borderRadius: "4px",
      padding: "1em",
      overflow: "auto",
      maxHeight: "60vh",
      background: "#272822",
    },
    "& .hljs-attribute, & .hljs-doctag, & .hljs-keyword, & .hljs-meta .hljs-keyword, & .hljs-name, & .hljs-selector-tag": {
      fontWeight: "700",
    },
    "& .hljs-section, & .hljs-title": {
      fontWeight: "700",
    },
    "& .hljs-emphasis": {
      fontStyle: "italic",
    },
    "& .hljs-strong": {
      fontWeight: "700",
    },
    "& .hljs": {
      color: "#ddd",
    },
    "& .hljs-tag, & .hljs-keyword, & .hljs-selector-tag, & .hljs-literal, & .hljs-strong, & .hljs-name": {
      color: "#f92672",
    },
    "& .hljs-code": {
      color: "#66d9ef",
    },
    "& .hljs-attribute, & .hljs-symbol, & .hljs-regexp, & .hljs-link": {
      color: "#bf79db",
    },
    "& .hljs-string, & .hljs-bullet, & .hljs-subst, & .hljs-title, & .hljs-section, & .hljs-emphasis, & .hljs-type, & .hljs-built_in, & .hljs-selector-attr, & .hljs-selector-pseudo, & .hljs-addition, & .hljs-variable, & .hljs-template-tag, & .hljs-template-variable": {
      color: "#a6e22e",
    },
    "& .hljs-title.class_, & .hljs-class .hljs-title": {
      color: "white",
    },
    "& .hljs-comment, & .hljs-quote, & .hljs-deletion, & .hljs-meta": {
      color: "#75715e",
    },
    "& .hljs-keyword, & .hljs-selector-tag, & .hljs-literal, & .hljs-doctag, & .hljs-title, & .hljs-section, & .hljs-type, & .hljs-selector-id": {
      fontWeight: "bold",
    },
    "@media screen and (max-width: 960px)": {
      "& h1, & h2": {
        fontSize: "24px",
        margin: "16px 0",
      },
    },
  },
}));
