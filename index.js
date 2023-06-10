const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector("#close-menu");

menuButton.addEventListener("click", function () {
  mobileMenu.style.display = "block";
});

closeButton.addEventListener("click", function () {
  mobileMenu.style.display = "none";
});
