import { useState } from "react";
import PropTypes from "prop-types";
import useProducts from "../hooks/useProducts.js";
import ProductCard from "../components/ProductCard.jsx";
import "../styles/Shop.css";

export default function Shop({ onAddToCart }) {
  const { products, isLoading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState("all");
  const [notification, setNotification] = useState("");

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddTocart = (product, qty) => {
    onAddToCart(product, qty);
    setNotification(`✅ ${product.title.substring(0, 30)}... Added to cart!`);
    setTimeout(() => setNotification(""), 2500);
  };

  if (isLoading) {
    return (
      <div className="page-loading">
        <div className="spinner"></div>
        <p>Loading Products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div classNeme="page-error">
        <p>⚠️ Failed to load products. Please refresh the page.</p>
        <p className="error-detail">{error}</p>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Our Products</h1>
        <p>{filteredProducts.length} products found</p>
      </div>

      {notification && (
        <div className="notification" role="alert">
          {notification}
        </div>
      )}

      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddTocart}
          />
        ))}
      </div>
    </div>
  );
}

Shop.proptypes = {
  onAddToCart: PropTypes.func.isRequired,
};
