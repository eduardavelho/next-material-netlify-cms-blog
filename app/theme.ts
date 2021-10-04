import app from "app.json";
import { createTheme } from "@egvelho/next-mui/utils/create-theme";

export const theme = createTheme({
  primaryColor: app.primaryColor,
  secondaryColor: app.secondaryColor,
  backgroundColor: app.backgroundColor,
});
