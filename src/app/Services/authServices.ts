import APIClient, { AuthResponse } from "./apiClient";

class AuthClient extends APIClient {
  constructor() {
    super();
  }

  async login(email: string, password: string): Promise<AuthResponse | Error> {
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
      return error as Error;
    }
  }

  async refreshToken(refreshToken: string): Promise<AuthResponse | null> {
    try {
      const response = await this.axiosInstance.post<AuthResponse>(
        "/auth/refresh-tokens",
        {
          refreshToken,
        }
      );
      return response.data;
    } catch (error) {
      return null;
    }
  }
}
const authClient = new AuthClient();

export default authClient;
