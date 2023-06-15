import { create } from "zustand";

interface MenuState {
  onMenu: boolean;
  handleMenu: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  onMenu: false,
  handleMenu: () => set((state) => ({ onMenu: !state.onMenu })),
}));
