import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

export default function Cart({ cartItems, onUpdateQty, onRemove }) {
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛍️</div>
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart to get started</p>
        <Link to="/shop" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }
  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>
          {totalItems} item{totalItems !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQty={onUpdateQty}
              onRemove={onRemove}
            />
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal ({totalItems} items)</span>
            <span>${totalPrice}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span
              className={parseFloat(totalPrice) >= 50 ? "free-shipping" : ""}
            >
              {parseFloat(totalPrice) >= 50 ? "FREE" : "$5.99"}
            </span>
          </div>

          {parseFloat(totalPrice) < 50 && (
            <p className="shipping-notice">
              Add ${(50 - parseFloat(totalPrice)).toFixed(2)} more for free
              shipping!
            </p>
          )}

          <div className="summary-divider"></div>

          <div className="summary-row total">
            <span>Total</span>
            <span>
              $
              {parseFloat(totalPrice) >= 50
                ? totalPrice
                : (parseFloat(totalPrice) + 5.99).toFixed(2)}
            </span>
          </div>

          <button className="btn-checkout">Proceed to checkout</button>

          <Link to="/shop" className="btn-continue">
            Continue Shipping
          </Link>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onUpdateQty: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
