import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  fullname: Yup.string().trim().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email address"),
  password: Yup.string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),

  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export default RegisterSchema;
