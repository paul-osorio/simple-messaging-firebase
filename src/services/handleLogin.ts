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
    const result = await signInWithPopup(auth, provider);
    setUserDocument(result.user);
  } catch (error) {
    console.log(error);
  }
};

const twitterLogin = async () => {
  try {
    const provider = new TwitterAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUserDocument(result.user);
  } catch (error) {
    console.log(error);
  }
};

const facebookLogin = async () => {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUserDocument(result.user);
  } catch (error) {
    console.log(error);
  }
};

export { googleLogin, twitterLogin, facebookLogin };
