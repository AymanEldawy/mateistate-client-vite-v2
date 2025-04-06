import { BASE_URL } from "@/data/constants";
import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "./authService";

const http = axios.create({
  baseURL: `${BASE_URL}/api/v1/client`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

const onRequest = (config) => {
  // const token = store.getState().auth.accessToken;
  // const token = store.getState().auth.accessToken;
  const token = ''
  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }

  return config;
};

const onRequestError = (error) => Promise.reject(error);

const onResponse = (response) => response.data;

const onResponseError = async (error) => {
  // This error is from axios itself
  if (error?.message === "canceled") return;

  let errorMessage =
    error?.response?.data?.message ||
    "Something went wrong!, please try again.";

  const isForceLogout =
    error?.response?.status === 401 || error?.response?.status === 403;
  if (isForceLogout) {
    toast.error(errorMessage);
    // return store.dispatch(logout());
    return logout();
  }

  toast.error(errorMessage);
  return Promise.reject(error);
};

http.interceptors.request.use(onRequest, onRequestError);
http.interceptors.response.use(onResponse, onResponseError);

export default http;
