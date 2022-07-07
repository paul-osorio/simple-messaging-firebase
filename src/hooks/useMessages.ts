import {
  collection,
  doc,
  getDoc,
  limit,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase.config";

const useMessages = (uid: any, friendid: any) => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const sendMessage = async () => {
    setMessage("");
    if (message.length > 0 || message !== "") {
      const messageRef = doc(collection(db, "messages"));

      const data = {
        sender_id: uid,
        receiver_id: friendid,
        message: message,
        isRead: false,
        timestamp: serverTimestamp(),
      };

      await setDoc(messageRef, data);

      const convoRef = doc(db, `users/${uid}/conversations`, friendid);
      const convoRef2 = doc(db, `users/${friendid}/conversations`, uid);

      await setDoc(convoRef, {
        timestamp: serverTimestamp(),
      });

      await setDoc(convoRef2, {
        timestamp: serverTimestamp(),
      });
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      limitToLast(25),
      orderBy("timestamp", "asc")
    );
    const unsub = onSnapshot(q, (snap: any) => {
      const data2: any = [];
      snap.docs.map((doc: any) => {
        if (
          doc.data().sender_id === uid &&
          doc.data().receiver_id === friendid
        ) {
          data2.push({
            ...doc.data(),
          });
        } else if (
          doc.data().sender_id === friendid &&
          doc.data().receiver_id === uid
        ) {
          data2.push({
            ...doc.data(),
          });
        }
      });
      setConversation(data2);
    });
    return () => unsub();
  }, [uid]);

  return { message, setMessage, sendMessage, conversation };
};

export default useMessages;
