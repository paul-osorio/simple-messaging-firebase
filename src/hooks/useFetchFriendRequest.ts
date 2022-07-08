import { collection, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { db } from "../services/firebase.config";

const useFetchFriendRequest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const friendCollection = collection(db, "friends");

    onSnapshot(friendCollection, (snapshot) => {
      const data: any = snapshot.docs
        .map((doc) => {
          const { to, status } = doc.data();
          if (to === auth?.uid) {
            if (status === 0) {
              return {
                id: doc.id,
                ...doc.data(),
              };
            }
          }
        })
        .filter((doc) => doc !== undefined);
      setData(data);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};

export default useFetchFriendRequest;
