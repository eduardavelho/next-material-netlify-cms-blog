import app from "app.json";
import createTheme from "@material-ui/core/styles/createTheme";

export const theme = createTheme({
  palette: {
    primary: {
      main: app.primaryColor,
    },
    secondary: {
      main: app.secondaryColor,
    },
    background: {
      default: app.backgroundColor,
    },
  },
});
