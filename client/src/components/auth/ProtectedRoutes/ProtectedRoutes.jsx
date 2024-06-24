import { Outlet, Navigate } from "react-router-dom";
import useUserContext from "@hooks/useUserContext";

export default function ProtectedRoutes() {
  const { isLoggedIn } = useUserContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/user-login" />;
}
