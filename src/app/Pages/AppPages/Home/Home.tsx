import {
  SkillBox,
  SkillCol,
  SkillContainer,
  SkillGrid,
  SkillSection,
} from "@/app/Ui";
import "./style.scss";
import { SkillFeedLoader, SkillProfileCard } from "@/app/Components";
import { useNavigate, useSearchParams } from "react-router-dom";
import useUser from "@/app/hooks/useUser";
import HomeTabs from "./Components/HomeTabs";
import { useEffect, useRef } from "react";
import HomeFeeds from "./Components/HomeFeeds";
import HomeFeedFilters from "./Components/HomeFeedFilters";
import useHomeFeed from "./hooks/useHomeFeed";

function Home() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isHomeFeeds = searchParams.get("feed") === "all";
  const isPeopleFeeds = searchParams.get("feed") === "people";
  const isGroupFeeds = searchParams.get("feed") === "group";
  const isAllGroup = searchParams.get("feed") === "allGroup";
  const isAllPeople = searchParams.get("feed") === "allPeople";
  const { loadMore, hasNextPage } = useHomeFeed();
  const loadMoreRef = useRef(null);
  useEffect(() => {
    if (window.location.pathname === "/home") {
      navigate("?feed=all");
    }
  }, [navigate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasNextPage) {
          loadMore();
          console.log("loadmore");
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const currentElement = loadMoreRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [loadMore, hasNextPage]);
  return (
    <SkillSection $padding="20px 0 0 0 ">
      <SkillContainer>
        <SkillGrid $col={["300px", "1fr", "300px"]} $gap="30px">
          <SkillCol>
            <SkillBox>
              <SkillProfileCard profileCardData={user} />
            </SkillBox>
          </SkillCol>
          <SkillCol>
            {isHomeFeeds && <HomeFeeds />}
            {isPeopleFeeds && <HomeFeeds />}
            {isGroupFeeds && <HomeFeeds />}
            {isAllGroup && <HomeFeeds />}
            {isAllPeople && <HomeFeeds />}
            {hasNextPage && (
              <div className="load" ref={loadMoreRef}>
                <SkillFeedLoader />
                <SkillFeedLoader />
                <SkillFeedLoader />
                <SkillFeedLoader />
              </div>
            )}
          </SkillCol>
          <SkillCol>
            <HomeTabs />
            <HomeFeedFilters />
          </SkillCol>
        </SkillGrid>
      </SkillContainer>
    </SkillSection>
  );
}

export default Home;
