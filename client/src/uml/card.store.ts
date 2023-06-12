import { create } from 'zustand'
import { Card } from './Card'

type CardState = {
    cards: Card[]
    addCard: (title: string, body: string, x: number, y: number) => void
    updateCard: (id: number, payload: Partial<Card>) => void
}

const INITIAL_STATE: Card[] = [
    { id: 1, title: 'Card 1', body: 'This is the body of Card 1', x: 100, y: 200 },
    { id: 2, title: 'Card 2', body: 'This is the body of Card 2', x: -250, y: -150 },
]

export const useCardStore = create<CardState>((set) => ({
    cards: INITIAL_STATE,
    lines: [],
    updateCard: (id, payload) =>
        set((state) => {
            const cardToUpdate = state.cards.find((card) => card.id === id)
            if (!cardToUpdate) {
                return state
            }
            const newState = state.cards.filter((card) => card.id !== id)
            const nextState = { cards: [...newState, { ...cardToUpdate, ...payload }] }
            return nextState
        }),
    addCard: (title, body, x, y) =>
        set((state) => ({
            cards: [...state.cards, { id: state.cards.length, title, body, x, y }],
        })),
}))
