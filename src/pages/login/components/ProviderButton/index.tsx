type ButtonProps = {
  label: string;
  src: string;
  onClick: () => void;
};

const ProviderButton = ({ label, src, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border rounded p-2 w-full flex items-center justify-center space-x-2 hover:bg-gray-100 active:scale-95"
    >
      <img src={src} alt="" className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
};
export default ProviderButton;
