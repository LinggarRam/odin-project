import { switchToMenu } from "./index.js";

const createHomePage = () => {
    const container = document.createElement("div");
    container.classList.add("home-page");

    const hero = document.createElement("section");
    hero.classList.add("hero");
    hero.innerHTML = `
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <p class="hero-tagline">EST.2026 - Ponorogo</p>
            <h1 class="hero-title">Tumikari<br/>Restaurant</h1>
            <p class="hero-desc">
                Where the rich flavors of the Indonesian archipelago meet the elegance of modern fine dining.
            </p>
            <button class="hero-btn">Jelajahi Menu Kita</button>
        </div>
    `;

    // Add event listener to hero button
    const heroBtn = hero.querySelector(".hero-btn");
    heroBtn.addEventListener("click", () => {
        switchToMenu();
    });

    const features = document.createElement("section");
    features.classList.add("features");
    features.innerHTML = `
        <h2 class="section-title">Why Choose Us</h2>
        <div class="divider"></div>
        <p class="section-subtitle">A dining experience unlike any othe</p>
        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">🌿</span>
                <h3>Fresh Ingredients</h3>
                <p>We source only the finest local ingredients, delivered fresh every morning from trusted farmers.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">👨‍🍳</span>
                <h3>Expert Chefs</h3>
                <p>Our team of award-winning chefs brings decades of experience in traditional Indonesian cuisine.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🕯️</span>
                <h3>Elegant Ambiance</h3>
                <p>A warm and intimate atmosphere perfect for romantic dinners, family gatherings, or business meals.</p>
            </div>
        </div>
    `;

    container.appendChild(hero);
    container.appendChild(features);

    return container;
};

export default createHomePage;