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
import { useFetchLastMessage } from "../../../../hooks/useFetchMessage";
import { db } from "../../../../services/firebase.config";

type Props = {
  data: any;
};

const ChatCard = ({ data }: Props) => {
  const name = data?.fullname;
  const profile = data?.photoUrl;
  const [lastMessage, setLastMessage] = useState("");
  const [timestamp, setTimestamp] = useState<any>(null);
  const auth = useContext(AuthContext);
  const uid = auth?.uid;

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

    onSnapshot(q, (snap: any) => {
      var mess = "";
      var time: any = null;
      snap.docs.map((val: any) => {
        const { sender_id, receiver_id, message, timestamp } = val.data();
        if (sender_id === uid && receiver_id === data?.id) {
          mess = message;
          time = timestamp;
        } else if (sender_id === data?.id && receiver_id === uid) {
          mess = message;
          time = timestamp;
        }
      });
      setLastMessage(mess);
      setTimestamp(timeAgo(time.seconds * 1000));
    });
  }, []);

  return (
    <Link to={`/message/${data?.id}`}>
      <div className="shadow bg-gray-50 rounded-xl py-3 w-full flex items-center mb-4">
        <img src={profile} alt="" className="h-10 w-10 rounded-full mx-5" />

        <div className="w-full mr-5">
          <div className="flex items-center justify-between">
            <span className="block font-medium">{name}</span>
            <span className="text-xs text-gray-500">{timestamp}</span>
          </div>
          <span className="block text-gray-400 text-sm">{lastMessage}</span>
        </div>
      </div>
    </Link>
  );
};

//calculate time ago from date
const timeAgo = (date: any) => {
  const seconds = Math.floor((new Date().getTime() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  interval = Math.floor(seconds / 604800);
  if (interval > 1) {
    return interval + "w";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + "d";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + "h";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + "m";
  }
  return Math.floor(seconds) + "s";
};

export default ChatCard;
