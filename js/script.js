// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
});
// Update copyright year automatically
const yearElement = document.getElementById('currentYear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Character counter for textarea
const textarea = document.getElementById('message');
const charCount = document.querySelector('.char-count .current');
const maxChars = 500;

if (textarea && charCount) {
    // Set initial count
    charCount.textContent = textarea.value.length;
    
    // Update count as user types
    textarea.addEventListener('input', function() {
        let currentLength = this.value.length;
        charCount.textContent = currentLength;
        
        // Optional: Change color when approaching limit
        if (currentLength > maxChars * 0.9) {
            charCount.style.color = 'orange';
        } else if (currentLength > maxChars) {
            charCount.style.color = 'red';
        } else {
            charCount.style.color = ''; // Reset to default
        }
    });
}

// Optional: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


