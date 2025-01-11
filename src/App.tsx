import { useState } from "react";
import { Button } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();
  const [count, setCount] = useState(0);

  const onClick = (to: string) => {
    setCount(count + 1);
    setTimeout(() => setCount(0), 300);
    if (count === 2) nav(to);
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-800">
      <div className="w-48 h-48 flex flex-col">
        <Button
          large
          intent="primary"
          className="m-4 rounded-md"
          onClick={() => onClick("/latest")}
        >
          Images
        </Button>
        <Button
          large
          intent="primary"
          className="m-4 rounded-md"
          onClick={() => onClick("/beauty")}
        >
          Beauties
        </Button>
      </div>
    </div>
  );
}

export default App;
