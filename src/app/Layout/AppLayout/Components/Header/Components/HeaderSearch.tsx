import { SkillBox, SkillImg, SkillInput } from "@/app/Ui";
import logoImg from "../../assets/logo.png";
import searchIcon from "../../assets/searchIcon.png";
import { ChangeEvent } from "react";
import useGlobalSearch from "@/app/store/useGlobalSearch";
import { useSearchParams } from "react-router-dom";

function HeaderSearch() {
  const searchTerm2 = useGlobalSearch((state) => state.searchTerm);
  const setSearchTerm = useGlobalSearch((state) => state.setSearchTerm);
  const [, setSearchPrams] = useSearchParams();
  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    if (e.target.value === "") setSearchPrams({ feed: "all" });
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
