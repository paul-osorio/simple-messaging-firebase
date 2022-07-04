import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { string } from "yup";
import { auth, db } from "../services/firebase.config";

interface AuthContextType {
  user: any;
  uid: any;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  uid: null,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [uid, setUID] = useState<any>(null);

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
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    uid,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
