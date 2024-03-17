import feedClient, { FeedType } from "@/app/Services/feedsServices";
import { useQuery } from "@tanstack/react-query";

function useHomeFeed(
  feed: string,
  url: string,
  body: FeedType,
  params: string
) {
  const {
    data: feeds,
    isLoading,
    isError,
  } = useQuery({
    queryKey:
      !body.feedFilter && !body.timeFilter
        ? ["feeds", feed]
        : ["feeds", feed, body.feedFilter, body.timeFilter],
    queryFn: () => feedClient.getAllFeeds(url, body, params),
    initialData: [],
  });

  return { feeds, isLoading, isError };
}

export default useHomeFeed;
