import { useContext } from "react";
import { LatestContext } from "../context";
import { ImageSuit } from "../interface";
import SuitList from "../components/suit-list";

const Lastest = () => {
  const images = useContext(LatestContext) as ImageSuit[];
  return <SuitList images={images} />;
};

export default Lastest;
