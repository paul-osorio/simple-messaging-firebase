type TextFieldProps = {
  label: string;
  containerClass?: string;
};

const FloatingTextField = ({ label, containerClass }: TextFieldProps) => {
  return (
    <div className={"relative " + containerClass}>
      <input
        type="text"
        className="border  placeholder-transparent transition-all w-full rounded-lg h-11 peer px-3 focus:border-indigo-300 outline-none"
        placeholder="Email Address"
      />
      <label
        className="
        absolute
        text-sm
        pointer-events-none
        peer-placeholder-shown:top-3
        peer-placeholder-shown:left-3
        text-gray-400
        peer-focus:-top-2.5
        peer-focus:left-2
        peer-focus:text-gray-500
        peer-focus:text-sm
        peer-focus:bg-white
        peer-focus:px-2
        transition-all
        "
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingTextField;
