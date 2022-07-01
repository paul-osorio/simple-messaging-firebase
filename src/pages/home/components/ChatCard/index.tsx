import { Link } from "react-router-dom";

const ChatCard = () => {
  return (
    <Link to="/Message">
      <div className="shadow bg-gray-50 rounded-xl py-3 w-full flex items-center mb-4">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/003/597/506/small_2x/portrait-of-a-young-woman-in-profile-free-vector.jpg"
          alt=""
          className="h-10 w-10 rounded-full mx-5"
        />

        <div className="w-full mr-5">
          <div className="flex items-center justify-between">
            <span className="block font-medium">Reese Ramirez</span>
            <span className="text-xs text-gray-500">4:00 PM</span>
          </div>
          <span className="block text-gray-400 text-sm">
            Hi i though you would like to know
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ChatCard;
