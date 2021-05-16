export function loadFirebase({
  outPath = "public",
}: { outPath?: string } = {}) {
  if (typeof window !== "undefined") {
    return;
  }

  eval('require("dotenv").config()');
  const fs = eval('require("fs")');
  const path = eval('require("path")');
  const https = eval('require("https")');
  const packageJson = eval('require("./package.json")');

  const {
    NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    NEXT_PUBLIC_FIREBASE_PUBLIC_VAPID_KEY,
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_DATABASE_URL,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID,
    REACT_APP_FIREBASE_MEASUREMENT_ID,
    REACT_APP_FIREBASE_PUBLIC_VAPID_KEY,
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
    FIREBASE_PUBLIC_VAPID_KEY,
  } = process.env;

  const firebaseConfig = {
    apiKey:
      NEXT_PUBLIC_FIREBASE_API_KEY ||
      REACT_APP_FIREBASE_API_KEY ||
      FIREBASE_API_KEY,
    authDomain:
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
      REACT_APP_FIREBASE_AUTH_DOMAIN ||
      FIREBASE_AUTH_DOMAIN,
    databaseURL:
      NEXT_PUBLIC_FIREBASE_DATABASE_URL ||
      REACT_APP_FIREBASE_DATABASE_URL ||
      FIREBASE_DATABASE_URL,
    projectId:
      NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
      REACT_APP_FIREBASE_PROJECT_ID ||
      FIREBASE_PROJECT_ID,
    storageBucket:
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
      REACT_APP_FIREBASE_STORAGE_BUCKET ||
      FIREBASE_STORAGE_BUCKET,
    messagingSenderId:
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
      FIREBASE_MESSAGING_SENDER_ID,
    appId:
      NEXT_PUBLIC_FIREBASE_APP_ID ||
      REACT_APP_FIREBASE_APP_ID ||
      FIREBASE_APP_ID,
    measurementId:
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ||
      REACT_APP_FIREBASE_MEASUREMENT_ID ||
      FIREBASE_MEASUREMENT_ID,
    publicVapidKey:
      NEXT_PUBLIC_FIREBASE_PUBLIC_VAPID_KEY ||
      REACT_APP_FIREBASE_PUBLIC_VAPID_KEY ||
      FIREBASE_PUBLIC_VAPID_KEY,
  };

  if (Object.values(firebaseConfig).every((entry) => entry)) {
    console.log("Loading firebase assets...");

    const firebaseMessagingSw = `importScripts("/firebase-app.js");importScripts("/firebase-messaging.js");firebase.initializeApp(${JSON.stringify(
      firebaseConfig
    )});const messaging = firebase.messaging();`;

    const firebaseVersion = packageJson.dependencies.firebase
      .replace("^", "")
      .replace("~", "");

    const firebaseMessagingFile = fs.createWriteStream(
      path.join(outPath, "firebase-messaging.js")
    );
    const firebaseAppFile = fs.createWriteStream(
      path.join(outPath, "firebase-app.js")
    );

    console.log(`Using firebase version ${firebaseVersion}`);
    console.log(`Writing to ${outPath}/firebase-messaging.js...`);

    https.get(
      `https://www.gstatic.com/firebasejs/${firebaseVersion}/firebase-messaging.js`,
      (response: any) => {
        response.pipe(firebaseMessagingFile);
      }
    );

    console.log(`Writing to ${outPath}/firebase-app.js...`);

    https.get(
      `https://www.gstatic.com/firebasejs/${firebaseVersion}/firebase-app.js`,
      (response: any) => {
        response.pipe(firebaseAppFile);
      }
    );

    console.log(`Writing to ${outPath}/firebase-messaging-sw.js...`);

    fs.writeFileSync(
      path.join(outPath, "firebase-messaging-sw.js"),
      firebaseMessagingSw
    );

    console.log("Firebase load success!");
  }
}
