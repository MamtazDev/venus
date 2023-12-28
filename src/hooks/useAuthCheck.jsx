import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAuthCheck = () => {
  const { setUser, setToken } = useContext(AuthContext);
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    const localAuth = localStorage?.getItem("venusAuth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        setUser(auth?.user);
        setToken(auth?.accessToken);
      }
    }
    setAuthChecked(true);
  }, [setUser, setToken]);
  return authChecked;
};

export default useAuthCheck;
