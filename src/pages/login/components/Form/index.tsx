import FloatingTextField from "../../../../components/FloatingTextField";
import { Link } from "react-router-dom";
import LoginRegisterLink from "../../../../components/LoginRegisterLink";
import ProviderButton from "../ProviderButton";
import Divider from "../../../../components/Divider";
import {
  facebookLogin,
  googleLogin,
  twitterLogin,
} from "../../../../services/handleProvider";
import { Form, Formik, FormikProps } from "formik";

interface Values {
  email: string;
  password: string;
}

const LoginForm = () => {
  return (
    <div className="w-72 flex justify-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form className="w-full mt-5">
            <FloatingTextField
              label="Email Address"
              name="email"
              type="text"
              containerClass="mb-5"
            />
            <FloatingTextField
              label="Password"
              type="password"
              name="password"
            />
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
