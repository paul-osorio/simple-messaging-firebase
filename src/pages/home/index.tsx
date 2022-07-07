import MainContainer from "../../components/MainContainer";
import ChatCard from "./components/ChatCard";
import TopBar from "./components/TopBar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AllChat from "./components/AllChats";
import SearchCard from "./components/SearchCard";
import Friends from "./components/Friends";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const openSearch = () => setShowSearch(true);
  const closeSearch = () => {
    setShowSearch(false);
    setSearchValue("");
  };

  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <MainContainer>
      <AnimatePresence>
        {showSidebar && <Sidebar onClose={closeSidebar} />}
      </AnimatePresence>

      <TopBar
        onClick={openSidebar}
        onFocus={openSearch}
        onClose={closeSearch}
        isOpen={showSearch}
        searchValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div style={{ height: "calc(100% - 128px)" }}>
        {showSearch && <SearchCard search={searchValue} />}
        {!showSearch && (
          <>
            <div className="h-12 flex items-center px-5">
              <span
                onClick={() => setActiveTab("all")}
                className={
                  (activeTab === "all" &&
                    "border-b-2 border-indigo-800 text-indigo-800") +
                  " text-gray-500 block mr-3 transition"
                }
                role="button"
              >
                All Chats
              </span>
              <span
                onClick={() => setActiveTab("friends")}
                className={
                  (activeTab === "friends" &&
                    "border-b-2 border-indigo-800 text-indigo-800") +
                  " text-gray-500 block"
                }
                role="button"
              >
                Friends
              </span>
            </div>
            {activeTab === "all" && <AllChat />}
            {activeTab === "friends" && <Friends />}
          </>
        )}
      </div>
    </MainContainer>
  );
};

export default Home;
