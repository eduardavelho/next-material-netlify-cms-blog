import { document } from "@egvelho/next-material/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import app from "app.json";

export default document({
  ServerStyleSheets,
  lang: app.lang,
});
