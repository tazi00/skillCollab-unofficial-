import { SkillImg, SkillList, SkillListItem } from "../Ui";
import googleIcon from "../assets/google.png";
import appleIcon from "../assets/apple.png";
import facebookIcon from "../assets/Facebook.png";

function SkillSocialSignIn() {
  return (
    <SkillList $flex $alignItems="center" $justifyContent="center" $gap="30px">
      <SkillListItem>
        <SkillImg src={googleIcon} alt="Google Sign In Button" />
      </SkillListItem>
      <SkillListItem>
        <SkillImg src={appleIcon} alt="Google Sign In Button" />
      </SkillListItem>
      <SkillListItem>
        <SkillImg src={facebookIcon} alt="Google Sign In Button" />
      </SkillListItem>
    </SkillList>
  );
}

export default SkillSocialSignIn;
