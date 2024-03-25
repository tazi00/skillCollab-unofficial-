import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiRoutes } from "../Utils/baseRoute";
import { getDataFromLocal, setDataToLocal } from "../Utils/localfunc";
import authClient from "./authServices";

export interface User {
  role: string;
  isEmailVerified: boolean;
  isKyc: boolean;
  profilePhoto: string;
}

export interface AuthResponse {
  code: number;
  message: string;
  isSuccess: boolean;
  data: User;
  accessToken: string;
  refreshToken: string;
}

class APIClient {
  protected axiosInstance: AxiosInstance;
  private static baseURL = apiRoutes.base;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: APIClient.baseURL,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const accessToken = getDataFromLocal("accessToken");
        if (accessToken) {
          if (!config.headers) config.headers = [];
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      async (response: AxiosResponse<AuthResponse>) => {
        const { accessToken, refreshToken } = response.data;
        if (accessToken) {
          setDataToLocal("accessToken", accessToken);
        }
        if (refreshToken) {
          setDataToLocal("refreshToken", refreshToken);
        }
        return response;
      },
      async (error) => {
        if (error.response && error.response.status === 401) {
          try {
            const refreshToken = getDataFromLocal("refreshToken");
            if (!refreshToken) {
              return Promise.reject(error);
            }
            const response = await authClient.refreshToken(refreshToken);
            const { accessToken } = response;
            if (accessToken) {
              setDataToLocal("accessToken", accessToken);
              return this.axiosInstance(error.config);
            } else {
              return Promise.reject(error);
            }
          } catch (refreshError) {
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );
  }
}

export default APIClient;
