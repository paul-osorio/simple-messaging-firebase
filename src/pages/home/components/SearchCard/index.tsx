import { collection, doc, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import useFetchUsers from "../../../../hooks/useFetchUsers";
import { useFriendStatus } from "../../../../hooks/useFriendStatus";
import useSearchUser from "../../../../hooks/useSearchUser";
import { db } from "../../../../services/firebase.config";
import ProfileCard from "../ProfileCard";

type Props = {
  search: string;
};

const SearchCard = ({ search }: Props) => {
  const auth = useContext(AuthContext);
  const { users } = useFetchUsers();
  const { searchResult, isSearching } = useSearchUser(search, users);

  return search ? (
    <div className="h-full laptop:rounded-b-3xl pt-3 overflow-auto homescrollbar">
      {isSearching && (
        <div className="text-center text-gray-500">Searching...</div>
      )}
      {searchResult.length > 0 ? (
        <div className="">
          {searchResult.map((val: any, i) => {
            return <ProfileCard user={val} key={val.id} />;
          })}
        </div>
      ) : (
        <NotFoundError />
      )}
    </div>
  ) : (
    <FindAFriend />
  );
};

const FindAFriend = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="">
        <div className="flex justify-center opacity-80">
          <img
            src="https://www.svgrepo.com/show/279255/telescope.svg"
            className="h-52 w-52"
            alt=""
          />
        </div>
        <p className="text-center text-gray-400 mt-2 text-3xl font-light">
          Find A Friend
        </p>
      </div>
    </div>
  );
};
const NotFoundError = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="">
        <div className="flex justify-center opacity-80">
          <img
            src="https://www.svgrepo.com/show/52361/search.svg"
            className="h-52 w-52"
            alt=""
          />
        </div>
        <p className="text-center text-gray-400 mt-2 text-2xl font-light">
          Search not found!
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
