import axios from "axios";

const customHeaders = {
  "Content-Type": "application/json",
};

const AXIOS = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: customHeaders,
});

export default AXIOS;
