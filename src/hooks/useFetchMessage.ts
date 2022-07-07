import {
  collection,
  doc,
  getDoc,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useId, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { db } from "../services/firebase.config";

const useFetchMessages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useContext(AuthContext);
  const uid = auth?.uid;

  useEffect(() => {
    const q = query(
      collection(db, `users/${uid}/conversations`),
      orderBy("timestamp", "desc")
    );

    onSnapshot(q, async (snap: any) => {
      const data = snap.docs.map(async (val: any) => {
        const userRef = doc(db, "users", val.id);
        const details: any = await getDoc(userRef);
        return {
          id: val.id,
          ...details.data(),
        };
      });
      const result: any = await Promise.all(data);
      setData(result);
      setLoading(false);
    });
  }, [uid]);

  return { data, loading };
};

const useFetchLastMessage = (friendid: any) => {
  const [lastMessage, setLastMessage] = useState("");
  const [timestamp, setTimestamp] = useState(null);
  const auth = useContext(AuthContext);
  const uid = auth?.uid;

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "asc"),
      limitToLast(1)
    );

    onSnapshot(q, (snap: any) => {
      var mess = "";
      var time = null;
      snap.docs.map((val: any) => {
        const { sender_id, receiver_id, message, timestamp } = val.data();
        if (sender_id === uid && receiver_id === friendid) {
          mess = message;
          time = timestamp;
        } else if (sender_id === friendid && receiver_id === uid) {
          mess = message;
          time = timestamp;
        }
      });
      setLastMessage(mess);
      setTimestamp(time);
    });
  }, []);

  return { lastMessage, timestamp };
};

export { useFetchLastMessage };

export default useFetchMessages;
