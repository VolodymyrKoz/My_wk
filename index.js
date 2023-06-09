// JavaScript code for mobile menu functionality
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
