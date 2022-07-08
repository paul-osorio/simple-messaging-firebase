import { doc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import { AuthContext } from "../../context/AuthProvider";
import useMessages from "../../hooks/useMessages";
import { db } from "../../services/firebase.config";
import MessageBox from "./components/MessageBox";
import MessageTextfield from "./components/MessageTextfield";
import TopBar from "./components/TopBar";

const Message = () => {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const { conversation }: any = useMessages(auth?.uid, id);
  const scrollRef: any = useRef(null);
  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const updateRead = async () => {
    const last = conversation[conversation.length - 1];
    if (last?.docID) {
      if (last?.receiver_id === auth?.uid) {
        const lastRef = doc(db, "messages", last?.docID);

        await updateDoc(lastRef, { isRead: true });
      }
    }
  };
  useEffect(scrollToBottom, [conversation]);

  useEffect(() => {
    updateRead();
  }, [conversation]);

  return (
    <MainContainer>
      <div className="bg-gradient-to-b from-indigo-700 to-indigo-500 h-full laptop:rounded-3xl">
        <TopBar />
        <div
          className="bg-white rounded-t-3xl relative laptop:rounded-3xl pt-7 flex justify-center"
          style={{ height: "calc(100% - 80px)" }}
        >
          <div className="h-full relative w-full">
            <div
              className="overflow-auto homescrollbar"
              style={{ height: "calc(100% - 80px)" }}
            >
              {conversation.length > 0 ? (
                conversation.map((data: any, index: any) => {
                  return (
                    <MessageBox
                      key={index}
                      message={data?.message}
                      timestamp={data?.timestamp}
                      myMessage={data?.sender_id === auth.uid}
                    />
                  );
                })
              ) : (
                <div className="text-center text-gray-500">No messages yet</div>
              )}
              <div ref={scrollRef}></div>
            </div>
            <MessageTextfield />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Message;
