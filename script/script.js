// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

// Function to enable or disable dark mode
function toggleDarkMode() {
  const body = document.body;
  const isDarkModeEnabled = body.classList.toggle("dark-mode");

  // Store the user's preference in local storage
  localStorage.setItem("darkMode", isDarkModeEnabled ? "enabled" : "disabled");
}

// Set initial dark mode based on user preference
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}

// Attach event listener to the button for toggling dark mode
document
  .getElementById("DarkModeToggle")
  .addEventListener("click", toggleDarkMode);
