import { useNavigate } from "react-router-dom";
import { handleCancelRequest } from "../../ProfileCard/hooks/handleFriends";

const FriendCard = ({ friend }: { friend: any }) => {
  const profile = friend?.photoUrl;
  const name = friend?.fullname;
  const email = friend?.email;
  const docID: any = friend?.docID;
  const navigate = useNavigate();
  const goto = () => navigate(`/message/${docID}`);

  const unfriend = () => {
    handleCancelRequest(docID);
  };

  return (
    <div>
      <div className="w-full px-3 mb-3">
        <div className="bg-white border rounded-xl flex justify-between items-center">
          <div className="py-4 px-2 flex items-center">
            <img src={profile} alt="" className="ring h-12 w-12 rounded-full" />
            <div className="ml-2">
              <p className="font-medium leading-3 text-gray-600">{name}</p>
              <p className="text-[12px] text-gray-500">{email}</p>
            </div>
          </div>
          <div className="mx-2">
            <button
              onClick={goto}
              className="block w-full font-medium mb-1 text-blue-900 bg-indigo-100 hover:bg-indigo-200 px-2 py-1 rounded-full text-xs"
            >
              Message
            </button>
            <button
              onClick={unfriend}
              className="block px-2 font-medium w-full py-1 rounded-full text-xs hover:bg-gray-300 bg-gray-200 text-gray-900"
            >
              Unfriend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FriendCard;
