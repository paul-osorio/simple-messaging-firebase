import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase.config";

const useFetchFriendProfile = (friend: any) => {
  const [friendList, setFriendList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data2 = friend.map(async (val: any) => {
      const docRef = doc(db, "users", val.friendid);
      const friend: any = await getDoc(docRef);
      return {
        docID: val.id,
        id: friend.id,
        ...friend.data(),
      };
    });
    Promise.all(data2).then((data: any) => {
      console.log(data);
      setFriendList(data);
    });
    setIsLoading(false);
  }, [friend]);

  return { friendList, isLoading };
};
export default useFetchFriendProfile;
