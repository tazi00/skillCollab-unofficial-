import { BsThreeDots } from "react-icons/bs";
import {
  SkillBox,
  SkillCard,
  SkillImg,
  SkillInput,
  SkillList,
  SkillListItem,
  SkillSpan,
  SkillText,
} from "../Ui";
import groupJoinIcon from "../assets/groupJoinIcon.png";
import groupFollowersIcons from "../assets/Groupfollowers.png";
import sortInc from "../assets/sortInc.png";
import sortDesc from "../assets/sortDesc.png";
import useUser from "../hooks/useUser";
import ReactPlayer from "react-player";

function SkillFeed({ feedData }) {
  const { user } = useUser();
  const groupFeedHeader = (
    <SkillBox
      $flex={true}
      $justifyContent="space-between"
      $alignItems="center"
      $margin="0 0 20px 0"
    >
      <SkillBox $flex={true} $gap="10px">
        <SkillImg
          src={feedData?.groupId?.groupPhoto}
          alt="users_img"
          $height="40px"
          $width="40px"
          $border="1px solid blue"
          $borderRadius="50%"
        />
        <SkillText $flex={true} $flexDirection="column" $gap="4px">
          <SkillSpan $variant="primary">{feedData?.groupId?.name} </SkillSpan>
          <SkillSpan
            $variant="secondary"
            $flex={{ $gap: "5px", $alignItems: "center" }}
          >
            {feedData?.userId?.firstName} {feedData?.userId?.lastName}
            <SkillSpan $variant="tertiary">
              Thu at 12:30 PM{""}
              <SkillSpan $margin="0px 0 0 4px">|</SkillSpan>
            </SkillSpan>
            <SkillSpan
              $variant="secondary"
              $flex={{ $gap: "2px", $alignItems: "center" }}
            >
              <SkillImg
                src={groupFollowersIcons}
                $height="10px"
                $width="10px"
              />
              5.3k <SkillSpan $margin="0 0 0 2px">|</SkillSpan>
            </SkillSpan>
            <SkillSpan $variant="tertiary" $fontBold="600">
              (344) stars
            </SkillSpan>
          </SkillSpan>
        </SkillText>
      </SkillBox>
      <SkillBox>
        <SkillList $flex={true} $alignItems="center" $gap="14px">
          <SkillListItem>
            <SkillImg src={groupJoinIcon} />
          </SkillListItem>
          <SkillListItem>
            <BsThreeDots cursor={"pointer"} />
          </SkillListItem>
        </SkillList>
      </SkillBox>
    </SkillBox>
  );

  const usersFeedHeader = (
    <SkillBox
      $flex={true}
      $justifyContent="space-between"
      $alignItems="center"
      $margin="0 0 20px 0"
    >
      <SkillBox $flex={true} $gap="10px">
        <SkillImg
          src={feedData?.userId?.profilePhoto}
          alt="users_img"
          $height="40px"
          $width="40px"
          $border="1px solid blue"
          $borderRadius="50%"
        />
        <SkillText $flex={true} $flexDirection="column" $gap="4px">
          <SkillSpan $variant="primary">
            {" "}
            {feedData?.userId?.firstName} {feedData?.userId?.lastName}
          </SkillSpan>
          <SkillSpan
            $variant="secondary"
            $flex={{ $gap: "5px", $alignItems: "center" }}
          >
            <SkillSpan $variant="tertiary">
              Thu at 12:30 PM{""}
              <SkillSpan $margin="0px 0 0 4px">|</SkillSpan>
            </SkillSpan>
            <SkillSpan
              $variant="secondary"
              $flex={{ $gap: "2px", $alignItems: "center" }}
            >
              <SkillImg
                src={groupFollowersIcons}
                $height="10px"
                $width="10px"
              />
              5.3k <SkillSpan $margin="0 0 0 2px">|</SkillSpan>
            </SkillSpan>
            <SkillSpan $variant="tertiary" $fontBold="600">
              (344) stars
            </SkillSpan>
          </SkillSpan>
        </SkillText>
      </SkillBox>
      <SkillBox>
        <SkillList $flex={true} $alignItems="center" $gap="14px">
          <SkillListItem>
            <SkillImg src={groupJoinIcon} />
          </SkillListItem>
          <SkillListItem>
            <BsThreeDots cursor={"pointer"} />
          </SkillListItem>
        </SkillList>
      </SkillBox>
    </SkillBox>
  );

  const isFeedImage = feedData?.postImage && (
    <SkillBox $height="240px" $width="100%">
      <SkillImg
        src={feedData?.postImage}
        $height="240px"
        $width="100%"
        $object="cover"
        $borderRadius="15px"
        $border="2px solid #000"
      />
    </SkillBox>
  );
  const isFeedGif = feedData?.gif && (
    <SkillBox $height="240px" $width="100%">
      <SkillImg
        src={feedData?.gif}
        $height="240px"
        $object="cover"
        $width="100%"
        $borderRadius="15px"
        $border="2px solid #000"
      />
    </SkillBox>
  );
  const isFeedBG = feedData?.bgColor && (
    <SkillBox
      $height="240px"
      $width="100%"
      $backgroundColor={feedData?.bgColor}
      $flex={true}
      $alignItems={"center"}
      $borderRadius="15px"
      $justifyContent={"center"}
    >
      <SkillText
        $fontBold="700"
        $variant="bgText"
        $margin="0 0 12px 0"
        $lineHeight="23px"
      >
        {feedData?.description}
      </SkillText>
    </SkillBox>
  );
  const isFeedVideo = feedData?.videoUrl && (
    <SkillBox $height="240px" $width="100%" $borderRadius="15px">
      <ReactPlayer width="100%" height="100%" url={feedData?.videoUrl} />
    </SkillBox>
  );

  const feedHeader = feedData?.groupId ? groupFeedHeader : usersFeedHeader;

  return (
    <SkillCard
      $shadow={true}
      $padding="20px"
      $margin="0 auto 20px auto"
      $width="100%"
      $maxWidh="650px"
    >
      {feedHeader}
      <SkillBox>
        {!isFeedBG && (
          <SkillText
            $fontBold="500"
            $variant="tertiary"
            $margin="0 0 12px 0"
            $lineHeight="26px"
          >
            {feedData?.description}
            <SkillSpan>...more</SkillSpan>
          </SkillText>
        )}

        <SkillText $variant="tags" $margin="0 0 20px 0">
          #Gardening#garden#veggies#expertgardening....
        </SkillText>
      </SkillBox>
      {isFeedImage || isFeedGif || isFeedBG || isFeedVideo}
      <SkillBox
        $flex={true}
        $alignItems="center"
        $gap="15px"
        $margin="20px 0 0 0 "
      >
        <SkillImg
          src={user?.profilePhoto}
          $height="40px"
          $width="40px"
          $object="cover"
          $borderRadius="50%"
          $border="1px solid #000"
        />
        <SkillInput placeholder="Add a comment..." $mode="two" />
        <SkillList $flex={true} $alignItems="center" $gap="10px">
          <SkillListItem>
            <SkillImg src={sortInc} />
          </SkillListItem>
          <SkillListItem>
            <SkillImg src={sortDesc} />
          </SkillListItem>
        </SkillList>
      </SkillBox>
    </SkillCard>
  );
}

export default SkillFeed;
