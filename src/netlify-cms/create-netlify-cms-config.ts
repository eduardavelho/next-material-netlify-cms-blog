import { CmsCollection, CmsConfig } from "netlify-cms-core";

export function createNetlifyCmsConfig({
  locale = "pt",
  localBackend = "http://localhost:8081/api/v1",
  collections = [] as CmsCollection[],
}) {
  return {
    config: {
      locale,
      backend: {
        name: "git-gateway",
      },
      local_backend:
        process.env.NODE_ENV === "development"
          ? {
              url: localBackend,
            }
          : {},
      publish_mode:
        process.env.NODE_ENV === "development"
          ? undefined
          : "editorial_workflow",
      load_config_file: false,
      media_folder: "public/images",
      public_folder: "/images",
      site_url:
        process.env.NEXT_PUBLIC_URL ??
        process.env.REACT_APP_URL ??
        process.env.URL,
      logo_url: "/android-chrome-96x96.png",
      show_preview_links: true,
      editor: {
        preview: false,
      },
      slug: {
        encoding: "unicode",
        clean_accents: true,
        sanitize_replacement: "-",
      },
      collections,
    } as CmsConfig,
  };
}
