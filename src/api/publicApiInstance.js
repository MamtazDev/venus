import axios from "axios";

const customHeaders = {
  "Content-Type": "application/json",
};

const PUBLIC_API_AXIOS = axios.create({
  baseURL: `${import.meta.env.VITE_PUBLIC_API_URL}`,
});

export default PUBLIC_API_AXIOS;
