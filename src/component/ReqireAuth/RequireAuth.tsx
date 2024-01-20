import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
export function RequireAuth({ children }: any) {
  const isAuth = useSelector(selectIsAuth);
  let location = useLocation();
  if (!isAuth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
}
