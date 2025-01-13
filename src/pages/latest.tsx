import { useImageState } from "../store";
import SuitList from "../components/suit-list";

const Lastest = () => {
  const { latest } = useImageState();
  return <SuitList images={latest} />;
};

export default Lastest;
