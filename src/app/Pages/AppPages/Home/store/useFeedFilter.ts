import { create } from "zustand";

const useFeedFilter = create((set) => ({
  timeFilter: "",
  feedFilter: "",
  setTimeFilter: (key: string) => set(() => ({ timeFilter: key })),
  setFeedFilter: (key: string) => set(() => ({ feedFilter: key })),
}));

export default useFeedFilter;
