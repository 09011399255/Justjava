/* ===========================
   CTA SECTION
   =========================== */

function createCTASection() {
  const section = document.getElementById("cta-section");

  section.className = "cta-section";
  section.innerHTML = `
        <div class="wired-motif-cta-left">
            <img src="Assets/Images/WIRED MOTIF.png" alt="">
        </div>
        
        <div class="wired-motif-cta-right">
            <img src="Assets/Images/WIRED MOTIF.png" alt="">
        </div>
        
        <div class="container">
            <div class="cta-card">
                <h2 class="cta-title">Ready to take your software to<br>the next level?</h2>
                <a href="#contact" class="btn btn-primary btn-hero-cta">
                    <img src="Assets/Images/Arrow-Right.svg" alt="" class="btn-icon">
                    <div class="btn-text">
                        <span class="btn-text-small">Ready for a real scale up</span>
                        <span class="btn-text-large">Book a free consultation call</span>
                    </div>
                </a>
            </div>
            
            <div class="newsletter-section">
                <p class="newsletter-text">Stay in the loop. Get product updates, insights, and stories—straight to your inbox</p>
                <div class="newsletter-form">
                    <div class="newsletter-input-wrapper">
                        <img src="Assets/Images/user.svg" alt="" class="newsletter-input-icon">
                        <input type="email" placeholder="Enter your email" class="newsletter-input">
                    </div>
                    <button class="newsletter-button">
                        <img src="Assets/Images/send.svg" alt="" class="newsletter-button-icon">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize CTA section on page load
createCTASection();
