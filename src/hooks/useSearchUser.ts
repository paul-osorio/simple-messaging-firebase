import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useSearchUser = (search: any, users: any) => {
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const auth = useContext(AuthContext);

  useEffect(() => {
    setIsSearching(true);
    if (search) {
      const searchArray = users.filter(
        (user: any) =>
          user.fullname.toLowerCase().includes(search.toLowerCase()) &&
          user.id !== auth.uid
      );
      setSearchResult(searchArray);
      setIsSearching(false);
    } else {
      setSearchResult([]);
      setIsSearching(false);
    }
  }, [search]);

  return { searchResult, isSearching };
};

export default useSearchUser;
