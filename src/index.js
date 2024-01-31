import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
