import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../../../context/AuthProvider";
import { db } from "../../../../../../services/firebase.config";
import Backdrop from "../Backdrop";

const ChangePassword = ({ onClose }: { onClose: any }) => {
  const authdata = useContext(AuthContext);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const uid = authdata?.uid;
  const email = authdata?.user?.email;
  const auth = getAuth();
  const user: any = auth?.currentUser;

  const onSave = async () => {
    setLoading(true);
    const credential = EmailAuthProvider.credential(email, oldPassword);

    if (!oldPassword) {
      setOldPasswordError("Please enter your old password");
    } else if (!password) {
      setError("Please enter your new password");
    } else {
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
      } else {
        try {
          await reauthenticateWithCredential(user, credential);
          await updatePassword(user, password);
          onClose();
        } catch (error: any) {
          switch (error.code) {
            case "auth/wrong-password":
              setOldPasswordError("Wrong password");
              break;
            default:
              break;
          }
        }
      }
    }
    setLoading(false);
  };

  return (
    <Backdrop onClose={onClose}>
      <div className="h-full flex items-center justify-center">
        <div
          className="bg-white p-3 px-5 rounded shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="block text-gray-700 font-medium text-xl text-center">
            CHANGE PASSWORD
          </span>
          <div className="my-2">
            <input
              type="password"
              className="w-52 block border text-sm outline-none rounded px-2 py-1"
              value={oldPassword}
              placeholder="Enter your old password"
              onChange={(e) => {
                setOldPassword(e.target.value);
                setOldPasswordError("");
              }}
            />
            {oldPasswordError && (
              <span className="text-red-500 text-xs">{oldPasswordError}</span>
            )}
          </div>
          <div className="my-2">
            <input
              type="password"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSave();
                }
              }}
              className="w-52 block border text-sm outline-none rounded px-2 py-1"
              value={password}
              placeholder="Enter your new password"
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
            {error && <span className="text-red-500 text-xs">{error}</span>}
          </div>
          <div className="flex justify-end space-x-1">
            <button
              onClick={onClose}
              className="bg-red-200 text-sm text-red-900 px-2 py-1 font-medium  rounded"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              disabled={loading}
              className="bg-blue-200 text-sm text-blue-900 px-2 py-1 font-medium rounded "
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default ChangePassword;
