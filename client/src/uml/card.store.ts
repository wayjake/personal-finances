import create from "zustand";

type CardState = {
  cards: { id: number; title: string; body: string; x: number; y: number }[];
  addCard: (title: string, body: string, x: number, y: number) => void;
};

export const useCardStore = create<CardState>((set) => ({
  cards: [],
  addCard: (title, body, x, y) =>
    set((state) => ({
      cards: [...state.cards, { id: state.cards.length, title, body, x, y }],
    })),
}));
