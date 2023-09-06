import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Hero } from "./components/Hero.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Hero />
  </React.StrictMode>
);
