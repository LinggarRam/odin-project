import "./styles.css";
import createHomePage from "./home.js";

// Initialize the page
const content = document.getElementById("content");

// Function to load a page
const loadPage = (pageLoader) => {
    content.innerHTML = "";
    content.appendChild(pageLoader());
};

// Load home page by default
document.addEventListener("DOMContentLoaded", () => {
    loadPage(createHomePage);

    // Tab navigation
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            // Remove active class from all buttons
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            // Add active class to clicked button
            e.target.classList.add("active");

            // Load appropriate page
            const tab = e.target.dataset.tab;
            if (tab === "home") {
                loadPage(createHomePage);
            } else if (tab === "menu") {
                // Placeholder for menu page
                content.innerHTML = "<div style='padding: 60px; text-align: center;'><h2 class='section-title'>Menu</h2><p class='section-subtitle'>Coming soon...</p></div>";
            } else if (tab === "about") {
                // Placeholder for about page
                content.innerHTML = "<div style='padding: 60px; text-align: center;'><h2 class='section-title'>About</h2><p class='section-subtitle'>Coming soon...</p></div>";
            }
        });
    });
});