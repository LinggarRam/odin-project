const menuData = [
    {
        category: "🍜 Signature Mains",
        items: [
            { name: "Rendang Wagyu", desc: "Slow-cooked wagyu beef in rich coconut and spice sauce", price: "Rp 185.000" },
            { name: "Soto Betawi Royal", desc: "Creamy beef broth with premium cuts, served with rice", price: "Rp 120.000" },
            { name: "Nasi Goreng Istimewa", desc: "Wok-fried rice with lobster, truffle oil and foie gras", price: "Rp 210.000" },
        ]
    },
    {
        category: "🥗 Starters",
        items: [
            { name: "Gado-Gado Platter", desc: "Fresh vegetables with house-made peanut sauce and crackers", price: "Rp 75.000" },
            { name: "Sate Lilit Bali", desc: "Minced seafood satay on lemongrass skewers", price: "Rp 95.000" },
            { name: "Bakwan Jagung Crispy", desc: "Golden corn fritters with sambal aioli dipping sauce", price: "Rp 65.000" },
        ]
    },
    {
        category: "🍮 Desserts",
        items: [
            { name: "Es Teler Royale", desc: "Premium coconut jelly, avocado, jackfruit in coconut cream", price: "Rp 75.000" },
            { name: "Klepon Cake", desc: "Modern twist on classic klepon in layered cake form", price: "Rp 85.000" },
            { name: "Pisang Foster Nusantara", desc: "Caramelized banana with palm sugar sauce and vanilla ice cream", price: "Rp 90.000" },
        ]
    }
];

const createMenuPage = () => {
    const container = document.createElement("div");
    container.classList.add("menu-page");

    const header = document.createElement("div");
    header.classList.add("menu-header");
    header.innerHTML = `
        <h2 class="section-title">Our Menu</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Crafted with passion, served with love</p>
    `;
    container.appendChild(header);

    menuData.forEach((category) => {
        const section = document.createElement("section");
        section.classList.add("menu-category");

        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("category-title");
        categoryTitle.textContent = category.category;
        section.appendChild(categoryTitle);

        const itemGrid = document.createElement("div");
        itemGrid.classList.add("menu-grid");

        category.items.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("menu-card");
            card.innerHTML = `
                <div class="menu-card-header">
                    <h4 class="menu-item-name">${item.name}</h4>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-desc">${item.desc}</p>
            `;
            itemGrid.appendChild(card);
        });

        section.appendChild(itemGrid);
        container.appendChild(section);
    });

    return container;
};

export default createMenuPage;
