import {
  EmailAuthCredential,
  EmailAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebase.config";

interface AuthContextType {
  user: any;
  uid: any;
  setLoginError: (error: string) => void;
  loginError: any;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  uid: null,
  setLoginError: () => {},
  loginError: null,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [uid, setUID] = useState<any>(null);
  const [loginError, setLoginError] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        const uid = user.uid;
        const docRef = doc(db, "users", uid);

        const userdata = await getDoc(docRef);

        setUser(userdata.data());
        setUID(uid);
      } else {
        setUser(null);
        setUID(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    loginError,
    setLoginError,
    user,
    uid,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
