import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = () => {
  const auth = useAuth();

  if (auth?.user === undefined) {
    return null;
  }
  return auth.user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
