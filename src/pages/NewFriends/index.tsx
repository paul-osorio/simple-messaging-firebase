import MainContainer from "../../components/MainContainer";
import useFetchFriendRequest from "../../hooks/useFetchFriendRequest";
import ProfileCard from "./ProfileCard";
import TopBar from "./TopBar";

const FriendRequest = () => {
  const { data, loading } = useFetchFriendRequest();
  return (
    <MainContainer>
      <div className="bg-gradient-to-b from-indigo-700 to-indigo-500 h-full laptop:rounded-3xl">
        <TopBar />
        <div
          className="bg-white rounded-t-3xl relative laptop:rounded-3xl pt-7 flex justify-center"
          style={{ height: "calc(100% - 80px)" }}
        >
          <div className="w-full">
            {loading && "Loading..."}
            {data.length <= 0 && (
              <div className="mt-10">
                <div className="flex justify-center">
                  <img
                    src="https://www.svgrepo.com/show/200048/agenda-address-book.svg"
                    className="w-52 h-52 opacity-50"
                    alt=""
                  />
                </div>
                <span className="block text-center text-gray-400 text-lg">
                  No Friend Request Yet
                </span>
              </div>
            )}

            {data.map((user: any) => (
              <ProfileCard key={user?.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
export default FriendRequest;
