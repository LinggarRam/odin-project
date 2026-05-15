import PropTypes from "prop-types";

export default function CartItem({ item, onUpdateQty, onRemove }) {
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />

      <div className="cart-item-info">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item-qty">
        <button
          className="qty-btn"
          onClick={() => onUpdateQty(item.id, item.quantity - 1)}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="qty-display">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <p className="cart-item-subtotal">${subtotal}</p>

      <button
        className="btn-remove"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.title} from cart`}
      >
        x
      </button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateQty: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
