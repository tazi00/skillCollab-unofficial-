import { SkillImg } from "@/app/Ui";
import HomeIcon from "../assets/All.png";
import GroupIcon from "../assets/Group.png";
import PeopleIcon from "../assets/People.png";
import { useSearchParams } from "react-router-dom";
import { SkillTabs } from "@/app/Components";

function HomeTabs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const data = [
    {
      id: 1,
      label: "All",
      icon: <SkillImg src={HomeIcon} alt="all" />,
      link: "all",
      active: searchParams.get("feed") === "all",
    },
    {
      id: 2,
      label: "People",
      icon: <SkillImg src={PeopleIcon} alt="people" />,
      link: "people",
      active: searchParams.get("feed") === "people",
    },
    {
      id: 3,
      label: "Group",
      icon: <SkillImg src={GroupIcon} alt="group" />,
      link: "group",
      active: searchParams.get("feed") === "group",
    },
  ];

  function onTabsChange(query: string) {
    setSearchParams({ feed: query });
  }
  return <SkillTabs tabsData={data} onTabChange={onTabsChange} />;
}

export default HomeTabs;
