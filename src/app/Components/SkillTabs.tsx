import { ReactElement } from "react";
import { SkillCard, SkillList, SkillListItem } from "../Ui";

interface TabsProps {
  id: number | string;
  icon?: ReactElement;
  label: string;
  link: string;
  active: boolean;
}

interface SkillTabProps {
  onTabChange: (query: string) => void;
  tabsData: TabsProps[];
}

function SkillTabs({ tabsData, onTabChange }: SkillTabProps) {
  return (
    <SkillCard $shadow={true}>
      <SkillList>
        {tabsData.map((tab: TabsProps) => {
          return (
            <SkillListItem
              key={tab?.id}
              $variant={"primary"}
              $active={tab?.active}
              onClick={() => onTabChange(tab?.link)}
            >
              {tab.icon} {tab.label}
            </SkillListItem>
          );
        })}
      </SkillList>
    </SkillCard>
  );
}

export default SkillTabs;
