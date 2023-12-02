// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

// Function to enable or disable dark mode
function toggleDarkMode() {
  const body = document.body;
  const isDarkModeEnabled = body.classList.toggle("dark-mode");
  if (isDarkModeEnabled) {
    changeClassOn();
  } else {
    changeClassOff();
  }

  // Store the user's preference in local storage
  localStorage.setItem("darkMode", isDarkModeEnabled ? "enabled" : "disabled");
}

// Set initial dark mode based on user preference
if (isDarkMode) {
  document.body.classList.add("dark-mode");
  changeClassOn();
} else {
  changeClassOff();
}

// Attach event listener to the button for toggling dark mode
document
  .getElementById("DarkModeToggle")
  .addEventListener("click", toggleDarkMode);

const nav = document.querySelector(".nav");

const menu = document.querySelector("#icons");
menu.addEventListener("click", function (e) {
  nav.classList.toggle("active");
});
function changeClassOn() {
  document.getElementById("img-darkmode").className =
    "fa-solid fa-toggle-on fa-xl";
}
function changeClassOff() {
  document.getElementById("img-darkmode").className =
    "fa-solid fa-toggle-off fa-xl";
}
