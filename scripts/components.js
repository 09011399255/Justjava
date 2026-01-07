/* ===========================
   REUSABLE COMPONENTS
   =========================== */

// Navigation Component
function createNavigation() {
  const nav = document.getElementById("main-nav");

  nav.innerHTML = `
        <div class="main-navigation">
            <div class="container">
                <div class="nav-container">
                    <a href="index.html" class="nav-logo">
                        <img src="Assets/Images/JJ LOGO 2.png" alt="Just-Java Logo">
                    </a>
                    
                    <button class="mobile-menu-toggle" aria-label="Toggle menu">
                        ☰
                    </button>
                    
                    <ul class="nav-links">
                        <li><a href="#services">Services</a></li>
                        <li><a href="#designos">DesignOS</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#insights">Insights</a></li>
                    </ul>
                    
                    <a href="#contact" class="btn btn-primary nav-cta-btn">
                        <img src="Assets/Images/call icon animated.svg" alt="" class="btn-icon">
                        Book a call
                    </a>
                </div>
            </div>
        </div>
    `;

  // Mobile menu toggle
  const toggleBtn = nav.querySelector(".mobile-menu-toggle");
  const navLinks = nav.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Initialize navigation on page load
createNavigation();
