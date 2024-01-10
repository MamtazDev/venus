import AXIOS from "./axiosInstance";

export const register = async (data) => {
  const response = await AXIOS.post("/api/users/register", data);
  return response;
};

export const login = async (data) => {
  const response = await AXIOS.post("/api/users/login", data);
  return response;
};

export const getLoggedInUserInfo = async () => {
  const response = await AXIOS.get("/api/users/myInfo");
  return response;
};

export const getSingleUser = async (userId) => {
  const response = await AXIOS.get(`/api/users/userInfo/${userId}`);
  return response;
};

export const getAllUsers = async () => {
  const response = await AXIOS.get("/api/users/");
  return response;
};

export const updateUserInfo = async (data) => {
  const response = await AXIOS.patch(`/api/users/updateUserInfo`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};
