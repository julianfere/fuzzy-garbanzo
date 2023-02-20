import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export { RequireAuth };
