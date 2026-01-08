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
                    <div class="testimonial-text-wrapper" style="position: relative;">
                        <p class="testimonial-text">
                            We burned months with freelancers who ghosted us halfway through. JustJava came in, rebuilt the backend, and delivered our platform on a real timeline. Their structure and communication were a breath of fresh air—we finally felt like we had a real engineering team
                        </p>
                        <button class="edit-testimonial-btn" title="Edit testimonial" style="
                            position: absolute;
                            top: -15px;
                            right: -15px;
                            background: #6c5ce7;
                            border: none;
                            border-radius: 50%;
                            width: 28px;
                            height: 28px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-size: 14px;
                            box-shadow: 0 2px 8px rgba(108, 92, 231, 0.3);
                            transition: all 0.3s ease;
                            z-index: 10;
                        " onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 12px rgba(108, 92, 231, 0.5)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 2px 8px rgba(108, 92, 231, 0.3)'">
                            ✏️
                        </button>
                    </div>
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
                    <div class="testimonial-text-wrapper" style="position: relative;">
                        <p class="testimonial-text">
                            We burned months with freelancers who ghosted us halfway through. JustJava came in, rebuilt the backend, and delivered our platform on a real timeline. Their structure and communication were a breath of fresh air—we finally felt like we had a real engineering team
                        </p>
                        <button class="edit-testimonial-btn" title="Edit testimonial" style="
                            position: absolute;
                            top: -15px;
                            right: -15px;
                            background: #6c5ce7;
                            border: none;
                            border-radius: 50%;
                            width: 28px;
                            height: 28px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-size: 14px;
                            box-shadow: 0 2px 8px rgba(108, 92, 231, 0.3);
                            transition: all 0.3s ease;
                            z-index: 10;
                        " onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 12px rgba(108, 92, 231, 0.5)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 2px 8px rgba(108, 92, 231, 0.3)'">
                            ✏️
                        </button>
                    </div>
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
                    <div class="testimonial-text-wrapper" style="position: relative;">
                        <p class="testimonial-text">
                            We burned months with freelancers who ghosted us halfway through. JustJava came in, rebuilt the backend, and delivered our platform on a real timeline. Their structure and communication were a breath of fresh air—we finally felt like we had a real engineering team
                        </p>
                        <button class="edit-testimonial-btn" title="Edit testimonial" style="
                            position: absolute;
                            top: -15px;
                            right: -15px;
                            background: #6c5ce7;
                            border: none;
                            border-radius: 50%;
                            width: 28px;
                            height: 28px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-size: 14px;
                            box-shadow: 0 2px 8px rgba(108, 92, 231, 0.3);
                            transition: all 0.3s ease;
                            z-index: 10;
                        " onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 12px rgba(108, 92, 231, 0.5)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 2px 8px rgba(108, 92, 231, 0.3)'">
                            ✏️
                        </button>
                    </div>
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

// Make testimonial reviews editable
function makeTestimonialsEditable() {
  // Find all edit buttons
  const editButtons = document.querySelectorAll(".edit-testimonial-btn");

  // Loop through each edit button
  editButtons.forEach(function (editButton) {
    // When someone clicks on the edit button
    editButton.addEventListener("click", function () {
      // Find the testimonial text associated with this button
      const testimonialText =
        editButton.parentElement.querySelector(".testimonial-text");
      // Save the current text
      const currentText = testimonialText.textContent.trim();

      // Create a textarea for editing
      const textarea = document.createElement("textarea");
      textarea.value = currentText;
      textarea.style.width = "100%";
      textarea.style.minHeight = "120px";
      textarea.style.fontSize = "1rem";
      textarea.style.padding = "12px";
      textarea.style.border = "2px solid #6c5ce7";
      textarea.style.borderRadius = "8px";
      textarea.style.fontFamily = "inherit";
      textarea.style.lineHeight = "1.6";
      textarea.style.resize = "vertical";

      // Create a Save button
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save Review";
      saveButton.style.marginTop = "10px";
      saveButton.style.padding = "8px 16px";
      saveButton.style.background = "#6c5ce7";
      saveButton.style.color = "white";
      saveButton.style.border = "none";
      saveButton.style.borderRadius = "6px";
      saveButton.style.cursor = "pointer";
      saveButton.style.fontWeight = "600";
      saveButton.style.fontSize = "0.9rem";

      // Create a Cancel button
      const cancelButton = document.createElement("button");
      cancelButton.textContent = "Cancel";
      cancelButton.style.marginTop = "10px";
      cancelButton.style.marginLeft = "10px";
      cancelButton.style.padding = "8px 16px";
      cancelButton.style.background = "#e0e0e0";
      cancelButton.style.color = "#333";
      cancelButton.style.border = "none";
      cancelButton.style.borderRadius = "6px";
      cancelButton.style.cursor = "pointer";
      cancelButton.style.fontWeight = "600";
      cancelButton.style.fontSize = "0.9rem";

      // Hide the original text
      testimonialText.style.display = "none";

      // Add textarea and buttons after the hidden text
      testimonialText.parentElement.insertBefore(
        textarea,
        testimonialText.nextSibling
      );
      testimonialText.parentElement.insertBefore(
        saveButton,
        testimonialText.nextSibling
      );
      testimonialText.parentElement.insertBefore(
        cancelButton,
        testimonialText.nextSibling
      );

      // Focus on textarea
      textarea.focus();

      // When Save button is clicked
      saveButton.addEventListener("click", function () {
        const newText = textarea.value;
        testimonialText.textContent = newText;

        // Remove editing elements
        textarea.remove();
        saveButton.remove();
        cancelButton.remove();

        // Show the paragraph again
        testimonialText.style.display = "block";
      });

      // When Cancel button is clicked
      cancelButton.addEventListener("click", function () {
        // Just remove editing elements without saving
        textarea.remove();
        saveButton.remove();
        cancelButton.remove();

        // Show the original text again
        testimonialText.style.display = "block";
      });
    });
  });
}

// Call the function after testimonials section is created
setTimeout(makeTestimonialsEditable, 100);
