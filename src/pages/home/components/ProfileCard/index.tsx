import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import { useFriendStatus } from "../../../../hooks/useFriendStatus";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { db } from "../../../../services/firebase.config";
import {
  handleAcceptRequest,
  handleAddFriend,
  handleCancelRequest,
} from "./hooks/handleFriends";

const ProfileCard = ({ user }: { user: any }) => {
  const auth = useContext(AuthContext);
  const uid = auth.uid;
  const { docID, status } = useFriendStatus(uid, user.id);

  const onClick = async () => {
    if (status === "Add Friend") {
      handleAddFriend(uid, user.id);
    } else if (status === "Cancel Request") {
      handleCancelRequest(docID);
    } else if (status === "Unfriend") {
      handleCancelRequest(docID);
    }
  };

  return (
    <div className="w-full px-3 mb-3">
      <div className="bg-white border hover:border-orange-200 rounded-xl flex justify-between">
        <div className="flex py-4 px-2 items-center">
          <img src={user?.photoUrl} className="rounded-full h-10 w-10" alt="" />
          <div className="ml-2">
            <p className="font-medium leading-3 text-gray-600">
              {user.fullname}
            </p>
            <p className="text-[12px] text-gray-500">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          {status === "Accept Request" ? (
            <RespondButton docID={docID} />
          ) : (
            <button
              onClick={onClick}
              className={
                (status === "Unfriend"
                  ? "hover:bg-gray-300 bg-gray-200 text-gray=800"
                  : status === "Cancel Request"
                  ? "hover:bg-red-300 bg-red-200 text-red-900"
                  : "hover:bg-orange-300 bg-orange-200 text-orange-800") +
                " text-xs  font-bold  mx-2 rounded px-3 py-2"
              }
            >
              {status}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const RespondButton = ({ docID }: { docID: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref: any = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  const accept = () => {
    handleAcceptRequest(docID);
    setIsOpen(false);
  };
  const decline = () => {
    handleCancelRequest(docID);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-indigo-100  text-sm font-bold hover:bg-indigo-200 text-indigo-900 rounded px-3 py-2 mx-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        Respond
      </button>
      {isOpen && (
        <div
          ref={ref}
          className="absolute bg-white  py-2 w-32 right-0 rounded-lg shadow shadow-gray-300 top-10 font-normal"
        >
          <button
            onClick={accept}
            className="w-full text-center active:bg-gray-200 text-sm text-gray-800 py-2 hover:bg-gray-100"
          >
            Accept Request
          </button>
          <button
            onClick={decline}
            className="w-full text-center active:bg-gray-200 text-sm text-gray-800 py-2 hover:bg-gray-100"
          >
            Decline Request
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
