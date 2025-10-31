// 📁 File: C:\Users\KIIT\Documents\GitHub\Major\Frontend\projectMain\src\main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ⬅️ Updated to load the new App component
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
