import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CheckCircle from "../../assets/svg/CheckCircle";
import EmailIcon from "../../assets/svg/EmailIcon";
import Card from "../../components/Card";
import Container from "../../components/Container";

const VerifyEmail = () => {
  return (
    <Container>
      <Card>
        <div className="w-full flex justify-center mb-2">
          <EmailIcon className="w-16 h-16" />
        </div>
        <div>
          <span className="text-center block text-sm text-gray-500">
            One last thing before you can <br /> start using the app.
            <br />
          </span>
        </div>
        <div className="bg-blue-100 rounded-xl px-5 py-3 w-full mt-2">
          <p className="w-64 text-sm text-center">
            Kindly check your email to verify your account.
            <br /> if you don't see it in your inbox, please check your spam
            folder.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="text-center block text-sm mt-5 mb-2 text-blue-500 hover:text-blue-600"
          >
            Go back to login page
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default VerifyEmail;
