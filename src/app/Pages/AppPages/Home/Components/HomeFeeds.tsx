import {
  SkillFeed,
  SkillFeedLoader,
  SkillGroupCard,
  SkillPeopleCard,
} from "@/app/Components";
import useHomeFeed from "../hooks/useHomeFeed";
import { SkillText } from "@/app/Ui";
import { Fragment } from "react/jsx-runtime";
import { useSearchParams } from "react-router-dom";
import useGlobalSearch from "@/app/store/useGlobalSearch";

function HomeFeeds() {
  const { feeds, isLoading, isError } = useHomeFeed();
  const [searchParams] = useSearchParams();
  const searchTerm = useGlobalSearch((state) => state.searchTerm);
  console.log(feeds);

  if (isLoading) {
    return (
      <>
        <SkillFeedLoader />
        <SkillFeedLoader />
        <SkillFeedLoader />
      </>
    );
  }
  if (isError) {
    return (
      <SkillText $variant="tertiary" $textAlign="center" $margin="50px 0 0 0 ">
        There is some error...
      </SkillText>
    );
  }

  if (feeds?.pages[0].name === "AxiosError")
    return <SkillText>Sorry, There is some error... </SkillText>;
  if (!feeds || feeds?.pages?.length === 0) {
    return (
      <SkillText $variant="tertiary" $textAlign="center" $margin="50px 0 0 0 ">
        There is no Post ...{" "}
      </SkillText>
    );
  }

  return (
    <>
      {feeds.pages.map((page, pageIndex) => (
        <Fragment key={pageIndex}>
          {!page?.length ? (
            <SkillText
              $variant="tertiary"
              $textAlign="center"
              $margin="50px 0 0 0 "
            >
              Sorry , didn't find any {searchTerm} item
            </SkillText>
          ) : (
            page.map((feed) => {
              // Now determining content based on feed data inside the map
              let content;
              if (searchParams.get("feed") === "allPeople") {
                content = <SkillPeopleCard key={feed?._id} peopleData={feed} />;
              } else if (searchParams.get("feed") === "allGroup") {
                content = <SkillGroupCard key={feed?._id} groupData={feed} />;
              } else {
                content = <SkillFeed key={feed._id} feedData={feed} />;
              }

              return <Fragment key={feed._id}>{content}</Fragment>;
            })
          )}
        </Fragment>
      ))}
    </>
  );
}

export default HomeFeeds;
