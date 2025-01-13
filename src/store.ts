import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";
import superjson from "superjson";

import { ImageSuit, BeautySuit } from "./interface";

interface ImageState {
  latest: ImageSuit[];
  beauty: BeautySuit;
  lastUpdateTime: number;
  setData: (latest: ImageSuit[], beauty: BeautySuit) => void;
  setLatest: (latest: ImageSuit[]) => void;
  setBeauty: (beauty: BeautySuit) => void;
  setLastUpdateTime: (lastUpdateTime: number) => void;
}

const storage: PersistStorage<ImageState> = {
  getItem: (name) => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    return superjson.parse(str);
  },
  setItem: (name, value) => {
    localStorage.setItem(name, superjson.stringify(value));
  },
  removeItem: (name) => localStorage.removeItem(name),
};

export const useImageState = create<ImageState>()(
  persist(
    (set) => ({
      latest: [],
      collection: new Map(),
      beauty: { names: {}, images: {} },
      lastUpdateTime: 0,
      setData: (latest, beauty) => set({ latest, beauty }),
      setLatest: (latest) => set({ latest }),
      setBeauty: (beauty) => set({ beauty }),
      setLastUpdateTime: (lastUpdateTime) => set({ lastUpdateTime }),
    }),
    {
      name: "image-storage",
      storage,
    }
  )
);
