import { signOut } from "firebase/auth";
import { auth } from "../../../../services/firebase.config";
import { motion } from "framer-motion";
import Backdrop from "./components/Backdrop";
import ProfileDetails from "./components/Profile";
import Button from "./components/Button";
type SidebarProps = {
  onClose: () => void;
};

const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <Backdrop onClose={onClose}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 250 }}
        transition={{ type: "tween", duration: 0.2 }}
        exit={{ width: 0 }}
        onClick={(e) => e.stopPropagation()}
        className=" h-full absolute z-10 shadow-3xl bg-white right-0 laptop:rounded-tr-3xl laptop:rounded-br-3xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0, delay: 0.15 } }}
          exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}
          className="h-full"
        >
          <ProfileDetails onClose={onClose} />
          <div className="w-full  p-2">
            <Button>View Profile</Button>
          </div>
          <div className="flex justify-center">
            <div className="w-full absolute bottom-0 p-2">
              <Button
                onClick={() => {
                  signOut(auth);
                }}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Backdrop>
  );
};
export default Sidebar;
