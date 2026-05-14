// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/App.css";

export default function App() {
  // const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar totalItems={totalItems} />

        <main className="main-content">
          <Routes>
            <Route />
            <Route />
            <Route />
            <Route />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; Mei 2026 - Linggar Ramadhan</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
