type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-white mobile:w-full tablet:w-[500px]">{children}</div>
    </div>
  );
};
export default Card;
