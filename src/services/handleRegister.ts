import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "./firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";

const useHandleRegister = () => {
  const [error, setError] = useState<string>("");

  const handleRegister = async (values: any) => {
    try {
      const register = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const uid = register.user.uid;

      const docRef = doc(db, "users", uid);
      const data = {
        fullname: values.fullname,
        email: values.email,
        type: "emailandpassword",
        photoUrl:
          "https://avatar.oxro.io/avatar.svg?fontSize=200&name=" +
          values.fullname,
        created_at: serverTimestamp(),
      };

      await setDoc(docRef, data);
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Email already in use");
          break;
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        default:
          setError("Unknown error");
          break;
      }
    }
  };

  return { handleRegister, error, setError };
};

export default useHandleRegister;
