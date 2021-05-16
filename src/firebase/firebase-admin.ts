import {
  app,
  auth,
  initializeApp,
  credential,
  messaging,
} from "firebase-admin";

export type Message<Data extends messaging.Message["data"]> = {
  title: string;
  body: string;
  imageUrl: string;
  data: Data;
};

let firebaseAdminApp: app.App;

function getFirebaseAdminApp() {
  const firebaseConfig = {
    type: process.env.FIREBASE_TYPE,
    projectId:
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ??
      process.env.REACT_APP_FIREBASE_PROJECT_ID ??
      process.env.FIREBASE_PROJECT_ID,
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    clientId: process.env.FIREBASE_CLIENT_ID,
    authUri: process.env.FIREBASE_AUTH_URI,
    tokenUri: process.env.FIREBASE_TOKEN_URI,
    authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    clientX509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    databaseURL:
      process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ??
      process.env.REACT_APP_FIREBASE_DATABASE_URL ??
      process.env.FIREBASE_DATABASE_URL,
  };

  return initializeApp({
    credential: credential.cert(firebaseConfig),
    databaseURL: firebaseConfig.databaseURL,
  });
}

if (process.env.NODE_ENV === "production") {
  firebaseAdminApp = getFirebaseAdminApp();
} else {
  if (!(global as any).firebaseAdminApp) {
    (global as any).firebaseAdminApp = getFirebaseAdminApp();
  }
  firebaseAdminApp = (global as any).firebaseAdminApp;
}

async function isValid(token?: string): Promise<boolean> {
  if (!token) {
    return false;
  }

  try {
    const decodedToken = await firebaseAdminApp.auth().verifyIdToken(token);
    return true;
  } catch {
    return false;
  }
}

async function decode(
  token?: string
): Promise<auth.DecodedIdToken | undefined> {
  if (!token) {
    return undefined;
  }

  try {
    const decodedToken = await firebaseAdminApp.auth().verifyIdToken(token);
    return decodedToken;
  } catch {
    return undefined;
  }
}

async function send<Data extends messaging.Message["data"]>(
  token: string,
  { title, body, imageUrl, data }: Message<Data>
) {
  await firebaseAdminApp.messaging().send({
    token,
    notification: {
      title,
      body,
      imageUrl,
    },
    data,
  });
}

async function sendToMany<Data extends messaging.Message["data"]>(
  tokens: string[],
  { title, body, imageUrl, data }: Message<Data>
) {
  await firebaseAdminApp.messaging().sendMulticast({
    tokens,
    notification: {
      title,
      body,
      imageUrl,
    },
    data,
  });
}

export class FirebaseToken {
  static isValid = isValid;
  static decode = decode;
}

export class FirebaseNotification {
  static send = send;
  static sendToMany = sendToMany;
}
