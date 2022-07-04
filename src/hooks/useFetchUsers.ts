import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase.config";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchuser = async () => {
    const querySnapshot = collection(db, "users");

    onSnapshot(querySnapshot, (snapshot) => {
      const users: any = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(users);
    });
  };

  useEffect(() => {
    fetchuser();
  }, []);

  return { users, setUsers };
};

export default useFetchUsers;
