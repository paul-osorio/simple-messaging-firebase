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
        {isLoading && "Loading..."}
        {friendList.map((val: any) => {
          return <FriendCard key={val.id} friend={val} />;
        })}
      </div>
    </div>
  );
};
export default Friends;
