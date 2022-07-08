import { Formik, Form as NewForm, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import PadLock from "../../../assets/svg/PadLock";
import * as Yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../services/firebase.config";
import { useState } from "react";

const Form = () => {
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();
  const EmailSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const sendlink = (data: any) => {
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        navigate("/successpasswordchange");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            setAuthError("User not found");
            break;
          default:
            console.log(error);
            break;
        }
      });
  };

  return (
    <div className="pb-3">
      <div className="flex justify-center w-full mb-2">
        <div className="bg-gray-200 p-2 rounded-full">
          <PadLock className="w-12 h-12 fill-red-500" />
        </div>
      </div>
      <span className="block text-center">Forgot Password?</span>
      <p className="text-center text-sm text-gray-500 mb-6">
        We just need your email address to <br />
        send your password reset link.
      </p>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={EmailSchema}
        onSubmit={sendlink}
      >
        {({ errors, touched }) => (
          <NewForm>
            <div className="mb-4">
              <label htmlFor="" className="block text-sm text-gray-700">
                Email Address
              </label>
              <Field
                name="email"
                type="text"
                onKeyDown={() => setAuthError("")}
                placeholder="example@email.com"
                className="w-64 border-b outline-none py-1"
              />
              {authError && (
                <div className="text-red-500 text-sm">{authError}</div>
              )}
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </div>
            <button
              type="submit"
              className="block w-full py-2 rounded-full text-white bg-orange-600 shadow"
            >
              Send Link
            </button>
          </NewForm>
        )}
      </Formik>
      <span className="block text-center text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:text-blue-600">
          Sign Up
        </Link>
      </span>
      <span className="block text-center text-xs">
        <Link to="/login" className="text-gray-500 hover:text-gray-600">
          Go back to login page
        </Link>
      </span>
    </div>
  );
};

export default Form;
