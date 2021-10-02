import { envEntry } from "app/utils/env-entry";

export function env() {
  return {
    runScriptsInDevelopment: envEntry<boolean>(
      "boolean",
      "RUN_SCRIPTS_IN_DEVELOPMENT",
      process.env.RUN_SCRIPTS_IN_DEVELOPMENT
    ),
    generateAssetsOnBuild: envEntry<boolean>(
      "boolean",
      "GENERATE_ASSETS_ON_BUILD",
      process.env.GENERATE_ASSETS_ON_BUILD
    ),
    resizeImageAssetsOnBuild: envEntry<boolean>(
      "boolean",
      "RESIZE_IMAGE_ASSETS_ON_BUILD",
      process.env.RESIZE_IMAGE_ASSETS_ON_BUILD
    ),
    nodeEnv: envEntry<"development" | "production">(
      "string",
      "NODE_ENV",
      process.env.NODE_ENV
    ),
    pagination: envEntry<number>(
      "number",
      "NEXT_PUBLIC_PAGINATION",
      process.env.NEXT_PUBLIC_PAGINATION
    ),
    url: envEntry<string>(
      "string",
      "NEXT_PUBLIC_URL",
      process.env.NEXT_PUBLIC_URL
    ),
  };
}
