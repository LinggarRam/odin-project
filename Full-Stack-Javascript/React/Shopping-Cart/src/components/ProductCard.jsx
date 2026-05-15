import {useState} from "react";
import PropTypes from "prop-types";

export default function ProductCard({ product, onAddToCart }) {
  const [qty, setQty] = useState(1);

  const handleDecrement = () => {
    setQty((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQty((prev) => Math.min(99, prev + 1));
  };

  const handleQtyChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value) && value >= 1 && value <= 99) {
      setQty(value);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, qty);
    setQty(1);
  };

  const displayCategory = product.category
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
      </div>

      <div className="product-info">
        <span className="product-category">{displayCategory}</span>
        <h3 className="product-title" title={product.title}>
          {product.title.length > 50
            ? product.title.substring(0, 50) + "..."
            : product.title}
        </h3>
        <div className="product-rating">
          <span className="stars">
            {"★".repeat(Math.round(product.rating?.rate || 0))}
            {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
          </span>
          <span className="rating-count">({product.rating?.count || 0})</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>

      <div className="product-actions">
        <div className="qty-controls">
          <button
            className="qty-btn"
            onClick={handleDecrement}
            aria-label="Decrease Quantity"
            disabled={qty <= 1}
          >
            -
          </button>
          <input
            type="number"
            className="qty-input"
            value={qty}
            onChange={handleQtyChange}
            min="1"
            max="99"
            aria-label="Quantity"
          />
          <button
            className="qty-btn"
            onClick={handleIncrement}
            aria-label="Increase Quantity"
            disabled={qty >= 99}
          >
            +
          </button>
        </div>

        <button className="btn-add-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
