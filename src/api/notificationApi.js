import AXIOS from "./axiosInstance";

export const addNotification = async (data) => {
  const response = await AXIOS.post("/api/notification/add", data);
  return response;
};
