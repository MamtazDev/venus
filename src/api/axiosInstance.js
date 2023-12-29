import axios from "axios";

const customHeaders = {
  "Content-Type": "application/json",
};

const AXIOS = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: customHeaders,
});

AXIOS.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("venusAuth");
  if (authToken) {
    const token = JSON.parse(authToken).accessToken;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default AXIOS;
