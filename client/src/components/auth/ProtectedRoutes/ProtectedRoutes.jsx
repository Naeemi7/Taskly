import { Outlet, Navigate } from "react-router-dom";
import UseUserContext from "@hooks/UseUserContext";

export default function ProtectedRoutes() {
  const { isLoggedIn } = UseUserContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/user-login" />;
}
