import { Link, useParams } from "react-router-dom";
import { ArrowBack } from "../../../assets/svg/ArrowBack";
import useCountData from "../../../hooks/useCountData";

const TopBar = () => {
  const count = useCountData();

  return (
    <div className="h-20 flex items-center justify-between mx-5">
      <Link to="/">
        <ArrowBack className="h-5 w-5 fill-white" />
      </Link>
      <div>
        <span className="block text-center text-white text-xl">
          Friend Request
        </span>
      </div>
      <div>
        <div className="h-7 w-7 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white">{count}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
