// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import "./styles/App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

export default function App() {
  // const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navbar totalItems={totalItems} />*/}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route psth="/cart" element={<Cart />} />
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
