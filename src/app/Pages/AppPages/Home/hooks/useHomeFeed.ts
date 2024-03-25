import feedClient from "@/app/Services/feedsServices";
import { useInfiniteQuery } from "@tanstack/react-query";
import useFeedFilter from "../store/useFeedFilter";
import { useSearchParams } from "react-router-dom";
import useGlobalSearch from "@/app/store/useGlobalSearch";
import { useDebounce } from "@/app/hooks/useDebounce";

function useHomeFeed() {
  const feedKey = useFeedFilter((state) => state.feedFilter);
  const timeKey = useFeedFilter((state) => state.timeFilter);
  const searchTerm2 = useGlobalSearch((state) => state.searchTerm);
  const { debounceValue } = useDebounce(searchTerm2);
  const [searchParams] = useSearchParams();
  const feed = searchParams.get("feed");
  const pageSize = 10;

  const body = {
    searchKey: debounceValue,
    timeFilter: timeKey,
    feedFilter: feedKey,
  };
  const feedType = {
    all: "get-all-people-group",
    people: "get-all-people",
    group: "get-public-posts",
    allPeople: "all-people",
    allGroup: "all-group",
  };

  const {
    data: feeds,
    isLoading,
    isError,
    fetchNextPage: loadMore,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey:
      debounceValue !== "" || body.feedFilter !== "" || body.timeFilter !== ""
        ? ["feeds", feed, body.feedFilter, body.timeFilter, debounceValue]
        : ["feeds", feed],
    queryFn: (
      { pageParam = 1 } // Corrected pageParams to pageParam as per React Query's documentation
    ) => feedClient.getAllFeeds(feedType[feed], body, pageSize, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.length < pageSize) return undefined;
      return allPages.length + 1; // Ensuring we are incrementing the page number
    },
  });

  return { feeds, isLoading, isError, loadMore, hasNextPage };
}

export default useHomeFeed;
