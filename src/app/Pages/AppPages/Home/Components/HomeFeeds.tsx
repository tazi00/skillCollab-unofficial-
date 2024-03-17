import { SkillFeed } from "@/app/Components";
import useHomeFeed from "../hooks/useHomeFeed";
import useFeedFilter from "../store/useFeedFilter";
import { SkillText } from "@/app/Ui";

function HomeFeeds({ feed }: { feed: string }) {
  const feedKey = useFeedFilter((state) => state.feedFilter);
  const timeKey = useFeedFilter((state) => state.timeFilter);

  const feedtype = {
    all: "get-all-people-group",
    people: "get-all-people",
    group: "get-public-posts",
  };
  const body = {
    searchKey: "",
    timeFilter: timeKey,
    feedFilter: feedKey,
  };

  console.log(body);

  const query = "page=1&pageSize=10";

  const { feeds, isLoading } = useHomeFeed(feed, feedtype[feed], body, query);
  console.log(feeds);
  if (isLoading) {
    return <>Loading...</>;
  }

  return feed?.length === 0 ? (
    <SkillText>There is no Post ... </SkillText>
  ) : (
    feeds?.map((feed) => {
      return <SkillFeed key={feed?._id} feedData={feed} />;
    })
  );
}

export default HomeFeeds;
