/* ===========================
   FOOTER
   =========================== */

function createFooter() {
  const footer = document.getElementById("main-footer");

  footer.className = "main-footer";
  footer.innerHTML = `
        <div class="wired-motif-footer-left">
            <img src="Assets/Images/WIRED MOTIF.png" alt="">
        </div>
        
        <div class="wired-motif-footer-right">
            <img src="Assets/Images/WIRED MOTIF.png" alt="">
        </div>
        
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <img src="Assets/Images/JJ LOGO 2.png" alt="JustJava Logo" class="footer-logo-img">
                    </div>
                    <p class="footer-tagline">Just Results. Just Structure. Just.Java.</p>
                </div>
                
                <div class="footer-links">
                    <div class="footer-column">
                        <h4 class="footer-column-title">Services</h4>
                        <ul class="footer-column-list">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Papers</a></li>
                            <li><a href="#">Press Conferences</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h4 class="footer-column-title">Services</h4>
                        <ul class="footer-column-list">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Papers</a></li>
                            <li><a href="#">Press Conferences</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h4 class="footer-column-title">Resources</h4>
                        <ul class="footer-column-list">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Papers</a></li>
                            <li><a href="#">Press Conferences</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p class="footer-copyright">© 2025 JustJava</p>
                <div class="footer-legal">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </div>
    `;
}

// Initialize footer on page load
createFooter();
