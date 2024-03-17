import { SkillCol, SkillContainer, SkillGrid, SkillHeader } from "@/app/Ui";
import HeaderSearch from "./Components/HeaderSearch";
import HeaderNav from "./Components/HeaderNav";
import HeaderOptions from "./Components/HeaderOptions";

function Header() {
  return (
    <SkillHeader>
      <SkillContainer>
        <SkillGrid $col={["400px", "1fr", "400px"]} $alignItems="center">
          <SkillCol>
            <HeaderSearch />
          </SkillCol>
          <SkillCol>
            <HeaderNav />
          </SkillCol>
          <SkillCol>
            <HeaderOptions />
          </SkillCol>
        </SkillGrid>
      </SkillContainer>
    </SkillHeader>
  );
}

export default Header;
