import { create } from "zustand";
import items from "../constants";

export const stores = create((set) => ({
  item: items,
  addItem: (newItem) => set((state) => ({
    item : [...state.item, newItem]
  })),

  deleteItem : (id) => set((state) => ({
    item : [...state.item.filter((item) => {
        return item.id !== id
    })]
  }))
}));
