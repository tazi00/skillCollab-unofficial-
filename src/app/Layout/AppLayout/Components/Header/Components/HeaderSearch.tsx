import { SkillBox, SkillImg, SkillInput } from "@/app/Ui";
import logoImg from "../../assets/logo.png";
import searchIcon from "../../assets/searchIcon.png";
import { ChangeEvent } from "react";
import useGlobalSearch from "@/app/store/useGlobalSearch";

function HeaderSearch() {
  const searchTerm2 = useGlobalSearch((state) => state.searchTerm);
  const setSearchTerm = useGlobalSearch((state) => state.setSearchTerm);

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  return (
    <SkillBox $flex={true} $gap="60px">
      <SkillImg src={logoImg} alt="Logo" $object="cover" />
      <SkillInput
        placeholder="Search... "
        $mode="one"
        value={searchTerm2}
        $backgroundImage={searchIcon}
        onChange={(e) => onChangeSearch(e)}
      />
    </SkillBox>
  );
}

export default HeaderSearch;
