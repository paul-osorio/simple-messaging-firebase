import { SendIcon } from "../../../../assets/svg/SendIcon";

const MessageTextfield = () => {
  return (
    <div className="h-20 flex items-center justify-center mx-2 ">
      <div className="rounded-full px-2 py-1 pl-4 w-full  bg-gray-100  flex items-center">
        <input
          type="text"
          className="py-2 w-full text-sm bg-gray-100 outline-none"
          placeholder="Type a message..."
        />
        <div
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
