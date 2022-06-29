type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="h-screen w-screen bg-indigo-900">{children}</div>;
};
export default Container;
