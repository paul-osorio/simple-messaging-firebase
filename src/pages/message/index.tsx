import MainContainer from "../../components/MainContainer";
import MessageBox from "./components/MessageBox";
import MessageTextfield from "./components/MessageTextfield";
import TopBar from "./components/TopBar";

const Message = () => {
  return (
    <MainContainer>
      <div className="bg-gradient-to-b from-indigo-700 to-indigo-500 h-full laptop:rounded-3xl">
        <TopBar />
        <div
          className="bg-white rounded-t-3xl relative laptop:rounded-3xl pt-7 flex justify-center"
          style={{ height: "calc(100% - 80px)" }}
        >
          <div className="h-full relative w-full">
            <div
              className="overflow-auto homescrollbar"
              style={{ height: "calc(100% - 80px)" }}
            >
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={false} />
              <MessageBox message="Hello World" myMessage={false} />
              <MessageBox message="Hello World" myMessage={false} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={true} />
              <MessageBox message="Hello World" myMessage={false} />
            </div>
            <MessageTextfield />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Message;
