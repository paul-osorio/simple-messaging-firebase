import { signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { useAuth } from "../../../../context/AuthProvider";
import { auth } from "../../../../services/firebase.config";

const Sidebar = () => {
  const data = useAuth();
  const photo = data.user.photoUrl;
  const fullname = data.user.fullname;
  const email = data.user.email;

  return (
    <motion.div className="bg-black/30 laptop:rounded-3xl w-full h-full absolute z-10">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 250 }}
        exit={{ opacity: 0, width: 0 }}
        className=" h-full absolute z-10 shadow-3xl bg-white right-0"
      >
        <div className=" my-2 mx-2">
          <button className="hover:bg-gray-100 rounded-full">
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

        <div className="">
          <span
            role="button"
            className="absolute bottom-0"
            onClick={() => {
              signOut(auth);
            }}
          >
            Log Out
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Sidebar;
