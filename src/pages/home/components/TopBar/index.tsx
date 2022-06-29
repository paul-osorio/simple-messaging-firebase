import HamburgerMenu from "../../../../assets/svg/HamburgerMenu";

const TopBar = () => {
  return (
    <div className="relative h-32 laptop:rounded-t-lg py-5 bg-gradient-to-b from-indigo-700 to-indigo-500 rounded-b-[52px]">
      <span className="block text-center text-white mb-5 text-xl">Chats</span>
      <div className="flex justify-center">
        <div className="relative w-full mx-10 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-full pl-10 rounded-full bg-gray-50 outline-none"
          />
          <img
            src="https://www.svgrepo.com/show/14071/search.svg"
            className="h-5 w-5 opacity-80 absolute left-3"
            alt=""
          />
        </div>
      </div>
      <div className="absolute top-3 right-3">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default TopBar;
