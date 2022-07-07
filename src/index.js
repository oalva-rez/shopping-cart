import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/Header/header.css";
import "./components/Hero/hero.css";
import "./components/Categories/categories.css";
import "./components/Footer/footer.css";
import "./pages/Products/products.css";
import "./pages/ProductDetails/productdetails.css";
import "./pages/Cart/cart.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
