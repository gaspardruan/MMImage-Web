import { Button } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

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
