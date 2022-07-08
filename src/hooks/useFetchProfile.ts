import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase.config";

const useFetchProfile = (userid: any) => {
  const [data, setData] = useState(null);

  const fetchProfile = async () => {
    const docRef = doc(db, "users", userid);

    onSnapshot(docRef, (snapshot: any) => {
      setData(snapshot.data());
    });
  };

  useEffect(() => {
    const docRef = doc(db, "users", userid);

    const unsub = onSnapshot(docRef, (snapshot: any) => {
      setData(snapshot.data());
    });

    return () => {
      unsub();
    };
  }, [userid]);

  return data;
};

export default useFetchProfile;
