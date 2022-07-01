import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase.config";

const googleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const uid = result.user.uid;
    const photoURL = result.user.photoURL;
    const firstname = result.user.photoURL;

    const docRef = doc(db, "users", uid);

    const value = await getDoc(docRef);
    if (value.exists()) {
      console.log("User already exists");
    } else {
      console.log("User does not exist");
    }
  } catch (error) {
    console.log(error);
  }
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
