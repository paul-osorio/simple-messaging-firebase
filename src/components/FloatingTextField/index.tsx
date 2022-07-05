import { FieldHookConfig, useField } from "formik";

interface MyProps {
  label: string;
  containerClass?: string;
  name: string;
  type: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const FloatingTextField = (props: MyProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={"relative w-full " + props.containerClass}>
      <input
        {...field}
        name={props.name}
        type={props.type}
        placeholder={props.label}
        onKeyDown={props.onKeyDown}
        autoComplete="off"
        className={
          (meta.touched && meta.error ? "border-red-400" : "") +
          " border placeholder-transparent transition-all w-full rounded-lg h-11 peer px-3 focus:border-indigo-300 outline-none"
        }
      />
      <label
        className="
        absolute
        text-sm
        -top-2.5
        left-2
        bg-white
        px-2
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
        {props.label}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 flex items-center">
          <span className="text-[12px] ml-1">{meta.error}</span>
        </div>
      ) : null}
    </div>
  );
};

export default FloatingTextField;
