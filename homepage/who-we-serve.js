function createWhoWeServeSection() {
  const section = document.getElementById("who-we-serve-section");

  section.className = "who-we-serve-section";
  section.innerHTML = `
        <div class="container">
            <h2 class="section-title">Who we serve?</h2>
            
            <div class="serve-cards-container">
                <!-- E-Commerce Card -->
                <div class="serve-card serve-card-ecommerce">
                    <div class="serve-icon-box">
                        <img src="Assets/Images/fintech icon.svg" alt="E-Commerce">
                    </div>
                    <h2 class="serve-card-title">E-Commerce</h2>
                    <div class="serve-tags">
                        <span class="serve-tag">Transaction Safety</span>
                        <span class="serve-tag">99.5%</span>
                        <span class="serve-tag">Payment</span>
                    </div>
                    <p class="serve-card-description">
                        Ensuring seamless and secure payment processing to boost customer trust and conversion rates
                    </p>
                    <a href="#" class="serve-learn-more">
                        Find out how
                        <span class="serve-arrow">→</span>
                    </a>
                </div>

                <!-- Startups Card -->
                <div class="serve-card serve-card-startups">
                    <div class="serve-icon-box">
                        <img src="Assets/Images/fintech icon.svg" alt="Startups">
                    </div>
                    <h2 class="serve-card-title">Startups</h2>
                    <div class="serve-tags">
                        <span class="serve-tag">Payment</span>
                        <span class="serve-tag">Auth</span>
                        <span class="serve-tag">Uptime</span>
                        <span class="serve-tag">Ledgers</span>
                    </div>
                    <p class="serve-card-description">
                        We build stable, secure systems built for scale and compliance
                    </p>
                    <a href="#" class="serve-learn-more">
                        Learn more
                        <span class="serve-arrow">→</span>
                    </a>
                </div>

                <!-- SaaS Founders Card -->
                <div class="serve-card serve-card-saas">
                    <div class="serve-icon-box">
                        <img src="Assets/Images/fintech icon.svg" alt="SaaS Founders">
                    </div>
                    <h2 class="serve-card-title">SaaS Founders</h2>
                    <div class="serve-tags">
                        <span class="serve-tag">Data Security</span>
                        <span class="serve-tag">99.9%</span>
                        <span class="serve-tag">Patient Records</span>
                    </div>
                    <p class="serve-card-description">
                        Ensuring the integrity and confidentiality of patient data with cutting-edge encryption methods
                    </p>
                    <a href="#" class="serve-learn-more">
                        Discover our approach
                        <span class="serve-arrow">→</span>
                    </a>
                </div>

                <!-- EdTech Card -->
                <div class="serve-card serve-card-edtech">
                    <div class="serve-icon-box">
                        <img src="Assets/Images/fintech icon.svg" alt="EdTech">
                    </div>
                    <h2 class="serve-card-title">EdTech</h2>
                    <div class="serve-tags">
                        <span class="serve-tag">User Engagement</span>
                        <span class="serve-tag">96%</span>
                        <span class="serve-tag">Learning Analytics</span>
                    </div>
                    <p class="serve-card-description">
                        Enhancing student outcomes through personalized learning and real-time data
                    </p>
                    <a href="#" class="serve-learn-more">
                        Explore our solutions
                        <span class="serve-arrow">→</span>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Initialize who we serve section on page load
createWhoWeServeSection();
