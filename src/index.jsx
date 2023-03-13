import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/RouterProvider";
import { KEYS } from "./config/keys";

import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = KEYS.apiUri;
axios.defaults.headers = {
  "X-RapidAPI-Key": KEYS.apiKey,
  "X-RapidAPI-Host": KEYS.apiHost,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
