/* ===========================
   TESTIMONIALS SECTION
   =========================== */

function createTestimonialsSection() {
  const section = document.getElementById("testimonials-section");

  section.className = "testimonials-section";
  section.innerHTML = `
        <div class="wired-motif-testimonials-left">
            <img src="Assets/Images/WIRED MOTIF.png" alt="">
        </div>
        
        <div class="wired-motif-testimonials-right">
            <img src="Assets/Images/WIRED MOTIF.png" alt="">
        </div>
        
        <div class="container">
            <h2 class="section-title">Testimonials</h2>
            
            <div class="testimonials-grid">
                <!-- Testimonial 1 -->
                <div class="testimonial-card">
                    <div class="testimonial-stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p class="testimonial-text">
                        We burned months with freelancers who ghosted us halfway through. JustJava came in, rebuilt the backend, and delivered our platform on a real timeline. Their structure and communication were a breath of fresh air—we finally felt like we had a real engineering team
                    </p>
                    <div class="testimonial-author">
                        <img src="Assets/Images/testimonials.png" alt="Simon Claw" class="author-avatar">
                        <div class="author-info">
                            <h4 class="author-name">Simon Claw</h4>
                            <p class="author-title">CEO, Company</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="testimonial-card">
                    <div class="testimonial-stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p class="testimonial-text">
                        We burned months with freelancers who ghosted us halfway through. JustJava came in, rebuilt the backend, and delivered our platform on a real timeline. Their structure and communication were a breath of fresh air—we finally felt like we had a real engineering team
                    </p>
                    <div class="testimonial-author">
                        <img src="Assets/Images/testimonials.png" alt="Simon Claw" class="author-avatar">
                        <div class="author-info">
                            <h4 class="author-name">Simon Claw</h4>
                            <p class="author-title">CEO, Company</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="testimonial-card">
                    <div class="testimonial-stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p class="testimonial-text">
                        We burned months with freelancers who ghosted us halfway through. JustJava came in, rebuilt the backend, and delivered our platform on a real timeline. Their structure and communication were a breath of fresh air—we finally felt like we had a real engineering team
                    </p>
                    <div class="testimonial-author">
                        <img src="Assets/Images/testimonials.png" alt="Simon Claw" class="author-avatar">
                        <div class="author-info">
                            <h4 class="author-name">Simon Claw</h4>
                            <p class="author-title">CEO, Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize testimonials section on page load
createTestimonialsSection();
