const createAboutPage = () => {
    const container = document.createElement("div");
    container.classList.add("about-page");

    container.innerHTML = `
        <section class="about-story">
            <div class="about-story-content">
                <p class="about-tagline">OUR STORY</p>
                <h2 class="section-title" style="text-align: left; margin-bottom: 15px;">
                    A Passion for<br/>Indonesian Flavors
                </h2>
                <div class="divider" style="margin: 0 0 30px 0"></div>
                <p class="about-text">
                    Founded in 2020 in the heart of Jakarta, Nusantara Restaurant was born from a dream — to bring the diverse and rich culinary heritage of the Indonesian archipelago to a fine dining experience.
                </p>
                <p class="about-text">
                    Our head chef, Chef Budi Santoso, spent 15 years traveling across Indonesia's 17,000 islands, learning ancient recipes passed down through generations. Today, those recipes live on in every dish we serve.
                </p>
            </div>
            <div class="about-story-image">
                <div class="image-placeholder">🍽️</div>
            </div>
        </section>

        <section class="about-info">
            <div class="info-card">
                <span class="info-icon">🕐</span>
                <h3>Opening Hours</h3>
                <ul class="info-list">
                    <li><span>Monday - Friday</span><span>11:00 - 22:00</span></li>
                    <li><span>Saturday</span><span>10:00 - 23:00</span></li>
                    <li><span>Sunday</span><span>10:00 - 21:00</span></li>
                </ul>
            </div>
            <div class="info-card">
                <span class="info-icon">📍</span>
                <h3>Location</h3>
                <ul class="info-list">
                    <li>Jl. Imam Bonjol. 164</li>
                    <li>Kauman</li>
                    <li>Ponorogo</li>
                    <li>Ponorogo</li>
                    <li>Indonesia</li>
                </ul>
            </div>
            <div class="info-card">
                <span class="info-icon">📞</span>
                <h3>Contact Us</h3>
                <ul class="info-list">
                    <li>+62 21 5250 8888</li>
                    <li>@tumikariresto.co.id</li>
                    <li>@tumikariresto</li>
                </ul>
            </div>
        </section>
    `;

    return container;
};

export default createAboutPage;