import { useLocation } from "react-router-dom";
import { ImageSuit } from "../interface";

import SuitList from "../components/suit-list";

const Album = () => {
  const images = useLocation().state as ImageSuit[];
  return <SuitList images={images} scrollRestore />;
};

export default Album;
