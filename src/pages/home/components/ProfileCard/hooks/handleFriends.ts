import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../../../services/firebase.config";

export const handleAddFriend = async (uid: any, friendid: any) => {
  const friendCollection = collection(db, "friendRequest");
  const friendRef = doc(friendCollection);

  await setDoc(friendRef, {
    from: uid,
    to: friendid,
    status: 0, //pending request
    created_at: serverTimestamp(),
  });
};

export const handleCancelRequest = async (docID: any) => {
  const docRef = doc(db, "friendRequest", docID);
  await updateDoc(docRef, {
    status: 2, //declined
  });
  setTimeout(async () => {
    await deleteDoc(docRef);
  }, 1000);
};

export const handleAcceptRequest = async (docID: any) => {
  const docRef = doc(db, "friendRequest", docID);

  await updateDoc(docRef, {
    status: 1, //accepted
  });
};
