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
                    
                    <div class="hero-description-wrapper" style="position: relative; display: inline-block;">
                        <p class="hero-description">
                            Turn your product ideas into market-ready and modern reliable software 
                            with the speed to scale and consistency every project deserves.
                        </p>
                        <button class="edit-icon-btn" title="Edit description" style="
                            position: absolute;
                            top: -10px;
                            right: -40px;
                            background: #6c5ce7;
                            border: none;
                            border-radius: 50%;
                            width: 32px;
                            height: 32px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-size: 16px;
                            box-shadow: 0 2px 8px rgba(108, 92, 231, 0.3);
                            transition: all 0.3s ease;
                        " onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 12px rgba(108, 92, 231, 0.5)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 2px 8px rgba(108, 92, 231, 0.3)'">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                    </div>
                    
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

// Make hero description editable
function makeHeroDescriptionEditable() {
  // Find the hero description paragraph and edit button
  const heroDescription = document.querySelector(".hero-description");
  const editButton = document.querySelector(".edit-icon-btn");

  // When someone clicks on the edit icon button
  editButton.addEventListener("click", function () {
    // Save the current text before editing
    const currentText = heroDescription.textContent;

    // Create a textarea (input box) for editing
    const textarea = document.createElement("textarea");
    textarea.value = currentText;
    textarea.className = "hero-description-edit";
    textarea.style.width = "100%";
    textarea.style.minHeight = "100px";
    textarea.style.fontSize = "1.1rem";
    textarea.style.padding = "10px";
    textarea.style.border = "2px solid #6c5ce7";
    textarea.style.borderRadius = "8px";
    textarea.style.fontFamily = "inherit";
    textarea.style.lineHeight = "1.8";

    // Create a Save button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.style.marginTop = "10px";
    saveButton.style.padding = "10px 20px";
    saveButton.style.background = "#6c5ce7";
    saveButton.style.color = "white";
    saveButton.style.border = "none";
    saveButton.style.borderRadius = "8px";
    saveButton.style.cursor = "pointer";
    saveButton.style.fontWeight = "600";

    // Replace the paragraph with the textarea
    heroDescription.style.display = "none";
    heroDescription.parentElement.insertBefore(textarea, heroDescription);
    heroDescription.parentElement.insertBefore(saveButton, heroDescription);

    // Focus on the textarea so user can start typing
    textarea.focus();

    // When Save button is clicked
    saveButton.addEventListener("click", function () {
      // Get the new text from textarea
      const newText = textarea.value;

      // Update the paragraph with new text
      heroDescription.textContent = newText;

      // Remove the textarea and save button
      textarea.remove();
      saveButton.remove();

      // Show the paragraph again
      heroDescription.style.display = "block";
    });
  });
}

// Call the function after the hero section is created
setTimeout(makeHeroDescriptionEditable, 100);
