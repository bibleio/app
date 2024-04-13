import { create } from "zustand";

type TextFormattingMenuStore = {
  isTextFormattingMenuOpen: boolean;
  toggleMenu: () => void;
};

export const useTextFormattingMenuStore = create<TextFormattingMenuStore>(
  (set) => ({
    isTextFormattingMenuOpen: false,
    toggleMenu: () =>
      set((state) => ({
        isTextFormattingMenuOpen: !state.isTextFormattingMenuOpen,
      })),
  })
);
