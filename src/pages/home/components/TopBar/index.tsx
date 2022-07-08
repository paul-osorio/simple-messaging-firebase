import { useNavigate } from "react-router-dom";
import BackArrow from "../../../../assets/svg/BackArrow";
import HamburgerMenu from "../../../../assets/svg/HamburgerMenu";
import PersonIcon from "../../../../assets/svg/PersonIcon";
import useCountData from "../../../../hooks/useCountData";
type Props = {
  onClick: () => void;
  onFocus?: () => void;
  onClose?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOpen?: boolean;
  searchValue?: string;
};

const TopBar = ({
  onClick,
  onFocus,
  onClose,
  isOpen,
  onChange,
  searchValue,
}: Props) => {
  const navigate = useNavigate();
  const count = useCountData();
  return (
    <div className="relative h-32 laptop:rounded-t-3xl py-5 bg-gradient-to-b from-indigo-700 to-indigo-500 rounded-b-[52px]">
      <span className="block text-center text-white mb-5 text-xl">Chats</span>
      <div className="flex justify-center">
        <div className="relative w-full mx-10 flex items-center">
          <input
            onChange={onChange}
            type="text"
            value={searchValue}
            onFocus={onFocus}
            placeholder="Search..."
            className="h-10 w-full pl-10 rounded-full bg-gray-50 outline-none"
          />
          <img
            src="https://www.svgrepo.com/show/14071/search.svg"
            className="h-5 w-5 opacity-80 absolute left-3"
            alt=""
          />
        </div>
      </div>
      <div
        className="absolute top-3 right-3 hover:bg-black/10 p-1 rounded-full"
        role="button"
        onClick={onClick}
      >
        <HamburgerMenu />
      </div>
      {isOpen && (
        <div
          className="absolute top-3 left-3 hover:bg-black/10 p-1 rounded-full"
          role="button"
          onClick={onClose}
        >
          <BackArrow className="fill-white" />
        </div>
      )}
      {!isOpen && (
        <div
          onClick={() => navigate("/friendrequest")}
          className="absolute top-3 left-3 hover:bg-black/10 p-1 rounded-full"
          role="button"
        >
          <div className="relative">
            <PersonIcon className="fill-white " />
            {count > 0 && (
              <div className="h-5 text-white w-5 text-[12px] flex items-center justify-center absolute bg-red-500 rounded-full -top-1 -right-4">
                {count}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
