// Function to handle scroll effects
function handleScrollEffects() {
    const windowWidth = window.innerWidth;
  
    // Check if window width is less than 1000px
    if (windowWidth >= 1000) {
      // Execute normal scroll effects logic for large screens
      const targetElement = document.querySelector('.inner-left h2');
      const scrollItems = document.querySelectorAll('.scroll-item');
      const headContainers = document.querySelectorAll('.heads');
  
      const targetRect = targetElement.getBoundingClientRect();
      const targetPosition = targetRect.top + window.scrollY;
  
      // Your existing scroll handling logic here...
      scrollItems.forEach(item => {
        
        const itemRect = item.getBoundingClientRect();
        const itemPosition = itemRect.top + window.scrollY;
  
        if (window.scrollY >= itemPosition - targetRect.height && itemPosition > window.scrollY) {
          item.style.background = 'linear-gradient(45deg, red, orange, pink, blue, purple)';
          item.style.webkitTextStroke = 'transparent';
          item.style.webkitBackgroundClip = 'text';
          item.style.color = 'transparent';
        } else {
          item.style.color = '';
          item.style.background = '';
          item.style.webkitBackgroundClip = '';
          item.style.webkitTextStroke = '1px white';
        }
      });
  
      headContainers.forEach(container => {
        const containerRect = container.getBoundingClientRect();
        const containerPosition = containerRect.top + window.scrollY;
  
        if (window.scrollY >= containerPosition - targetRect.height && containerPosition > window.scrollY) {
          container.style.borderColor = 'linear-gradient(to right, #f9c823, #fc506e)';
        } else {
          container.style.borderColor = '';
        }
      });
  
    } else {
      // Adjust layout for small screens (less than 1000px)
      const years = document.querySelectorAll('.scroll-item');
      const headSections = document.querySelectorAll('.headscontainer');
      const innerleft = document.querySelector('.inner-left');
      const currentyear26 = document.querySelector('#year26');
      currentyear26.style.textAlign="center";
     
      currentyear26.textContent="2026";
      const currentyear27 = document.querySelector('#year27');
     currentyear27.textContent="2027";
     currentyear27.style.textAlign="center";
      const currentyear28 = document.querySelector('#year28');
     currentyear28.textContent="2028";
     currentyear28.style.textAlign="center";
      
      innerleft.style.display='none';
      years.forEach(year => {
        year.style.display = 'block'; // Ensure years are visible
      });
  
      headSections.forEach(section => {
        section.style.display = 'block'; // Ensure head sections are visible
      });
  
      // Optional: Reset styles applied by scroll handling for large screens
      const scrollItems = document.querySelectorAll('.scroll-item');
      const headContainers = document.querySelectorAll('.heads');
  
      scrollItems.forEach(item => {
        item.style.background = '';
        item.style.webkitTextStroke = '';
        item.style.webkitBackgroundClip = '';
        item.style.color = '';
      });
  
      headContainers.forEach(container => {
        container.style.borderColor = '';
      });
    }
  }
  
  // Event listener for scroll and initial load
  window.addEventListener('DOMContentLoaded', handleScrollEffects);
  window.addEventListener('scroll', handleScrollEffects);
  window.addEventListener('resize', handleScrollEffects); // Listen for window resize
  
  // Optional: debounce resize events for performance
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      handleScrollEffects();
    }, 250); // Adjust debounce time as needed
  });