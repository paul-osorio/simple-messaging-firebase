import ChatCard from "./components/ChatCard";
import TopBar from "./components/TopBar";

const Home = () => {
  return (
    <div className="w-screen bg-gray-800 laptop:flex laptop:items-center  h-screen laptop:justify-center">
      <div className="mobile:w-full laptop:w-[400px] laptop:rounded-xl h-screen bg-white">
        <TopBar />
        <div style={{ height: "calc(100% - 128px)" }}>
          <div className="h-12 flex items-center">
            <span className="text-gray-500  block px-5">All Chats</span>
          </div>
          <div
            className="px-5  overflow-auto homescrollbar"
            style={{ height: "calc(100% - 48px)" }}
          >
            <div className="">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
