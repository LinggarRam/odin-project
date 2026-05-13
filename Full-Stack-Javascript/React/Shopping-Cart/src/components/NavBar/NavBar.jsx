import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBar({ cartCount }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart {cartCount > 0 && `(${cartCount})`}</Link>
    </nav>
  );
}

NavBar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
