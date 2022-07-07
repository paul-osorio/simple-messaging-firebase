import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SendIcon } from "../../../../assets/svg/SendIcon";
import { AuthContext } from "../../../../context/AuthProvider";
import useMessages from "../../../../hooks/useMessages";

const MessageTextfield = () => {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const { message, setMessage, sendMessage } = useMessages(auth.uid, id);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="h-20 flex items-center justify-center mx-2 ">
      <div className="rounded-full px-2 py-1 pl-4 w-full  bg-gray-100  flex items-center">
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          className="py-2 w-full text-sm bg-gray-100 outline-none"
          placeholder="Type a message..."
          value={message}
          onKeyDown={handleKeyDown}
        />
        <div
          onClick={sendMessage}
          className="bg-gray-500 active:scale-90 scale-95 p-2 rounded-full hover:bg-gray-600 transition"
          role="button"
        >
          <SendIcon className="h-5 w-5 fill-white" />
        </div>
      </div>
    </div>
  );
};

export default MessageTextfield;
