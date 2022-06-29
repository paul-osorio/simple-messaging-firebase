import FloatingTextField from "../../../../components/FloatingTextField";
import { Link } from "react-router-dom";
import LoginRegisterLink from "../../../../components/LoginRegisterLink";
import ProviderButton from "../ProviderButton";
import Divider from "../../../../components/Divider";

const LoginForm = () => {
  return (
    <div className="w-72 flex justify-center">
      <form action="" className="mt-5 w-full">
        <FloatingTextField label="Email Address" containerClass="mb-5" />
        <FloatingTextField label="Password" />
        <div className="flex justify-end">
          <Link to="/" className="text-sm text-gray-500">
            Forgot Password
          </Link>
        </div>

        <button className="w-full bg-gray-900 rounded hover:bg-gray-800 active:ring-blue-300 active:ring py-2 mt-3 text-white">
          Sign In
        </button>
        <LoginRegisterLink to="/Register" type="Login" />
        <Divider label="or login as" />

        <div className="flex space-x-2">
          <ProviderButton
            label="Google"
            src="https://www.svgrepo.com/show/355037/google.svg"
          />
          <ProviderButton
            label="Facebook"
            src="https://www.svgrepo.com/show/157818/facebook.svg"
          />
        </div>
        <div className="flex justify-center mt-2 px-16">
          <ProviderButton
            label="Twitter"
            src="https://www.svgrepo.com/show/157844/twitter.svg"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
