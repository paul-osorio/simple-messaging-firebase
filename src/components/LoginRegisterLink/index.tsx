import { Link } from "react-router-dom";

type LinkProps = {
  to: string;
  type: string;
};

const LoginRegisterLink = ({ to, type }: LinkProps) => {
  return (
    <div className="flex justify-center text-sm">
      <span>
        {type === "Login"
          ? "Don't have an account? "
          : "Already have an account? "}
        <Link to={to} className="text-blue-600 hover:text-blue-700">
          {type === "Login" ? "Sign up" : "Login"}
        </Link>
      </span>
    </div>
  );
};

export default LoginRegisterLink;
