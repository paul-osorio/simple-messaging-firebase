import MainContainer from "../../components/MainContainer";
import ChatCard from "./components/ChatCard";
import TopBar from "./components/TopBar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AllChat from "./components/AllChats";
import SearchCard from "./components/SearchCard";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
        {!showSearch && <AllChat />}
      </div>
    </MainContainer>
  );
};

export default Home;
