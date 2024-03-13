import axios, { AxiosError } from "axios";
import { getAccessToken } from "../lib/token";
import toast from "react-hot-toast";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (data) => {
    return data;
  },
  (error: AxiosError) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const err = error.response?.data.message;
    toast.error(err);
    return Promise.reject(error);
  }
);
