import axios from "axios";
import { clearSession, getToken } from "../services/authStorage";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    platform: "web",
  },
});

// Ensure every request (GET/POST/PUT/PATCH/DELETE) carries platform: web
axiosClient.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};
  config.headers.platform = "web";

  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Something went wrong. Please try again.";

    if (status === 401) {
      clearSession();
    }

    return Promise.reject({ status, message, raw: error });
  }
);

export default axiosClient;
