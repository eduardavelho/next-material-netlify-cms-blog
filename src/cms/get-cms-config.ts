import {
  CmsConfig as NetlifyCmsConfig,
  CmsCollection,
  CmsBackend,
} from "netlify-cms-core";

export interface CmsConfig {
  collections: CmsCollection[];
  locale: string;
  backend: CmsBackend;
  localBackendUrl?: string;
  enableEditorialWorkflow?: boolean;
  showPreviewLinks?: boolean;
}

export function getCmsConfig({
  collections,
  locale,
  backend,
  localBackendUrl = `${process.env.NEXT_PUBLIC_URL}/api/local-cms`,
  enableEditorialWorkflow = true,
  showPreviewLinks = true,
}: CmsConfig) {
  return {
    config: {
      locale: locale.slice(0, 2),
      backend,
      local_backend:
        process.env.NODE_ENV === "development"
          ? {
              url: localBackendUrl,
            }
          : {},
      publish_mode:
        process.env.NODE_ENV === "development" || !enableEditorialWorkflow
          ? undefined
          : "editorial_workflow",
      load_config_file: false,
      media_folder: "public/images",
      public_folder: "/images",
      site_url: process.env.NEXT_PUBLIC_URL,
      logo_url: "/android-chrome-96x96.png",
      show_preview_links: showPreviewLinks,
      editor: {
        preview: false,
      },
      slug: {
        encoding: "unicode",
        clean_accents: true,
        sanitize_replacement: "-",
      },
      collections,
    } as NetlifyCmsConfig,
  };
}
