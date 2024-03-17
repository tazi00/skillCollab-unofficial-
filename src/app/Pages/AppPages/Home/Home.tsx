import {
  SkillBox,
  SkillCol,
  SkillContainer,
  SkillGrid,
  SkillSection,
} from "@/app/Ui";
import "./style.scss";
import { SkillProfileCard } from "@/app/Components";
import { useNavigate, useSearchParams } from "react-router-dom";
import useUser from "@/app/hooks/useUser";
import HomeTabs from "./Components/HomeTabs";
import { useEffect } from "react";
import HomeFeeds from "./Components/HomeFeeds";
import HomeFeedFilters from "./Components/HomeFeedFilters";

function Home() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isHomeFeeds = searchParams.get("feed") === "all";
  const isPeopleFeeds = searchParams.get("feed") === "people";
  const isGroupFeeds = searchParams.get("feed") === "group";

  useEffect(() => {
    if (window.location.pathname === "/home") {
      navigate("?feed=all");
    }
  }, [navigate]);

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
            {isHomeFeeds && <HomeFeeds feed="all" />}
            {isPeopleFeeds && <HomeFeeds feed="people" />}
            {isGroupFeeds && <HomeFeeds feed="group" />}
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
