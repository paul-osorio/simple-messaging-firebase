import FloatingTextField from "../../../../components/FloatingTextField";
import { Link } from "react-router-dom";
import LoginRegisterLink from "../../../../components/LoginRegisterLink";
import ProviderButton from "../ProviderButton";
import Divider from "../../../../components/Divider";
import {
  emailAndPasswordLogin,
  facebookLogin,
  googleLogin,
  twitterLogin,
} from "../../../../services/handleLogin";
import { Form, Formik, FormikProps } from "formik";
import LoginSchema from "../../../../validation/loginSchema";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

interface Values {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { login, errorname, setErrorname } = emailAndPasswordLogin();
  const { loginError, setLoginError } = useContext(AuthContext);

  return (
    <div className="w-72 flex justify-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={login}
      >
        {(props: FormikProps<Values>) => (
          <Form className="w-full mt-4">
            {loginError && (
              <div className="text-red-500 block text-center items-center">
                <span className="text-[12px]">
                  Please verified your email address to continue.
                </span>
              </div>
            )}
            <div className="mb-5">
              <FloatingTextField
                label="Email Address"
                name="email"
                type="text"
                onKeyDown={() => {
                  setErrorname("");
                  setLoginError("");
                }}
              />
              {errorname === "user-not-found" && (
                <div className="text-red-500 flex items-center">
                  <span className="text-[12px] ml-1">User not found</span>
                </div>
              )}
            </div>
            <div className="">
              <FloatingTextField
                label="Password"
                type="password"
                name="password"
                onKeyDown={() => setErrorname("")}
                onFocus={() => setErrorname("")}
              />
              {errorname === "wrong-password" && (
                <div className="text-red-500 flex items-center">
                  <span className="text-[12px] ml-1">Wrong Password</span>
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <Link to="/forgotpassword" className="text-sm text-gray-500">
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 rounded hover:bg-gray-800 active:ring-blue-300 active:ring py-2 mt-3 text-white"
            >
              Sign In
            </button>
            <LoginRegisterLink to="/Register" type="Login" />
            <Divider label="or login as" />

            <div className="flex space-x-2">
              <ProviderButton
                onClick={googleLogin}
                label="Google"
                src="https://www.svgrepo.com/show/355037/google.svg"
              />
              <ProviderButton
                onClick={facebookLogin}
                label="Facebook"
                src="https://www.svgrepo.com/show/157818/facebook.svg"
              />
            </div>
            <div className="flex justify-center mt-2 px-16">
              <ProviderButton
                onClick={twitterLogin}
                label="Twitter"
                src="https://www.svgrepo.com/show/157844/twitter.svg"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
