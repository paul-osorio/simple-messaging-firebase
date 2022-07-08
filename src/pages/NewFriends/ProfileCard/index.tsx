import useFetchProfile from "../../../hooks/useFetchProfile";
import {
  handleAcceptRequest,
  handleCancelRequest,
} from "../../home/components/ProfileCard/hooks/handleFriends";

const ProfileCard = ({ user }: { user: any }) => {
  const data: any = useFetchProfile(user.from);
  const profile = data?.photoUrl;
  const fullname = data?.fullname;
  const email = data?.email;

  const decline = () => handleCancelRequest(user?.id);
  const accept = () => handleAcceptRequest(user?.id);

  return (
    <div className="w-full px-3 mb-3">
      <div className="bg-white border hover:border-orange-200 rounded-xl flex justify-between">
        <div className="flex py-4 px-2 items-center">
          <img src={profile} className="rounded-full h-10 w-10" alt="" />
          <div className="ml-2">
            <p className="font-medium leading-3 text-gray-600">{fullname}</p>
            <p className="text-[12px] text-gray-500">{email}</p>
          </div>
        </div>
        <div className="flex items-center mx-2">
          <div className="text-xs">
            <button
              onClick={accept}
              className="block mb-1 w-full rounded-full hover:bg-blue-300 bg-blue-200 text-blue-900 font-medium px-2 py-1"
            >
              Accept
            </button>
            <button
              onClick={decline}
              className="block w-full rounded-full hover:bg-red-50   border border-red-300 text-gray-900 font-medium px-2 py-1"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
