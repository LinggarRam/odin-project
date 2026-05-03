import "./styles.css";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";

// Initialize the page
const content = document.getElementById("content");

// Function to load a page
const loadPage = (pageLoader) => {
    content.innerHTML = "";
    content.appendChild(pageLoader());
};

// Function to switch to menu tab
export const switchToMenu = () => {
    // Update tab buttons
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach((btn) => {
        if (btn.dataset.tab === "menu") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Load menu page
    loadPage(createMenuPage);
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
                loadPage(createMenuPage);
            } else if (tab === "about") {
                loadPage(createAboutPage);
            }
        });
    });
});