import { SkillImg } from "@/app/Ui";
import HomeIcon from "../assets/All.png";
import GroupIcon from "../assets/Group.png";
import PeopleIcon from "../assets/People.png";
import { useSearchParams } from "react-router-dom";
import { SkillTabs } from "@/app/Components";
import useGlobalSearch from "@/app/store/useGlobalSearch";

function HomeTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm2 = useGlobalSearch((state) => state.searchTerm);

  const data = [
    {
      id: 1,
      label: searchTerm2 ? "Public Post" : "All",
      icon: <SkillImg src={HomeIcon} alt="all" />,
      link: "all",
      active: searchParams.get("feed") === "all",
    },
    {
      id: 2,
      label: "People",
      icon: <SkillImg src={PeopleIcon} alt="people" />,
      link: searchTerm2 ? "allPeople" : "people",
      active: searchTerm2
        ? searchParams.get("feed") === "allPeople"
        : searchParams.get("feed") === "people",
    },
    {
      id: 3,
      label: "Group",
      icon: <SkillImg src={GroupIcon} alt="group" />,
      link: searchTerm2 ? "allGroup" : "group",
      active: searchTerm2
        ? searchParams.get("feed") === "allGroup"
        : searchParams.get("feed") === "group",
    },
  ];

  function onTabsChange(query: string) {
    setSearchParams({ feed: query });
  }
  return <SkillTabs tabsData={data} onTabChange={onTabsChange} />;
}

export default HomeTabs;
