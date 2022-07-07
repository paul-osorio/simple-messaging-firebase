import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import useFetchMessages from "../../../../hooks/useFetchMessage";
import { db } from "../../../../services/firebase.config";
import ChatCard from "../ChatCard";

const AllChat = () => {
  const { data, loading } = useFetchMessages();

  return (
    <div className="">
      <div
        className="px-5  overflow-auto homescrollbar"
        style={{ height: "calc(100% - 48px)" }}
      >
        <div className="">
          {loading && "Loading..."}

          {data.map((item: any) => {
            return <ChatCard data={item} key={item?.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllChat;
