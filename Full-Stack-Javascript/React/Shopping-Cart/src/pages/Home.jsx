import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-badge">✨ New Collection 2026</p>
          <h1 className="hero-title">
            Discover amazing <br />
            <span className="hero-highlight">Products</span>
          </h1>
          <p className="hero-desc">
            Shop the latest trends with unbeatable prices.
            Quality guaranteed on every purchase.
          </p>
          <div className="gero-actions">
            <Link to="/shop" className="btn btn-primary">
              Shop now
            </Link>
            <Link to="/cart" className="btn btn-outline">
              View Cart
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-emoji">🛍️</div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">🚚</span>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔄</span>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔒</span>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⭐</span>
          <h3>Top Quality</h3>
          <p>Curated products only</p>
        </div>
      </section>
    </div>
  )
}
