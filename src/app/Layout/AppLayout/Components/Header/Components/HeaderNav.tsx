import { SkillBox, SkillImg, SkillList, SkillListItem } from "@/app/Ui";
import HomeIcon from "../../assets/homeIcon.svg";
import ExploreIcon from "../../assets/exploreIcon.svg";
import ChatIcon from "../../assets/chatIcon.svg";
import { Link } from "react-router-dom";
function HeaderNav() {
  const navIcons = [
    {
      id: 1,
      icon: HomeIcon,
      link: "/",
      alt: "Home icons",
    },
    {
      id: 2,
      icon: ExploreIcon,
      link: "explore",
      alt: "Explore icons",
    },
    {
      id: 3,
      icon: ChatIcon,
      link: "chat",
      alt: "Chat icons",
    },
  ];

  return (
    <SkillBox $flex={true} $gap="60px">
      <SkillList
        $flex={true}
        $justifyContent="center"
        $margin="0 auto"
        $gap="30px"
      >
        {navIcons.map((item) => {
          return (
            <SkillListItem key={item.id}>
              <Link to={item.link}>
                <SkillImg src={item.icon} alt={item.alt} />
              </Link>
            </SkillListItem>
          );
        })}
      </SkillList>
    </SkillBox>
  );
}

export default HeaderNav;
