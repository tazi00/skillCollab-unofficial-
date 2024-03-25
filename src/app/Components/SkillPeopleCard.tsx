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

function SkillPeopleCard({ peopleData }) {
  return (
    <SkillCard $shadow={true} $padding="20px" $margin="0 0 30px 0">
      <SkillBox>
        <SkillGrid $col={["200px", "1fr"]} $gap="20px" $alignItems="start">
          <SkillBox>
            <SkillImg
              src={peopleData?.profilePhoto}
              alt="profile-img"
              $height="230px"
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
            <SkillHead as={"h3"}>
              {peopleData?.firstName} {peopleData?.lastName}
              <SkillSpan $variant="primary" $margin="0 0 0 5px">
                ({peopleData?.followers?.length ?? 0})
              </SkillSpan>{" "}
            </SkillHead>
            <SkillHead as={"h5"} $variant="Secondary" $margin="10px 0 15px 0 ">
              {peopleData?.userName} -{" "}
              <SkillSpan $variant="secondary"> New York</SkillSpan>{" "}
            </SkillHead>
            <SkillText $variant="tags" $lineHeight="22px" $margin="0 0 20px 0 ">
              {peopleData?.description}
            </SkillText>
            <SkillList
              $flex={true}
              $justifyContent="start"
              $gap="10px"
              $margin="auto 0 10px 0"
            >
              <SkillListItem>
                <SkillSpan $variant="primary" $margin="0 5px 0 0px">
                  {peopleData?.publicPost}
                </SkillSpan>
                Public Post
              </SkillListItem>
              <SkillListItem>
                <SkillSpan $variant="primary" $margin="0 5px 0 0px">
                  {peopleData?.premiumPost}
                </SkillSpan>
                Premium Post
              </SkillListItem>
            </SkillList>
          </SkillBox>
        </SkillGrid>
      </SkillBox>
    </SkillCard>
  );
}

export default SkillPeopleCard;
