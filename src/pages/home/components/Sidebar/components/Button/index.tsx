type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-100 rounded w-full py-2 mb-2 border border-white text-center hover:border-gray-300 hover:border"
      role="button"
    >
      <div>{children}</div>
    </div>
  );
};

export default Button;
