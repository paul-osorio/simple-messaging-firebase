import ChatCard from "./components/ChatCard";
import TopBar from "./components/TopBar";

const Home = () => {
  return (
    <div className="w-full">
      <TopBar />
      <div className="mt-5 px-5">
        <span className="text-gray-500 mb-3 block">All Chats</span>
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </div>
    </div>
  );
};

export default Home;
