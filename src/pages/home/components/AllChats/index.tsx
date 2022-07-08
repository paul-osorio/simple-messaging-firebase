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
        <div className="h-full">
          {loading ? (
            "Loading..."
          ) : data.length <= 0 ? (
            <div className="mt-10">
              <div className="flex justify-center">
                <img
                  src="https://www.svgrepo.com/show/15425/chat.svg"
                  className="w-52 h-52 opacity-50"
                  alt=""
                />
              </div>
              <span className="block text-center text-gray-400 text-lg">
                No Chats Yet
              </span>
            </div>
          ) : (
            data.map((item: any) => {
              return <ChatCard data={item} key={item?.id} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default AllChat;
