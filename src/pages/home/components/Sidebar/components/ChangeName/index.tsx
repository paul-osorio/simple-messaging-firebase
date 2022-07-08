import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../../context/AuthProvider";
import useFetchProfile from "../../../../../../hooks/useFetchProfile";
import { db } from "../../../../../../services/firebase.config";
import Backdrop from "../Backdrop";

const ChangeName = ({ onClose }: { onClose: any }) => {
  const auth = useContext(AuthContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const uid = auth?.uid;
  const fetchProf = async () => {
    const docRef = doc(db, "users", uid);
    const userdata: any = await getDoc(docRef);
    setName(userdata.data().fullname);
  };

  useEffect(() => {
    fetchProf();
  }, [auth]);

  const onSave = async () => {
    const docRef = doc(db, "users", uid);
    if (!name) {
      setError("Name cannot be empty");
    } else if (name.length < 3) {
      setError("Name must be at least 5 characters");
    } else {
      await updateDoc(docRef, { fullname: name });
      onClose();
    }
  };
  return (
    <Backdrop onClose={onClose}>
      <div className="h-full flex items-center justify-center">
        <div
          className="bg-white p-3 rounded shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="block text-gray-700 font-medium text-xl text-center">
            CHANGE NAME
          </span>
          <div className="my-2">
            <input
              type="text"
              className="w-52 block border outline-none rounded px-2 py-1"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
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
              className="bg-blue-200 text-sm text-blue-900 px-2 py-1 font-medium rounded "
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default ChangeName;
