import { Form, Formik, FormikProps } from "formik";
import FloatingTextField from "../../../../components/FloatingTextField";
import LoginRegisterLink from "../../../../components/LoginRegisterLink";
import RegisterSchema from "../../../../validation/registerSchema";

interface Values {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const RegisterForm = () => {
  return (
    <div className="w-full flex justify-center max-w-[400px]">
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form className="w-full mt-5">
            <div className="flex space-x-2  mb-5 w-full">
              <FloatingTextField
                label="Firstname"
                name="firstname"
                type="text"
              />
              <FloatingTextField label="Lastname" name="lastname" type="text" />
            </div>
            <FloatingTextField
              label="Email Address"
              name="email"
              type="text"
              containerClass="mb-5"
            />
            <div className="flex space-x-2  mt-5">
              <FloatingTextField label="Password" name="password" type="text" />
              <FloatingTextField
                label="Confirm Password"
                name="confirmpassword"
                type="text"
              />
            </div>

            <button className="w-full bg-gray-900 rounded hover:bg-gray-800 active:ring-blue-300 active:ring py-2 mt-3 text-white">
              Sign Up
            </button>
            <LoginRegisterLink to="/" type="Register" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
