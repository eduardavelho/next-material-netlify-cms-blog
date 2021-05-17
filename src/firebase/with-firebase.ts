import { useEffect } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";

import "firebase/messaging";
import "firebase/analytics";
import "firebase/auth";

interface Options {
  analytics: boolean;
  onUserLoaded: (user: firebase.User | undefined) => void;
}

async function initializeApp({ analytics, onUserLoaded }: Options) {
  if (firebase.apps.length) {
    return;
  }

  firebase.initializeApp(firebaseConfig);
  analytics && firebase.analytics.isSupported() && firebase.analytics();
  onUserLoaded &&
    firebase.auth().onIdTokenChanged(async (user) => {
      if (user) {
        onUserLoaded(user);
      } else {
        onUserLoaded(undefined);
      }
    });
}

export function WithFirebase({
  analytics = false,
  onUserLoaded = (user: firebase.User | undefined) => {},
}: Partial<Options> = {}) {
  useEffect(() => {
    initializeApp({ analytics, onUserLoaded });
  }, []);
  return null;
}
