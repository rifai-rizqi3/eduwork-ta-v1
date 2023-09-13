import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Hero } from "./components/Hero.tsx";
import { Slidercategory } from "./components/Slidercategory.tsx";
import { Kategori } from "./components/Kategori.tsx";
import { Promo } from "./components/Promo.tsx";
import "./index.css";
import { Produk } from "./components/Produk.tsx";
import { Brand } from "./components/Brand.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Hero />
    <Slidercategory />
    <Kategori />
    <Promo />
    <Produk />
    <Brand />
    <Footer />
  </React.StrictMode>
);
