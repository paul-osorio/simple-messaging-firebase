import { Form, Formik, FormikProps } from "formik";
import { useEffect } from "react";
import FloatingTextField from "../../../../components/FloatingTextField";
import LoginRegisterLink from "../../../../components/LoginRegisterLink";
import useHandleRegister from "../../../../services/handleRegister";
import handleRegister from "../../../../services/handleRegister";
import RegisterSchema from "../../../../validation/registerSchema";

interface Values {
  fullname: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const RegisterForm = () => {
  const { handleRegister, error, setError } = useHandleRegister();

  return (
    <>
      <div className="w-full flex justify-center max-w-[400px]">
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {(props: FormikProps<Values>) => (
            <Form className="w-full mt-5">
              <div className="flex space-x-2  mb-5 w-full">
                <FloatingTextField
                  label="Fullname"
                  name="fullname"
                  type="text"
                />
              </div>
              <div className="mb-5">
                <FloatingTextField
                  label="Email Address"
                  name="email"
                  type="text"
                  onKeyDown={() => setError("")}
                />
                {error && (
                  <span className="block text-red-500 text-xs">{error}</span>
                )}
              </div>

              <div className="flex space-x-2  mt-5">
                <FloatingTextField
                  label="Password"
                  name="password"
                  type="password"
                />
                <FloatingTextField
                  label="Confirm Password"
                  name="confirmpassword"
                  type="password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 rounded hover:bg-gray-800 active:ring-blue-300 active:ring py-2 mt-3 text-white"
              >
                Sign Up
              </button>
              <LoginRegisterLink to="/" type="Register" />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterForm;
