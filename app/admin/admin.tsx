import { useEffect } from "react";
import { pages } from "app/api";
import { netlifyCmsConfig } from "app/admin/netlify-cms-config";
import { loadNetlifyCms } from "@egvelho/next-material/netlify-cms/load-netlify-cms";

export const admin = pages.admin.page(() => {
  useEffect(() => {
    loadNetlifyCms(netlifyCmsConfig);
  }, []);

  return <div />;
});
