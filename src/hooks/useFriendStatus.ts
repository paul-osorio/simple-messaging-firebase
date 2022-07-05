import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase.config";

export const useFriendStatus = (uid: any, friendid: any) => {
  const [status, setStatus] = useState("Add Friend");
  const [docID, setDocID] = useState("");
  const friendCollection = collection(db, "friendRequest");

  useEffect(() => {
    const unsubscribe = onSnapshot(friendCollection, (snapshot: any) => {
      snapshot.forEach((doc: any) => {
        const { from, to, status } = doc.data();
        if (from === uid && to === friendid) {
          setDocID(doc.id);
          if (status === 0) {
            setStatus("Cancel Request");
          } else if (status === 1) {
            setStatus("Unfriend");
          } else if (status === 2) {
            setStatus("Add Friend");
          }
        } else if (from === friendid && to === uid) {
          setDocID(doc.id);
          if (status === 0) {
            setStatus("Accept Request");
          } else if (status === 1) {
            setStatus("Unfriend");
          } else if (status === 2) {
            setStatus("Add Friend");
          }
        }
      });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return { status, docID };
};
