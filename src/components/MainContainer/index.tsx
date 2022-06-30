type Props = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return (
    <div className="w-screen bg-gray-200 laptop:flex laptop:items-center laptop:py-5  h-screen laptop:justify-center">
      <div className="mobile:w-full laptop:w-[400px] shadow-2xl laptop:rounded-3xl h-full bg-white">
        {children}
      </div>
    </div>
  );
};
export default MainContainer;
