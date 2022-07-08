import useFetchFriendProfile from "../../../../hooks/useFetchFriendProfile";
import useFetchFriends from "../../../../hooks/useFetchFriends";
import FriendCard from "./components/FriendCard";

const Friends = () => {
  const friends: any = useFetchFriends();
  const { friendList, isLoading } = useFetchFriendProfile(friends);

  return (
    <div>
      <div
        className="px-5  overflow-auto homescrollbar"
        style={{ height: "calc(100% - 48px)" }}
      >
        {isLoading ? (
          "Loading..."
        ) : friendList.length <= 0 ? (
          <div className="mt-10">
            <div className="flex justify-center">
              <img
                src="https://www.svgrepo.com/show/204615/users-friends.svg"
                className="w-52 h-52 opacity-50"
                alt=""
              />
            </div>
            <span className="block text-center text-gray-400 text-lg">
              No Friends Yet
            </span>
          </div>
        ) : (
          friendList.length > 0 &&
          friendList.map((val: any) => {
            return <FriendCard key={val.id} friend={val} />;
          })
        )}
      </div>
    </div>
  );
};
export default Friends;
