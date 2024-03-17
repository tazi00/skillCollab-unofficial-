import SkillButton from "./SkillButton";
import { SkillBox, SkillCard, SkillImg, SkillText } from "../Ui";
import { BiEditAlt } from "react-icons/bi";

interface SkillProfileCardProps {
  coverPhoto: string;
  profilePhoto: string;
  firstName: string;
  lastName: string;
  description: string;
}

function SkillProfileCard({
  profileCardData,
}: {
  profileCardData: SkillProfileCardProps;
}) {
  return (
    <SkillCard
      $backgroundImage={profileCardData?.coverPhoto}
      $padding="32px"
      $afterContent=" "
      $after={true}
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
          $height={"82px"}
          $width={"82px"}
          $borderRadius="50%"
          $object="cover"
          $margin="0 0 16px 0"
          $border="4px solid #fff"
        />
        <SkillText $margin="0 0 10px 0" $variant="bold">
          {profileCardData?.firstName + " " + profileCardData.lastName}
        </SkillText>
        <SkillText $margin="0 0 10px 0" $variant="thin">
          {profileCardData?.description}
        </SkillText>
        <SkillButton margin="10px 0 0 0 " variant="secondary" size="small">
          <BiEditAlt fontSize={"22px"} />
          Edit Profile
        </SkillButton>
      </SkillBox>
    </SkillCard>
  );
}

export default SkillProfileCard;
