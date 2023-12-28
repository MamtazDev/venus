import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, token } = useContext(AuthContext);
  return user && token ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
