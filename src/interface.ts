export const LIST_STEP = 30;

export interface ImageSuit {
  id: number;
  name: string;
  count: number;
  prefix: string;
  time: Date;
}

export interface ImageCollection {
  num: number;
  images: ImageSuit[];
}

export interface BeautySuit {
  names: Record<string, string[]>;
  images: Record<string, ImageCollection>;
}
