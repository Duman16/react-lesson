import React from "react";
import ReactDOM from "react-dom/client"; // Используем createRoot
import App from "./App";
import "./index.css";

// Создаём корневой узел
const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
