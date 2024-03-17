import { create } from "zustand";

const useGlobalSearch = create((set) => ({
  searchTerm: "",
  setSearchTerm: (term: string) => set(() => ({ searchTerm: term })),
}));

export default useGlobalSearch;
