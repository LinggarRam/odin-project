import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import "./styles/App.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item,
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: qty,
        },
      ];
    });
  };

  const updateQty = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id != id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar totalItems={totalItems} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />

            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  onUpdateQty={updateQty}
                  onRemove={removeFromCart}
                />
              }
            />

            <Route
              path="*"
              element={
                <div className="not-found">
                  <h2>404 — Page Not Found</h2>
                  <a href="/">Go Home</a>
                </div>
              }
            />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; Mei 2026 - Linggar Ramadhan</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
