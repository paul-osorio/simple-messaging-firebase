import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PublicRoute = () => {
  const auth = useAuth();
  if (auth?.user === undefined) {
    return null;
  }
  return auth.user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
