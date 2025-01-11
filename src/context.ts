import { createContext } from "react";

import { ImageSuit, BeautySuit } from "./interface";

export const LatestContext = createContext<ImageSuit[]>([]);

export const BeautyContext = createContext<BeautySuit>({
  names: {},
  images: {},
});
