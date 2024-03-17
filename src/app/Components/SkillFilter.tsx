import { useEffect, useState } from "react";
import {
  SkillBox,
  SkillCard,
  SkillImg,
  SkillList,
  SkillListItem,
  SkillText,
} from "../Ui";
import {
  HomeFeedContentProps,
  HomeFeedProps,
  HomeFeedTitleTabsProps,
} from "../Pages/AppPages/Home/Components/HomeFeedFilters";

interface SkillFilter {
  filterData: HomeFeedProps;
  feedFilter: (feedKey: string, timeKey: string) => void;
  feedKey: string;
  timeKey: string;
}

function SkillFilter({
  filterData,
  feedFilter,
  feedKey,
  timeKey,
}: SkillFilter) {
  const [activeTab, setActiveTab] = useState("feeds");

  return (
    <SkillCard $margin="30px 0 0 0" $padding="30px 10px" $shadow="true">
      <SkillText $variant="tertiary">Filter Post By</SkillText>
      <SkillBox>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabData={filterData?.titleTabs}
        />
        <Options
          activeTab={activeTab}
          optionsData={filterData?.contents}
          setFeedFilter={feedFilter}
          feedKey={feedKey}
          timeKey={timeKey}
        />
      </SkillBox>
    </SkillCard>
  );
}

export default SkillFilter;

function Tabs({
  activeTab,
  setActiveTab,
  tabData,
}: {
  activeTab: string;
  setActiveTab: (feedType: string) => void;
  tabData: HomeFeedTitleTabsProps[];
}) {
  return (
    <SkillList $flex={true} $gap="20px" $mode="one">
      {tabData?.map((tab) => {
        return (
          <SkillListItem
            key={tab?.id}
            $variant="secondary"
            $active={activeTab == tab?.value}
            onClick={() => setActiveTab(tab?.value)}
          >
            {tab?.label}
          </SkillListItem>
        );
      })}
    </SkillList>
  );
}

interface Option {
  id: number;
  label: string;
  value: string;
  checked: string;
  unChecked: string;
}

interface OptionsProps {
  activeTab: string;
  optionsData: Option[][];
  setFeedFilter: (feedKey: string, timeKey: string) => void;
  feedKey: string;
  timeKey: string;
}

function Options({
  activeTab,
  optionsData,
  setFeedFilter,
  feedKey,
  timeKey,
}: OptionsProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    // Set default selection for "Feeds" or "Time" list
    const defaultOption = activeTab === "feeds" ? feedKey : timeKey;
    const defaultId =
      optionsData
        .find((data) => data.some((option) => option.value === defaultOption))
        ?.find((option) => option.value === defaultOption)?.id || null;
    setActiveItem(defaultId);
  }, [activeTab, optionsData, feedKey, timeKey]);

  const handleItemClick = (id: number, value: string) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === id ? null : id));
    const newFeedKey = activeTab === "feeds" ? value : feedKey;
    const newTimeKey = activeTab === "time" ? value : timeKey;
    setFeedFilter(newFeedKey, newTimeKey);
  };

  const listData = activeTab === "feeds" ? optionsData[0] : optionsData[1];

  return (
    <SkillBox $margin="10px 0 0 0">
      <SkillList>
        {listData?.map((list) => {
          const isActive = activeItem === list.id;
          return (
            <SkillListItem
              key={list.id}
              $variant="tertiary"
              $flex={true}
              $alignItems="center"
              $active={isActive}
              onClick={() => handleItemClick(list.id, list.value)}
            >
              <SkillImg
                $height={"20px"}
                $width={"20px"}
                $borderRadius="50%"
                src={isActive ? list.checked : list.unChecked}
              />
              {list.label}
            </SkillListItem>
          );
        })}
      </SkillList>
    </SkillBox>
  );
}
