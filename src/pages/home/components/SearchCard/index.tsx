import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import useFetchUsers from "../../../../hooks/useFetchUsers";
import { db } from "../../../../services/firebase.config";
import ProfileCard from "../ProfileCard";

type Props = {
  search: string;
};

const SearchCard = ({ search }: Props) => {
  const [isSearching, setIsSearching] = useState(false);
  const { users, setUsers } = useFetchUsers();
  const auth = useContext(AuthContext);
  const [searchArray, setSearchArray] = useState(users);

  useEffect(() => {
    setIsSearching(true);
    if (search) {
      const searchArray = users.filter(
        (user: any) =>
          user.fullname.toLowerCase().includes(search.toLowerCase()) &&
          user.id !== auth.uid
      );
      setSearchArray(searchArray);
      setIsSearching(false);
    } else {
      setSearchArray([]);
      setIsSearching(false);
    }
  }, [search]);
  return search ? (
    <div className="h-full laptop:rounded-b-3xl pt-3">
      {isSearching && (
        <div className="text-center text-gray-500">Searching...</div>
      )}
      {!isSearching && (
        <div className="">
          {searchArray.map((val: any, i) => {
            return <ProfileCard user={val} key={val.id} />;
          })}
        </div>
      )}
    </div>
  ) : (
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

export default SearchCard;
