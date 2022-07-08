import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const useHandleRegister = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const handleRegister = async (values: any) => {
    try {
      const data = {
        fullname: values.fullname,
        email: values.email,
        type: "emailandpassword",
        photoUrl:
          "https://avatar.oxro.io/avatar.svg?fontSize=200&name=" +
          values.fullname,
        created_at: serverTimestamp(),
      };
      const dAuth: any = getAuth();
      const register = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      navigate("/verifyemail");

      const uid = register.user.uid;

      const docRef = doc(db, "users", uid);
      await setDoc(docRef, data);

      sendEmailVerification(dAuth.currentUser).then(() => {
        console.log("Email sent.");
      });
      signOut(auth);
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
