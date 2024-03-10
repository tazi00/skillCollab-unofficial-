import SkillButton from "./SkillButton";
import { SkillBox, SkillCard, SkillImg, SkillText } from "../Ui";

function SkillProfileCard({ profileCardData }) {
  return (
    <SkillCard
      $backgroundImage={profileCardData?.coverPhoto}
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
          src={profileCardData?.profilePhoto}
          alt="user profile image"
          $height={"62px"}
          $width={"62px"}
          $borderRadius="50%"
          $margin="0 0 16px 0"
        />
        <SkillText $margin="0 0 10px 0" $variant="bold">
          {profileCardData?.firsName + " " + profileCardData.lastName}
        </SkillText>
        <SkillText $margin="0 0 10px 0" $variant="thin">
          {profileCardData?.description}
        </SkillText>
        <SkillButton margin="24px 0 0 0 " variant="secondary" size="small">
          Edit Profile
        </SkillButton>
      </SkillBox>
    </SkillCard>
  );
}

export default SkillProfileCard;
