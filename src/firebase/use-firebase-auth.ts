import firebase from "firebase/app";
import { useState, useEffect } from "react";
import firebaseConfig from "./firebase-config";

export type UseFirebaseAuth = {
  loading: boolean;
  requestCode: (phoneNumber: string) => Promise<boolean>;
  verifyCode: (code: string) => Promise<string | undefined>;
};

async function requestCode(phoneNumber: string, countryPrefix: string = "+55") {
  let success = false;

  const container = document.createElement("div");
  const body = document.querySelector("body");

  container.id = `recaptcha-container-${Math.random() * 255}`.replace(".", "-");
  container.style.display = "none";
  body?.appendChild(container);

  const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(container.id, {
    size: "invisible",
    callback: () => (success = true),
  });

  const id = await recaptchaVerifier.render();
  // @ts-ignore
  grecaptcha.execute(id);

  while (!success) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  try {
    const confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(
        `${countryPrefix}${phoneNumber.replace(/\D+/g, "")}`,
        recaptchaVerifier
      );

    return confirmationResult;
  } catch {
    return undefined;
  } finally {
    const containerElement = document.querySelector(`#${container.id}`);
    containerElement && body?.removeChild(containerElement);
  }
}

async function verifyCode({
  confirmationResult,
  code,
}: {
  confirmationResult: firebase.auth.ConfirmationResult;
  code: string;
}) {
  try {
    const result = await confirmationResult.confirm(code);
    const token = await result.user?.getIdToken();
    return token;
  } catch {
    return undefined;
  }
}

export function useFirebaseAuth(): UseFirebaseAuth {
  useEffect(() => {
    firebaseConfig.languageCode &&
      (firebase.auth().languageCode = firebaseConfig.languageCode);
  }, []);

  const [state, setState] = useState({
    loading: false,
    confirmationResult: undefined as
      | firebase.auth.ConfirmationResult
      | undefined,
  });

  return {
    loading: state.loading,
    async requestCode(phoneNumber: string) {
      setState({
        ...state,
        loading: true,
      });

      const confirmationResult = await requestCode(phoneNumber);

      setState({
        ...state,
        loading: false,
        confirmationResult,
      });

      return !!confirmationResult;
    },
    async verifyCode(code: string) {
      setState({
        ...state,
        loading: true,
      });

      const token =
        state.confirmationResult &&
        (await verifyCode({
          code,
          confirmationResult: state.confirmationResult,
        }));

      setState({
        ...state,
        loading: false,
      });

      return token;
    },
  };
}
