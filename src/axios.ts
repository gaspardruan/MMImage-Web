import { ImageSuit, BeautySuit } from "./interface";
import axios from "axios";

const prodURL =
  "https://gist.githubusercontent.com/gaspardruan/a6eca088981a25d9ea61ec50cf54b129/raw";
const devURL = "http://localhost:5173/api";

const url = import.meta.env.DEV ? devURL : prodURL;
axios.defaults.baseURL = url;

export async function getLatest(): Promise<ImageSuit[]> {
  const response = await axios.get("/latest.json");
  return response.data.data as ImageSuit[];
}

export async function getBeauty(): Promise<BeautySuit> {
  const response = await axios.get("/beauty.json");
  return response.data.data as BeautySuit;
}
