import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children, isLogged }) {
  const user = isLogged; // Define user com base no valor de isEmailVerified

  return user ? children : <Navigate to="/login" />;
}