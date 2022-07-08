import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { db } from "../services/firebase.config";

const useCountData = () => {
  const [count, setCount] = useState(0);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const friendQuery = query(collection(db, "friends"));
    const unsub = onSnapshot(friendQuery, (snapshot) => {
      var count1: number = 0;
      snapshot.docs.forEach((doc) => {
        const { to, status } = doc.data();
        if (to === auth?.uid) {
          if (status === 0) {
            count1 += 1;
          }
        }
      });
      setCount(count1);
    });
    return () => unsub();
  }, [auth?.uid]);

  return count;
};

export default useCountData;
