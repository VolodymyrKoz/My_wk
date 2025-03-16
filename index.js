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

function toggleMember(selectedMember) {
  const members = document.querySelectorAll('.team-member');

  members.forEach(member => {
      if (member !== selectedMember) {
          member.classList.remove('expanded'); // Collapse other members
          member.querySelector('.combined-description').style.display = 'none'; // Hide other combined descriptions
          member.querySelector('.clickable-indicator').style.opacity = '1'; // Show subtext for collapsed members
      }
  });

  const combinedDescription = selectedMember.querySelector('.combined-description');
  selectedMember.classList.toggle('expanded'); // Toggle the selected member

  if (selectedMember.classList.contains('expanded')) {
      combinedDescription.style.display = 'block'; // Show the combined description
      typeWriter(combinedDescription); // Start typing effect for combined description
      selectedMember.querySelector('.clickable-indicator').style.opacity = '0'; // Hide the subtext
  } else {
      combinedDescription.style.display = 'none'; // Hide the combined description if collapsed
      selectedMember.querySelector('.clickable-indicator').style.opacity = '1'; // Show the subtext again
  }
}

// Function to create a typing effect
function typeWriter(element) {
  const text = element.textContent;
  element.textContent = ''; // Clear the text
  let i = 0;

  function typing() {
      if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typing, 50); // Adjust typing speed here
      }
  }

  element.style.display = 'block'; // Ensure the element is displayed before typing
  typing();
}
// Remove the event listener for the hologram
// document.getElementById('texas-hologram').addEventListener('click', function() {
//     const hologram = document.getElementById('hologram');
//     hologram.classList.add('show'); // Show the hologram

//     // Trigger confetti effect
//     shootConfetti(hologram);

//     // Hide the hologram after 2 seconds
//     setTimeout(() => {
//         hologram.classList.remove('show'); // Remove the show class to hide it
//     }, 2000);
// });

// Remove the shootConfetti function
// function shootConfetti(hologram) {
//     // Remove all confetti-related code
// }
