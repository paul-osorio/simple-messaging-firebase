type MessageProps = {
  message: string;
  timestamp: any;
  myMessage: boolean;
};

const MessageBox = ({ message, myMessage, timestamp }: MessageProps) => {
  const date = new Date(timestamp?.seconds * 1000);
  const stamp = convertDate(date);

  return (
    <div
      className={
        "w-full flex  px-4 mb-3 " +
        (myMessage ? "justify-end" : "justify-start")
      }
    >
      <div
        data-timestamp={stamp}
        className={
          "px-3  py-2 relative message-timestamp  shadow break-words max-w-[80%] rounded-t-3xl text-sm " +
          (myMessage
            ? "rounded-bl-3xl bg-blue-200 timestamp-r"
            : "rounded-br-3xl bg-gray-100 timestamp-l")
        }
      >
        {message}
      </div>
    </div>
  );
};

//convert firebase timestamp to readable date
const convertDate = (timestamp: any) => {
  const now = new Date();
  //calculate if date is less than 1 week
  if (now.getTime() - timestamp.getTime() < 604800000) {
    //calculate if date is less than 1 day
    if (now.getTime() - timestamp.getTime() < 86400000) {
      return timestamp.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    } else {
      return timestamp.toLocaleString("en-US", {
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    }
  } else {
    return timestamp.toLocaleString("en-US", {
      month: "at",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }
};

//calcul

export default MessageBox;
