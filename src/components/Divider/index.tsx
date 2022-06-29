type DividerProps = {
  label: string;
};

const Divider = ({ label }: DividerProps) => {
  return (
    <div className="flex items-center my-3">
      <div className="w-full bg-gray-300 h-[1px]"></div>
      <span className="w-full text-sm text-gray-500 block text-center">
        {label}
      </span>
      <div className="w-full bg-gray-300 h-[1px]"></div>
    </div>
  );
};
export default Divider;
