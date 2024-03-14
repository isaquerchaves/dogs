import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import User from "../User/User";

function ProtectedRoute() {
  const { login } = React.useContext(UserContext)!;

  return login ? <User /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
