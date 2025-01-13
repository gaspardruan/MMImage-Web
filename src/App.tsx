import { useEffect } from "react";

import { Button } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

import { useImageState } from "./store";
import { getBeauty, getLatest } from "./axios";

const isLaunchedInOneDay = (time1: number, time2: number): boolean => {
  const halfDay = 24 * 60 * 60 * 1000;
  const diff = Math.abs(time1 - time2);
  return diff <= halfDay;
};

function App() {
  const nav = useNavigate();

  const { lastUpdateTime, setData, setLastUpdateTime } = useImageState();

  useEffect(() => {
    if (!isLaunchedInOneDay(lastUpdateTime, new Date().getTime())) {
      Promise.all([getLatest(), getBeauty()]).then((res) => {
        setData(res[0], res[1]);
        setLastUpdateTime(new Date().getTime());
      });
    }
  }, [lastUpdateTime, setData, setLastUpdateTime]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-800">
      <div className="w-48 h-48 flex flex-col">
        <Button
          large
          intent="primary"
          className="m-4 rounded-md"
          onClick={() => nav("/latest")}
        >
          Images
        </Button>
        <Button
          large
          intent="primary"
          className="m-4 rounded-md"
          onClick={() => nav("/beauty")}
        >
          Beauties
        </Button>
      </div>
    </div>
  );
}

export default App;
