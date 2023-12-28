import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const logOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("venusAuth");
  };

  const authInfo = {
    user,
    setUser,
    token,
    setToken,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
