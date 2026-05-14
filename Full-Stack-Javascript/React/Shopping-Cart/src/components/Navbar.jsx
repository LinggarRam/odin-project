import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ totalItems }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🛍️ ShopReact
        </Link>

        <nav className="navbar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            🛒 Cart
            {totalItems > 0 && (
              <span
                className="cart-badge"
                aria-label={`${totalItems} items in cart`}
              >
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  totalItems: PropTypes.number.isRequired,
};
