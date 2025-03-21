// Universal JavaScript file for all pages

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 800,     // Animation duration
    easing: 'ease-out', // Animation easing
    once: true,        // Elements will be animated only once
    mirror: false,     // Elements will not animate out when scrolling past them
    offset: 100,       // Offset (in px) from the original trigger point
    disable: false,    // Enable animations on all devices
    throttleDelay: 99, // The delay on throttle for performance
  });
  
  // Theme switcher functionality (only if it exists on the page)
  const themeSwitch = document.getElementById("themeSwitch");
  if (themeSwitch) {
    const logoImage = document.getElementById("logoImage");
    
    // Check if a theme preference is already set
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme");
      if (logoImage) logoImage.src = "./img/logo-dark.png"; // Change logo image
      themeSwitch.checked = true;
    }

    // Listen for the theme switch change event
    themeSwitch.addEventListener("change", () => {
      if (themeSwitch.checked) {
        document.body.classList.add("dark-theme");
        if (logoImage) logoImage.src = "./img/logo-dark.png"; // Change logo image
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-theme");
        if (logoImage) logoImage.src = "./img/logo.png"; // Revert to original logo image
        localStorage.setItem("theme", "light");
      }
    });
  }
  
  // Mobile menu functionality
  document.addEventListener("click", function (event) {
    const toggle = document.getElementById("mobile-menu-toggle");
    if (!toggle) return;
    
    const menu = document.getElementById("mobile-menu");
    
    if (menu && toggle) {
      if (menu.contains(event.target) || toggle.contains(event.target)) {
        // Clicked inside the menu or on the toggle button, do nothing
      } else {
        // Clicked outside the menu, close it
        toggle.checked = false;
      }
    }
  });
  
  // Scroll button functionality
  const scrollButton = document.getElementById("scrollButton");
  if (scrollButton) {
    scrollButton.addEventListener("click", () => {
      // Scroll to the top of the page smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}); 