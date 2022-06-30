import { ArrowBack } from "../../assets/svg/ArrowBack";
import { InfoIcon } from "../../assets/svg/InfoIcon";
import MainContainer from "../../components/MainContainer";
import MessageBox from "./components/MessageBox";
import TopBar from "./components/TopBar";

const Message = () => {
  return (
    <MainContainer>
      <div className="bg-indigo-500 h-full laptop:rounded-3xl">
        <TopBar />
        <div
          className="bg-white rounded-t-3xl relative laptop:rounded-3xl pt-7 flex justify-center"
          style={{ height: "calc(100% - 80px)" }}
        >
          <div className="absolute -top-3 z-20 bg-indigo-500 rounded-full px-2 text-white py-1">
            Today
          </div>
          <div className="h-full relative w-full">
            <div
              className="overflow-auto"
              style={{ height: "calc(100% - 80px)" }}
            >
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={false} />
              <MessageBox message="Hello World" myMessage={false} />
              <MessageBox message="Hello World" myMessage={false} />
              <MessageBox message="Hello World" myMessage={false} />
              <MessageBox message="Hello World" myMessage={false} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={false} />
            </div>
            <div className="h-20  flex items-center justify-center mx-2">
              <input
                type="text"
                className="py-2 w-full rounded-lg px-3  bg-gray-100"
                placeholder="Type a message..."
              />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Message;
