import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";

export const setUserDocument = async (data: any) => {
  const uid = data.uid;
  const photoURL = data.photoURL;

  const docRef = doc(db, "users", uid);

  const value = await getDoc(docRef);
  if (!value.exists()) {
    await setDoc(docRef, {
      photoUrl: photoURL,
      fullname: data.displayName,
    });
  }
};
