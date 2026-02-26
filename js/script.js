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

// ===== LOAD MORE PROJECTS FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Get all the elements we need
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const showLessContainer = document.getElementById('showLessContainer');
    const hiddenProjects = document.getElementById('hiddenProjects');
    const showLessBtn = document.getElementById('showLessBtn');
    
    // Check if elements exist before running code
    if (loadMoreBtn && hiddenProjects) {
        
        // When Load More button is clicked
        loadMoreBtn.addEventListener('click', function() {
            // Show hidden projects
            hiddenProjects.style.display = 'grid';
            hiddenProjects.classList.add('show');
            
            // Hide Load More button
            loadMoreBtn.style.display = 'none';
            
            // Show the Show Less button container
            if (showLessContainer) {
                showLessContainer.style.display = 'block';
            }
            
            // Smooth scroll to new content
            setTimeout(() => {
                hiddenProjects.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }, 100);
        });
        
        // When Show Less button is clicked
        if (showLessBtn) {
            showLessBtn.addEventListener('click', function() {
                // Hide hidden projects
                hiddenProjects.style.display = 'none';
                hiddenProjects.classList.remove('show');
                
                // Hide Show Less button container
                showLessContainer.style.display = 'none';
                
                // Show Load More button again
                loadMoreBtn.style.display = 'inline-flex';
                
                // Scroll back to top of gallery
                const gallerySection = document.querySelector('.gallery-grid-section');
                if (gallerySection) {
                    gallerySection.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
            });
        }
    }
});



