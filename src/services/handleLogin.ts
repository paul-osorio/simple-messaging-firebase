import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { auth } from "./firebase.config";
import { setUserDocument } from "./handleDocuments";

const emailAndPasswordLogin = () => {
  const [errorname, setErrorname] = useState<string>("");
  const { setLoginError } = useContext(AuthContext);

  const login = async (values: any) => {
    try {
      const result: any = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (!result?.user.emailVerified) {
        signOut(auth);
        setLoginError("Email not verified");
      }
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
