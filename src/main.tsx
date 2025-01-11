/**
 * @file src/main.tsx
 * @author Gaspard Ruan
 * @data 2025-01-11
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { getBeauty, getLatest } from "./axios";
import router from "./routes";
import { BeautyContext, LatestContext } from "./context";
import "./index.css";

const data = await Promise.all([getLatest(), getBeauty()]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LatestContext.Provider value={data[0]}>
      <BeautyContext.Provider value={data[1]}>
        <RouterProvider router={router} />
      </BeautyContext.Provider>
    </LatestContext.Provider>
  </React.StrictMode>
);
