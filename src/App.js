import { React, useState, useEffect } from "react";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import data from "./components/data";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      //   const res = await fetch(data);
      //     const datares = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  const [cart, setCart] = useState([]);
  function updateCart(item, quantity) {
    setCart((prev) => [...prev, { item, quantity }]);
  }
  function deleteItem(id) {
    setCart((prev) => prev.filter((item) => item.item.id !== id));
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/products/:id"
            element={
              <ProductDetails products={products} updateCart={updateCart} />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} deleteItem={deleteItem} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
