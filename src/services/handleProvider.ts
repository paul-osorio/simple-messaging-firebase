import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase.config";

const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
};

const twitterLogin = async () => {
  const provider = new TwitterAuthProvider();
  const result = await signInWithPopup(auth, provider);
};

const facebookLogin = async () => {
  const provider = new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider);
};

export { googleLogin, twitterLogin, facebookLogin };
