import { Link } from "react-router-dom";
import { ArrowBack } from "../../../../assets/svg/ArrowBack";
import { InfoIcon } from "../../../../assets/svg/InfoIcon";

const TopBar = () => {
  return (
    <div className="h-20 flex items-center justify-between mx-5">
      <Link to="/">
        <ArrowBack className="h-5 w-5 fill-white" />
      </Link>
      <div className="flex items-center space-x-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
          alt=""
          className="h-10 w-10 ring-1 ring-stone-50 rounded-full"
        />
        <span className="text-xl text-white block">Juan Dela Cruz</span>
      </div>
      <InfoIcon className="h-6 w-6 fill-white" />
    </div>
  );
};

export default TopBar;
