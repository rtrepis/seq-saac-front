import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
  isLogged: string | null;
}

const RequireAuth = ({ isLogged, children }: RequireAuthProps): JSX.Element => {
  if (isLogged === "" || null || undefined) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default RequireAuth;
