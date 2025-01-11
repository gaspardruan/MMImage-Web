import { ImageSuit } from "./interface";

export const BASE_URL = "http://newxiuren.com/uploadfiles/";

export function getYearFromId(id: number): string {
  // 获取数字前4位
  return String(id).slice(0, 4);
}

export function getCoverURL(id: number, prefix: string): string {
  return `${BASE_URL}${prefix}/${getYearFromId(id)}/${id}/cover.jpg`;
}

export function getImageURLs(suit: ImageSuit) {
  return Array.from(
    { length: suit.count },
    (_, i) =>
      `${BASE_URL}${suit.prefix}/${getYearFromId(suit.id)}/${suit.id}/${
        suit.id * 100 + i + 1
      }.jpg`
  );
}

export function getImages(suit: ImageSuit) {
  return Array.from({ length: suit.count }, async (_, i) => {
    const url = `${BASE_URL}${suit.prefix}/${getYearFromId(suit.id)}/${
      suit.id
    }/${suit.id * 100 + i + 1}.jpg`;
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  });
}

export function scroll2Bottom() {
  return (
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.scrollHeight
  );
}

export const hash = (str: string, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i += 1) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  const res = 4294967296 * (2097151 & h2) + (h1 >>> 0);
  return res.toString().padStart(16, "0");
};
