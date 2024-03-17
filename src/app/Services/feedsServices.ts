import APIClient, { User } from "./apiClient";

type TimeFilter =
  | "today"
  | "pastHour"
  | "allTime"
  | "pastWeek"
  | "pastMonth"
  | "pastYear";
type FeedFilter = "Top" | "commentCount" | "New";

export type FeedType = {
  searchKey: string;
  timeFilter: TimeFilter;
  feedFilter: FeedFilter;
};

class FeedsClient extends APIClient {
  constructor() {
    super();
  }

  async getAllFeeds(
    url: string,
    payload: FeedType,
    queryParams: string
  ): Promise<User | null | Error> {
    try {
      const feedParam = new URLSearchParams(window.location.search).get("feed");
      const endpoint = feedParam === "group" ? "/group" : "/users";
      const response = await this.axiosInstance.post<User>(
        `${endpoint}/${url}?${queryParams}`,
        payload
      );
      return response.data?.data;
    } catch (error) {
      return error as Error;
    }
  }
}
const feedClient = new FeedsClient();

export default feedClient;
