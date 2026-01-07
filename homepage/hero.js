/* ===========================
   HERO SECTION
   =========================== */

function createHeroSection() {
  const heroSection = document.getElementById("hero-section");

  heroSection.className = "hero-section";
  heroSection.innerHTML = `
        <div class="hero-background-gradient">
            <img src="Assets/Images/gradient Vector.svg" alt="">
        </div>
        
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>
                        We help <span class="highlight-purple">Start-ups</span><br>
                        <span class="code-icon">&lt;/&gt;</span> <span class="highlight-purple">Build</span><br>
                        better <span class="highlight-blue">MVPs</span><br>
                        that just works.
                    </h1>
                    
                    <p class="hero-description">
                        Turn your product ideas into market-ready and modern reliable software 
                        with the speed to scale and consistency every project deserves.
                    </p>
                    
                    <div class="hero-cta">
                        <a href="#contact" class="btn btn-primary btn-hero-cta">
                            <img src="Assets/Images/Arrow-Right.svg" alt="" class="btn-icon">
                            <div class="btn-text">
                                <span class="btn-text-small">Ready for a real scale up</span>
                                <span class="btn-text-large">Book a free consultation call</span>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div class="hero-image-container">
                    <div class="hero-image-wrapper">
                        <img src="Assets/Images/hero image.png" alt="Just-Java Team Member">
                    </div>
                </div>
            </div>
            
            <!-- Services Cards Grid -->
            <div class="services-cards-grid">
                <!-- CoreCare Card -->
                <div class="product-card">
                    <img src="Assets/Images/tag.svg" alt="" class="product-card-badge">
                    
                    <div class="product-card-header">
                        <div class="product-card-icon">
                            <img src="Assets/Images/settings.svg" alt="CoreCare Icon">
                        </div>
                        <h3 class="product-card-title">CoreCare<sup>TM</sup></h3>
                    </div>
                    
                    <p class="product-card-subtitle">Our fleet launch System</p>
                </div>
                
                <!-- DeliveryOS Card -->
                <div class="product-card">
                    <img src="Assets/Images/tag.svg" alt="" class="product-card-badge">
                    
                    <div class="product-card-header">
                        <div class="product-card-icon">
                            <img src="Assets/Images/refresh.svg" alt="DeliveryOS Icon">
                        </div>
                        <h3 class="product-card-title">DeliveryOS</h3>
                    </div>
                    
                    <p class="product-card-subtitle">Our step by step delivery process</p>
                </div>
            </div>
        </div>
    `;
}

// Initialize hero section on page load
createHeroSection();
