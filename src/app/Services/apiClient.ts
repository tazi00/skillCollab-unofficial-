import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiRoutes } from "../Utils/baseRoute";
import { getDataFromLocal, setDataToLocal } from "../Utils/localfunc";

interface User {
  role: string;
  isEmailVerified: boolean;
  isKyc: boolean;
  profilePhoto: string;
  // Add other user properties as needed
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
  private axiosInstance: AxiosInstance;
  private static baseURL = apiRoutes.base;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: APIClient.baseURL,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Add request interceptor to attach access token to headers
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

    // Add response interceptor to handle token expiration, refresh token, etc.
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<AuthResponse>) => {
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
          // Access token is invalid or has expired, attempt to refresh token
          try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) {
              // No refresh token available, log out user or redirect to login page
              return Promise.reject(error);
            }
            const response = await this.axiosInstance.post<AuthResponse>(
              "/auth/refresh-tokens",
              {
                refreshToken,
              }
            );
            const { accessToken } = response.data;
            if (accessToken) {
              // Refresh token successful, update the access token in local storage
              setDataToLocal("accessToken", accessToken);
              // Reattempt the original request with the new access token
              return this.axiosInstance(error.config);
            } else {
              // Refresh token failed, log out user or redirect to login page
              return Promise.reject(error);
            }
          } catch (refreshError) {
            // Error occurred while refreshing token, log out user or redirect to login page
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  async login(email: string, password: string): Promise<AuthResponse | null> {
    try {
      const response = await this.axiosInstance.post<AuthResponse>(
        "/auth/login",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async getUserProfile(id: string) {
    try {
      const response = await this.axiosInstance.get(`/users/fetch/${id}`);
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default APIClient;
