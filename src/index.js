import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ApplicationRoutes from "./routes/index.routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplicationRoutes />
  </React.StrictMode>
);
