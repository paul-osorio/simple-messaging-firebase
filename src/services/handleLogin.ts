import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase.config";
import { setUserDocument } from "./handleDocuments";

const emailAndPasswordLogin = () => {
  const [errorname, setErrorname] = useState<string>("");

  const login = async (values: any) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        setErrorname("user-not-found");
      } else if (err.code === "auth/wrong-password") {
        setErrorname("wrong-password");
      }
    }
  };

  return { login, errorname, setErrorname };
};

const googleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    const result = await signInWithPopup(auth, provider);

    setUserDocument(result.user, "google");
  } catch (error) {
    console.log(error);
  }
};

const twitterLogin = async () => {
  try {
    const provider = new TwitterAuthProvider();
    provider.addScope("email");
    const result = await signInWithPopup(auth, provider);

    console.log(result);

    setUserDocument(result.user, "twitter");
  } catch (error) {
    console.log(error);
  }
};

const facebookLogin = async () => {
  try {
    const provider = new FacebookAuthProvider();
    provider.addScope("email");

    const result = await signInWithPopup(auth, provider);
    setUserDocument(result.user, "facebook");
  } catch (error) {
    console.log(error);
  }
};

export { googleLogin, twitterLogin, facebookLogin, emailAndPasswordLogin };
