// Check if the current page is index.html before updating the clock
if (window.location.pathname.endsWith("index.html")) {
  // Update the clock hands to display the current time
  function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourRotation = 30 * hour + 0.5 * minute; // Each hour is 30 degrees
    const minuteRotation = 6 * minute + 0.1 * second; // Each minute is 6 degrees
    const secondRotation = 6 * second; // Each second is 6 degrees

    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    hourHand.setAttribute("transform", `rotate(${hourRotation}, 50, 50)`);
    minuteHand.setAttribute("transform", `rotate(${minuteRotation}, 50, 50)`);
    secondHand.setAttribute("transform", `rotate(${secondRotation}, 50, 50)`);
  }

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initial update
  updateClock();
}

// const themeSwitch = document.getElementById("themeSwitch");

// // Check if a theme preference is already set
// if (localStorage.getItem("theme") === "dark") {
//   document.body.classList.add("dark-theme");

//   themeSwitch.checked = true;
// }
// // Listen for the theme switch change event
// themeSwitch.addEventListener("change", () => {
//   if (themeSwitch.checked) {
//     document.body.classList.add("dark-theme");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.body.classList.remove("dark-theme");
//     localStorage.setItem("theme", "light");
//   }
// });

// const logoImage = document.getElementById("logoImage");

// // Check if a theme preference is already set
// if (localStorage.getItem("theme") === "dark") {
//   logoImage.src = "./img/logo-dark.png";
// }

// // Listen for the theme switch change event
// themeSwitch.addEventListener("change", () => {
//   if (themeSwitch.checked) {
//     logoImage.src = "./img/logo-dark.png";
//   } else {
//     logoImage.src = "./img/logo.png";
//   }
// });

// index.js
const themeSwitch = document.getElementById("themeSwitch");
const logoImage = document.getElementById("logoImage");

// Check if a theme preference is already set
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  logoImage.src = "./img/logo-dark.png"; // Change logo image
  themeSwitch.checked = true;
}

// Listen for the theme switch change event
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    document.body.classList.add("dark-theme");
    logoImage.src = "./img/logo-dark.png"; // Change logo image
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    logoImage.src = "./img/logo.png"; // Revert to original logo image
    localStorage.setItem("theme", "light");
  }
});

const scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", () => {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


document.addEventListener("click", function (event) {
  var menu = document.getElementById("mobile-menu");
  var toggle = document.getElementById("mobile-menu-toggle");

  if (menu.contains(event.target) || toggle.contains(event.target)) {
    // Clicked inside the menu or on the toggle button, do nothing
  } else {
    // Clicked outside the menu, close it
    toggle.checked = false;
  }
});
