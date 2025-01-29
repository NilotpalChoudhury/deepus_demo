// Get the toggle button and the body element
const toggleButton = document.getElementById("toggle-dark-mode");
const body = document.body;

// Add an event listener to the button to toggle dark mode
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
