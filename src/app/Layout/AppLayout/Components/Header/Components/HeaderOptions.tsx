import { SkillBox, SkillImg, SkillList, SkillListItem } from "@/app/Ui";
import notifyImg from "../../assets/notify.png";
import useUser from "@/app/hooks/useUser";
function HeaderOptions() {
  const { user } = useUser();

  return (
    <SkillBox $flex={true} $gap="20px" $justifyContent="end">
      <SkillList
        $flex={true}
        $justifyContent="center"
        $margin="0 0 0 auto "
        $gap="24px"
      >
        <SkillListItem>
          <SkillImg src={notifyImg} alt="notify img" />
        </SkillListItem>
        <SkillListItem>
          <SkillImg
            src={user?.profilePhoto}
            alt="notify img"
            $height="40px"
            $width="40px"
            $borderRadius="50%"
            $object="cover"
          />
        </SkillListItem>
      </SkillList>
    </SkillBox>
  );
}

export default HeaderOptions;
