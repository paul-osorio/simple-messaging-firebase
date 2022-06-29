import FloatingTextField from "../../../../components/FloatingTextField";
import LoginRegisterLink from "../../../../components/LoginRegisterLink";

const RegisterForm = () => {
  return (
    <div className="w-full flex justify-center">
      <form action="" className="mt-5 mb-5">
        <div className="flex space-x-2  mb-5">
          <FloatingTextField label="Firstname" />
          <FloatingTextField label="Lastname" />
        </div>
        <FloatingTextField label="Email Address" />
        <div className="flex space-x-2  mt-5">
          <FloatingTextField label="Password" />
          <FloatingTextField label="Confirm Password" />
        </div>

        <button className="w-full bg-gray-900 rounded hover:bg-gray-800 active:ring-blue-300 active:ring py-2 mt-3 text-white">
          Sign Up
        </button>
        <LoginRegisterLink to="/" type="Register" />
      </form>
    </div>
  );
};

export default RegisterForm;
