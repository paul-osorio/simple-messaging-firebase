import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth as userAuth } from "../services/firebase.config";

export default function useAuth() {
  const [auth, setAuth] = useState<any>({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(userAuth, (user) =>
      setAuth({
        user: user ?? false,
      })
    );
    return unsubscribe;
  }, [userAuth]);

  return auth;
}
