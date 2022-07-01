import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase.config";
import { doc, setDoc } from "firebase/firestore";
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
