import { envEntry } from "@egvelho/next-metadata";

export default function env() {
  return {
    generateAssetsOnBuild: envEntry<boolean>(
      "boolean",
      "GENERATE_ASSETS_ON_BUILD",
      process.env.GENERATE_ASSETS_ON_BUILD,
    ),
    nodeEnv: envEntry<"development" | "production">(
      "string",
      "NODE_ENV",
      process.env.NODE_ENV,
    ),
    pagination: envEntry<number>(
      "number",
      "NEXT_PUBLIC_PAGINATION",
      process.env.NEXT_PUBLIC_PAGINATION,
    ),
    url: envEntry<string>(
      "string",
      "NEXT_PUBLIC_URL",
      process.env.NEXT_PUBLIC_URL,
    ),
    firebase: {
      apiKey: envEntry<string>(
        "string",
        "NEXT_PUBLIC_FIREBASE_API_KEY",
        process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      ),
      authDomain: envEntry<string>(
        "string",
        "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      ),
      databaseURL: envEntry<string>(
        "string",
        "NEXT_PUBLIC_FIREBASE_DATABASE_URL",
        process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      ),
      projectId: envEntry<string>(
        "string",
        "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      ),
      storageBucket: envEntry<string>(
        "string",
        "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
        process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      ),
      messagingSenderId: envEntry<string>(
        "string",
        "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      ),
      appId: envEntry<string>(
        "string",
        "NEXT_PUBLIC_FIREBASE_APP_ID",
        process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      ),
      measurementId: envEntry<string>(
        "string",
        "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID",
        process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      ),
      publicVapidKey: envEntry<string>(
        "string",
        "NEXT_PUBLIC_FIREBASE_PUBLIC_VAPID_KEY",
        process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_VAPID_KEY,
      ),
    },
  };
}
