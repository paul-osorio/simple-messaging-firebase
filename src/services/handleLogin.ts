import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase.config";
import { setUserDocument } from "./handleDocuments";

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

export { googleLogin, twitterLogin, facebookLogin };
