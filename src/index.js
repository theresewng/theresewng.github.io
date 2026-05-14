import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import HashRouter instead of BrowserRouter
import { HashRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap your App component in HashRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
