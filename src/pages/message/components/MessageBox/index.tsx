type MessageProps = {
  message: string;
  myMessage: boolean;
};

const MessageBox = ({ message, myMessage }: MessageProps) => {
  return (
    <div
      className={
        "w-full flex  px-4 mb-3 " +
        (myMessage ? "justify-end" : "justify-start")
      }
    >
      <div
        className={
          "px-3 py-2 shadow break-words max-w-[80%] rounded-t-3xl text-sm " +
          (myMessage
            ? "rounded-bl-3xl bg-blue-200"
            : "rounded-br-3xl bg-gray-100")
        }
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBox;
