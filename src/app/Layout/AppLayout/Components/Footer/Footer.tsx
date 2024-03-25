import {
  SkillContainer,
  SkillFooter,
  SkillList,
  SkillListItem,
} from "@/app/Ui";

function Footer() {
  return (
    <SkillFooter>
      <SkillContainer>
        {" "}
        <SkillList
          $flex={true}
          $justifyContent="space-between"
          $alignItems="center"
        >
          <SkillListItem >
            Copyright © 2023 Skill Collab. All Rights Reserved.
          </SkillListItem>
          <SkillListItem>Privacy Policy</SkillListItem>
        </SkillList>
      </SkillContainer>
    </SkillFooter>
  );
}

export default Footer;
