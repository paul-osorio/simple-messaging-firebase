import ChatCard from "../ChatCard";

const AllChat = () => {
  return (
    <div className="">
      <div
        className="px-5  overflow-auto homescrollbar"
        style={{ height: "calc(100% - 48px)" }}
      >
        <div className="">
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </div>
      </div>
    </div>
  );
};

export default AllChat;
