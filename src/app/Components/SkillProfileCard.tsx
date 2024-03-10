import SkillButton from "./SkillButton";
import { SkillBox, SkillCard, SkillImg, SkillText } from "../Ui";

function SkillProfileCard() {
  return (
    <SkillCard
      $backgroundImage=""
      $padding="32px"
      $backgroundColor=" #0000008f;"
    >
      <SkillBox
        $textAlign="center"
        $flex
        $alignItems="center"
        $flexDirection="column"
      >
        <SkillImg
          src=""
          alt="user profile image"
          $height={"62px"}
          $width={"62px"}
          $borderRadius="50%"
          $margin="0 0 16px 0"
        />
        <SkillText $margin="0 0 10px 0" $variant="bold">
          Jessica Jones
        </SkillText>
        <SkillText $margin="0 0 10px 0" $variant="thin">
          Expert in all things gardening
        </SkillText>
        <SkillButton margin="24px 0 0 0 " variant="secondary" size="small">
          Edit Profile
        </SkillButton>
      </SkillBox>
    </SkillCard>
  );
}

export default SkillProfileCard;
