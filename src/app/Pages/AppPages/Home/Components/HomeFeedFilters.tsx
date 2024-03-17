import radioOn from "../assets/radioOn.png";
import radioOff from "../assets/radioOff.png";
import { SkillFilter } from "@/app/Components";
import useFeedFilter from "../store/useFeedFilter";
import { useEffect } from "react";

export interface HomeFeedTitleTabsProps {
  id: number;
  label: string;
  value: string;
}
export interface HomeFeedContentProps {
  id: number;
  label: string;
  value: string;
  checked: string;
  unChecked: string;
}

export interface HomeFeedProps {
  titleTabs: HomeFeedTitleTabsProps[];
  contents: HomeFeedContentProps[][];
}
const defaultFeedKey = "new"; // Default value for feed key
const defaultTimeKey = "allTime"; // Default value for time key

function HomeFeedFilters() {
  const feedKey = useFeedFilter((state) => state.feedFilter);
  const timeKey = useFeedFilter((state) => state.timeFilter);
  const setFeedFilter = useFeedFilter((state) => state.setFeedFilter);
  const setTimeFilter = useFeedFilter((state) => state.setTimeFilter);

  useEffect(() => {
    setTimeFilter(defaultTimeKey);
    setFeedFilter(defaultFeedKey);
  }, [setFeedFilter, setTimeFilter]);

  const data = {
    titleTabs: [
      {
        id: 1,
        label: "Feeds",
        value: "feeds",
      },
      {
        id: 2,
        label: "Time",
        value: "time",
      },
    ],
    contents: [
      [
        {
          id: 1,
          label: "New",
          value: "new",
          checked: radioOn,
          unChecked: radioOff,
        },
        {
          id: 2,
          label: "Comment Count",
          value: "commentcount",
          checked: radioOn,
          unChecked: radioOff,
        },
        {
          id: 3,
          label: "Top",
          value: "top",
          checked: radioOn,
          unChecked: radioOff,
        },
      ],
      [
        {
          id: 1111,
          label: "Today",
          value: "today",
          checked: radioOn,
          unChecked: radioOff,
        },
        {
          id: 2222,
          label: "Past Hour",
          value: "pastHour",
          checked: radioOn,
          unChecked: radioOff,
        },
        {
          id: 44443,
          label: "All Time",
          value: "allTime",
          checked: radioOn,
          unChecked: radioOff,
        },
        {
          id: 4,
          label: "Past Week",
          value: "pastWeek",
          checked: radioOn,
          unChecked: radioOff,
        },
        {
          id: 5,
          label: "Past Month",
          value: "pastMonth",
          checked: radioOn,
          unChecked: radioOff,
        },
        {
          id: 6,
          label: "Past Year",
          value: "pastYear",
          checked: radioOn,
          unChecked: radioOff,
        },
      ],
    ],
  };

  function FeedFilter(feedKey: string, timeKey: string) {
    setTimeFilter(timeKey);
    setFeedFilter(feedKey);
  }

  return (
    <SkillFilter
      filterData={data}
      feedFilter={FeedFilter}
      feedKey={feedKey}
      timeKey={timeKey}
    />
  );
}

export default HomeFeedFilters;
