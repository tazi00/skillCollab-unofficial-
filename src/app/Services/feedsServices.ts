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
    pageItem: number,
    page: number
  ): Promise<User | null> {
    try {
      const feedParam = new URLSearchParams(window.location.search).get("feed");
      const endpoint =
        feedParam === "group" || feedParam === "allGroup" ? "/group" : "/users";
      const response = await this.axiosInstance.post<User>(
        `${endpoint}/${url}?page=${page}&pageSize=${pageItem}`,
        payload
      );
      return response.data?.data;
    } catch (error) {
      return error;
    }
  }
}
const feedClient = new FeedsClient();

export default feedClient;
