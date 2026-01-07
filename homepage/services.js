/* ===========================
   OUR SERVICES SECTION
   =========================== */

function createServicesSection() {
  const section = document.getElementById("services-section");

  section.className = "services-section";
  section.innerHTML = `
        <div class="wired-motif-left">
            <img src="Assets/Images/WIRED MOTIF.png" alt="">
        </div>
        
        <div class="container">
            <h2 class="section-title">Our Services</h2>
            
            <div class="services-grid">
                <!-- Full Cycle Software Development -->
                <div class="service-card">
                    <div class="service-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 3L4 7L8 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 3L20 7L16 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 13L10 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    
                    <h3 class="service-card-title">Full Cycle Software Development</h3>
                    
                    <p class="service-card-description">
                        We handle everything from planning & architecture to deployment & testing. 
                        Our pods build production-ready software with clean code, clear timelines, 
                        and CTO oversight—no handoffs, no chaos.
                    </p>
                    
                    <a href="#" class="service-card-link">
                        <span>Learn more</span>
                        <img src="Assets/Images/Arrow-Right.svg" alt="" class="link-arrow">
                    </a>
                </div>
                
                <!-- Revamping Legacy Software -->
                <div class="service-card">
                    <div class="service-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    
                    <h3 class="service-card-title">Revamping Legacy Software</h3>
                    
                    <p class="service-card-description">
                        Legacy holding you back? We refactor, rebuild and modernize outdated 
                        systems into fast, scalable platforms using current frameworks and clean 
                        backend architecture that's built to last.
                    </p>
                    
                    <a href="#" class="service-card-link">
                        <span>Learn more</span>
                        <img src="Assets/Images/Arrow-Right.svg" alt="" class="link-arrow">
                    </a>
                </div>
                
                <!-- CoreCare™ Software Management -->
                <div class="service-card">
                    <div class="service-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    
                    <h3 class="service-card-title">CoreCare™ Software Management</h3>
                    
                    <p class="service-card-description">
                        Software doesn't stop at launch—and neither do we. CoreCare™ is our 
                        structured post-launch support system that keeps your product stable, 
                        secure, and evolving, with real SLAs and no ghosting.
                    </p>
                    
                    <a href="#" class="service-card-link">
                        <span>Learn more</span>
                        <img src="Assets/Images/Arrow-Right.svg" alt="" class="link-arrow">
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Initialize services section on page load
createServicesSection();
