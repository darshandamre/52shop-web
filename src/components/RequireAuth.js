import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserQuery } from "../hooks";

const RequireAuth = () => {
  const { data } = useUserQuery();
  const location = useLocation();

  if (!data?.user?.id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export { RequireAuth };
