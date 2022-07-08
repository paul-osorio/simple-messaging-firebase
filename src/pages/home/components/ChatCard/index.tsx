import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import useTimeAgo from "../../../../hooks/useTimeAgo";
import { db } from "../../../../services/firebase.config";

type Props = {
  data: any;
};

const ChatCard = ({ data }: Props) => {
  const name = data?.fullname;
  const profile = data?.photoUrl;
  const [messageData, setMessageData] = useState<any>({});
  const [lastMessage, setLastMessage] = useState("");
  const [timestamp, setTimestamp] = useState<any>(null);
  const timeAgo = useTimeAgo();
  const auth = useContext(AuthContext);
  const uid = auth?.uid;

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

    onSnapshot(q, (snap: any) => {
      var messagedata = {};

      snap.docs.map((val: any) => {
        const { sender_id, receiver_id, message, timestamp, isRead } =
          val.data();
        if (sender_id === uid && receiver_id === data?.id) {
          messagedata = {
            message,
            timestamp: timeAgo(timestamp.seconds * 1000),
            mymessage: true,
            isRead: true,
          };
        } else if (sender_id === data?.id && receiver_id === uid) {
          messagedata = {
            message,
            mymessage: false,
            timestamp: timeAgo(timestamp.seconds * 1000),
            isRead,
          };
        }
      });
      setMessageData(messagedata);
    });
  }, []);

  return (
    <Link to={`/message/${data?.id}`}>
      <div
        className={
          (messageData.isRead
            ? "bg-gray-50 border border-gray-50"
            : "bg-amber-50 border-amber-200 border") +
          " shadow  rounded-xl py-3 w-full flex items-center mb-4"
        }
      >
        <img src={profile} alt="" className="h-10 w-10 rounded-full mx-5" />

        <div className="w-full mr-5">
          <div className="flex items-center justify-between">
            <span className="block font-medium">{name}</span>
            <span className="text-xs text-gray-500">
              {messageData.timestamp}
            </span>
          </div>
          <span
            className={
              (messageData.isRead ? "text-gray-400" : "font-bold text-black") +
              " block  text-sm"
            }
          >
            {messageData.mymessage ? "You: " : ""} {messageData.message}
          </span>
        </div>
      </div>
    </Link>
  );
};

//calculate time ago from date

export default ChatCard;
