import { useContext } from "react";
import { AuthContext } from "../../../../../../context/AuthProvider";
type Props = {
  onClose: () => void;
};

const ProfileDetails = ({ onClose }: Props) => {
  const data = useContext(AuthContext);
  const photo = data.user.photoUrl;
  const fullname = data.user.fullname;
  const email = data.user.email;
  return (
    <>
      <div className={"my-2 mx-2"}>
        <button onClick={onClose} className="hover:bg-gray-100 rounded-full">
          <img
            src="https://www.svgrepo.com/show/347841/sidebar-collapse.svg"
            className="h-5 m-1 w-5"
            alt=""
          />
        </button>
      </div>

      <div className="w-full flex justify-center">
        <img
          src={photo}
          className="rounded-full h-20 w-20 ring ring-indigo-500 "
          alt=""
        />
      </div>
      <span className="block text-center mt-3 font-medium leading-3">
        {fullname}
      </span>
      <span className="block text-center mt-1 text-sm text-gray-500">
        {email}
      </span>
    </>
  );
};

export default ProfileDetails;
