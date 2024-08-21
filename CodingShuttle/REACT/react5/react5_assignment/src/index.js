import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> calling (rendering) the component two times
  <BrowserRouter>
    <App />
  </BrowserRouter>
  /* </React.StrictMode> */
);
