import { collection, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { db } from "../services/firebase.config";

const useFetchFriends = () => {
  const auth = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const friendCollection = collection(db, "friends");
  const uid = auth.uid;

  useEffect(() => {
    const unsub = onSnapshot(friendCollection, (snapshot: any) => {
      const data: any = [];
      snapshot.docs.map((doc: any) => {
        const { from, to, status } = doc.data();
        if (from === uid) {
          if (status === 1) {
            data.push({
              id: doc.id,
              friendid: to,
              status: status,
            });
          }
        } else if (to === uid) {
          if (status === 1) {
            data.push({
              id: doc.id,
              friendid: from,
              status: status,
            });
          }
        }
      });
      setFriends(data);
    });
    return () => {
      unsub();
    };
  }, []);

  return friends;
};

export default useFetchFriends;
