type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow mx-5 px-7 py-3">
        {children}
      </div>
    </div>
  );
};
export default Card;
