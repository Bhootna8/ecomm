import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Store from "./Context/Store.jsx";
import ThemeContextProvider from "./Context/themeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Store>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </Store>
    </BrowserRouter>
  </React.StrictMode>
);
