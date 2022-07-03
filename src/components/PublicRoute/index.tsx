import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const PublicRoute = () => {
  const auth = useAuth();
  if (auth.user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
