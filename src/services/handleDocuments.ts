import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";

export const setUserDocument = async (data: any, type?: string) => {
  const uid = data.uid;
  const user = data.providerData[0];

  const docRef = doc(db, "users", uid);

  const value = await getDoc(docRef);
  if (!value.exists()) {
    await setDoc(docRef, {
      photoUrl: user.photoURL,
      type: type,
      email: user.email,
      fullname: user.displayName,
      created_at: serverTimestamp(),
    });
  }
};
