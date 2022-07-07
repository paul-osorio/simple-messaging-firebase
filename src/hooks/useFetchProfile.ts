import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase.config";

const useFetchProfile = (userid: any) => {
  const [data, setData] = useState(null);

  const fetchProfile = async () => {
    const docRef = doc(db, "users", userid);
    const snap: any = await getDoc(docRef);

    setData(snap.data());
  };

  useEffect(() => {
    fetchProfile();
  }, [userid]);

  return data;
};

export default useFetchProfile;
