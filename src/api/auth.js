import AXIOS from "./axiosInstance";

export const register = async (data) => {
  const response = await AXIOS.post("/api/users/register", data);
  return response;
};

export const login = async (data) => {
  const response = await AXIOS.post("/api/users/login", data);
  return response;
};

export const getLoggedInUserInfo = async (token) => {
  const customHeaders = {
    Authorization: `Bearer ${token}`,
  };
  const response = await AXIOS.get("/api/users/myInfo", {
    headers: customHeaders,
  });
  return response;
};

export const getSingleUser = async ({ userId, token }) => {
  const customHeaders = {
    Authorization: `Bearer ${token}`,
  };
  const response = await AXIOS.get(`/api/users/userInfo/${userId}`, {
    headers: customHeaders,
  });
  return response;
};

export const getAllUsers = async (token) => {
  const customHeaders = {
    Authorization: `Bearer ${token}`,
  };
  const response = await AXIOS.get("/api/users/", {
    headers: customHeaders,
  });
  return response;
};
