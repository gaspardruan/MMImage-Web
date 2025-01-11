import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Lastest from "./pages/latest.tsx";
import Beauty from "./pages/beauty.tsx";
import Album from "./pages/album.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/latest",
    element: <Lastest />,
    children: [],
  },
  {
    path: "/beauty",
    element: <Beauty />,
    children: [],
  },
  {
    path: "/beauty/:hash",
    element: <Album />,
    children: [],
  },
]);

export default router;
