import { getToken } from "@/services/auth.service";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    const accessToken = getToken("accessToken");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  // @ts-ignore
  function (response) {
    // const responseObject: {
    //   data: any;
    //   meta: { page: number; limit: number; total: number };
    //   message: string;
    // } = {
    //   data: response?.data?.data,
    //   meta: response?.data?.meta,
    //   message: response?.data?.message,
    // };
    return response;
  },
  function (error) {
    // const responseObject: {
    //   statusCode: number;
    //   message: string;
    //   errorMessages: any;
    // } = {
    //   statusCode: error?.response?.data?.statusCode || 500,
    //   message: error?.response?.data?.message || "Something went wrong!",
    //   errorMessages: error?.response?.data?.message,
    // };
    return responseObject;
  }
);

// instance.interceptors.response.use()

export const axiosInstance = instance;
