import { create } from "zustand";

interface MenuState {
  onMenu: boolean;
  handleMenu: (menu: boolean) => void;
}
interface TitleState {
  onTitle: string;
  handleTitle: (title: string) => void;
}

interface ModalState {
  onModal: boolean;
  handleModal: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  onMenu: false,
  handleMenu: (menu: boolean) => set(() => ({ onMenu: menu })),
}));

export const useTitleStore = create<TitleState>((set) => ({
  onTitle: "PIKCHA",
  handleTitle: (title: string) => set(() => ({ onTitle: title })),
}));

export const useModalStore = create<ModalState>((set) => ({
  onModal: false,
  handleModal: () => set((state) => ({ onModal: !state.onModal })),
}));
