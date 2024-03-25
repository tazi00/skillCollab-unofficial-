import {
  SkillBox,
  SkillCard,
  SkillGrid,
  SkillHead,
  SkillImg,
  SkillList,
  SkillListItem,
  SkillSpan,
  SkillText,
} from "../Ui";
import SkillButton from "./SkillButton";

function SkillGroupCard({ groupData }) {
  return (
    <SkillCard $shadow={true} $padding="20px" $margin="0 0 30px 0">
      <SkillBox>
        <SkillGrid $col={["200px", "1fr"]} $gap="20px" $alignItems="start">
          <SkillBox>
            <SkillImg
              src={groupData?.groupPhoto}
              alt="profile-img"
              $height="270px"
              $object="cover"
              $width="100%"
              $borderRadius="10px"
            />
          </SkillBox>
          <SkillBox
            $flex={true}
            $flexDirection="column"
            $alignItems="start"
            $height="100%"
          >
            <SkillHead as={"h3"}>{groupData?.name}</SkillHead>
            <SkillList
              $flex={true}
              $justifyContent="space-between"
              $gap="10px"
              $margin="20px 0 0 0"
              $width="100%"
            >
              <SkillListItem $variant="secondary" $color="#1b9aaa">
                {groupData?.followers?.length} Follower
              </SkillListItem>
              <SkillListItem $variant="secondary">
                ({groupData?.averageRating}) stars
              </SkillListItem>
            </SkillList>
            <SkillText $variant="tags" $lineHeight="22px" $margin="0 0 20px 0 ">
              {groupData?.description}
            </SkillText>
            <SkillList
              $flex={true}
              $justifyContent="space-between"
              $gap="10px"
              $width="100%"
              $alignItems="center"
              $margin="auto 0 10px 0"
            >
              <SkillListItem>
                <SkillImg
                  src=""
                  $height="20px"
                  $width="20px"
                  $borderRadius="50%"
                />
                1 Mutual Friend
              </SkillListItem>
              <SkillListItem>
                <SkillButton variant="primary" size="small" margin="0 0 0 auto">
                  Join Group
                </SkillButton>
              </SkillListItem>
            </SkillList>
          </SkillBox>
        </SkillGrid>
      </SkillBox>
    </SkillCard>
  );
}

export default SkillGroupCard;
