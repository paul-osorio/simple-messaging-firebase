import { Link } from "react-router-dom";
import LinkIcon from "../../../assets/svg/LinkIcon";
import Card from "../../../components/Card";
import Container from "../../../components/Container";

const SuccessPasswordChange = () => {
  return (
    <Container>
      <Card>
        <div>
          <div className="w-full flex justify-center">
            <div className="bg-gray-200 rounded-full p-3">
              <LinkIcon className="w-10 h-10 fill-red-500" />
            </div>
          </div>
          <h1 className="text-center mt-2 text-xl text-green-800 mb-3">
            Success Password Changed
          </h1>
          <p className="text-center text-gray-500">
            We have successfully sent the reset password link <br /> to you
            email. If you don't see it in your inbox, <br /> please check your
            spam
          </p>

          <span className="block text-center mt-5">
            <Link to="/login" className="text-blue-500 hover:text-blue-600">
              Go back to login page
            </Link>
          </span>
        </div>
      </Card>
    </Container>
  );
};

export default SuccessPasswordChange;
