import { create } from "zustand";

const useEditProfile = create((set) => ({
  open: false,

  openEdit: () => set(() => ({ open: true })),
  closeEdit: () => set(() => ({ open: false })),
}));

export default useEditProfile;
