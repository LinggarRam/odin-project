// ============================================================
// NAVBAR: scrolled state dan active link
// ============================================================
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

// Tambahkan class 'scrolled' saat user scroll lebih dari 50px
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// IntersectionObserver: highlight nav link sesuai section aktif
const observerOptions = {
  root: null,
  rootMargin: "-40% 0px -40% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// ============================================================
// HAMBURGER MENU (mobile)
// ============================================================
const hamburger = document.getElementById("hamburger");
const navbarLinks = document.getElementById("navbar-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navbarLinks.classList.toggle("open");
});

// Tutup menu saat nav link diklik
navbarLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navbarLinks.classList.remove("open");
  });
});

// ============================================================
// CONTACT FORM VALIDATION
// ============================================================
const contactForm = document.getElementById("contact-form");

const showError = (inputId, message) => {
  const errorEl = document.getElementById(`${inputId}-error`);
  if (errorEl) errorEl.textContent = message;
  document.getElementById(inputId)?.classList.add("error");
};

const clearError = (inputId) => {
  const errorEl = document.getElementById(`${inputId}-error`);
  if (errorEl) errorEl.textContent = "";
  document.getElementById(inputId)?.classList.remove("error");
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Clear semua error dulu
  ["name", "email", "message"].forEach(clearError);
  document.getElementById("form-success").classList.add("hidden");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || name.length < 2) {
    showError("name", "Please enter your name (min 2 characters)");
    valid = false;
  }

  if (!email || !isValidEmail(email)) {
    showError("email", "Please enter a valid email address");
    valid = false;
  }

  if (!message || message.length < 10) {
    showError("message", "Message must be at least 10 characters");
    valid = false;
  }

  if (valid) {
    // Simulasi kirim (karena tidak ada backend)
    const btn = contactForm.querySelector("button[type=submit]");
    btn.textContent = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      contactForm.reset();
      btn.textContent = "Send Message";
      btn.disabled = false;
      document.getElementById("form-success").classList.remove("hidden");
    }, 1200);
  }
});

// Hapus error saat user mulai mengetik
["name", "email", "message"].forEach((id) => {
  document.getElementById(id)?.addEventListener("input", () => clearError(id));
});
