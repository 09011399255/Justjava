/* ===========================
   MAIN JAVASCRIPT
   =========================== */

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Don't prevent default for just "#"
    if (href === "#") return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector(".main-navigation");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    nav.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
  } else {
    nav.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  }

  lastScroll = currentScroll;
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const nav = document.querySelector(".main-navigation");
  const navLinks = document.querySelector(".nav-links");
  const toggleBtn = document.querySelector(".mobile-menu-toggle");

  if (navLinks && !nav.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

console.log("Just-Java website loaded successfully!");
