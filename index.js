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
