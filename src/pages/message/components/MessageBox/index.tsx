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
          "p-3 break-words max-w-[80%] rounded-t-3xl " +
          (myMessage
            ? "rounded-bl-3xl bg-blue-300"
            : "rounded-br-3xl bg-gray-300")
        }
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBox;
