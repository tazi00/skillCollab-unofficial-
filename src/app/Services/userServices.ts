import APIClient, { User } from "./apiClient";

class UserClient extends APIClient {
  constructor() {
    super();
  }

  async getUserProfile(id: string): Promise<User | null | Error> {
    try {
      const response = await this.axiosInstance.get<User>(`/users/fetch/${id}`);
      return response.data?.data;
    } catch (error) {
      return error as Error;
    }
  }
}
const userClient = new UserClient();

export default userClient;
