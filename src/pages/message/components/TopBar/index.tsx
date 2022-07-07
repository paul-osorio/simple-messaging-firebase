import { Link, useParams } from "react-router-dom";
import { ArrowBack } from "../../../../assets/svg/ArrowBack";
import { InfoIcon } from "../../../../assets/svg/InfoIcon";
import useFetchProfile from "../../../../hooks/useFetchProfile";

const TopBar = () => {
  const { id } = useParams();
  const details: any = useFetchProfile(id);

  const name = details?.fullname;
  const photoUrl = details?.photoUrl;

  return (
    <div className="h-20 flex items-center justify-between mx-5">
      <Link to="/">
        <ArrowBack className="h-5 w-5 fill-white" />
      </Link>
      <div className="flex items-center space-x-2">
        <img
          src={photoUrl}
          alt=""
          className="h-10 w-10 ring-1 ring-stone-50 rounded-full"
        />
        <span className="text-xl text-white block">{name}</span>
      </div>
      <InfoIcon className="h-6 w-6 fill-white" />
    </div>
  );
};

export default TopBar;
