import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CustomThemeProvider } from "./Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);
