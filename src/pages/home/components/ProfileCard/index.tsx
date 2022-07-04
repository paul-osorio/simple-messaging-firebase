import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import useAuth from "../../../../hooks/useAuth";
import { db } from "../../../../services/firebase.config";

const ProfileCard = ({ user }: { user: any }) => {
  const [isAdded, setAdded] = useState(false);
  const auth = useContext(AuthContext);
  const uid = auth.uid;
  const friendRef = doc(db, `users/${uid}/friends`, user.id);
  const friendRequestRef = doc(db, `users/${user.id}/friendRequest`, uid);

  const getFriend = async () => {
    const docSnap = await getDoc(friendRef);

    if (docSnap.exists()) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  };

  const addfriend = async () => {
    await setDoc(friendRef, {
      ...user,
      isAccepted: false,
    });

    await setDoc(friendRequestRef, {
      ...user,
      isAccepted: false,
    });
    setAdded(true);
  };

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <div className="w-full px-3 mb-3">
      <div className="bg-gray-100 rounded-lg flex justify-between">
        <div className="flex py-2 px-2 items-center">
          <img src={user.photoUrl} className="rounded-full h-10 w-10" alt="" />
          <div className="ml-2">
            <p className="font-medium leading-3">{user.fullname}</p>
            <p className="text-[12px] text-gray-500">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={addfriend}
            className="disabled:bg-gray-400 text-sm hover:bg-orange-700 active: bg-orange-600 text-white mx-2 rounded px-2 p-1"
            disabled={isAdded}
          >
            {isAdded ? "Added" : "Add friend"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
