// --- Hamburger Menu Functionality ---
function handleMenu() {
	const menuButton = document.getElementById("menu-button");
	const navLinks = document.getElementById("nav-links");

	if (menuButton && navLinks) {
		menuButton.addEventListener("click", () => {
			navLinks.classList.toggle("open");
			// Optional: Change button text/icon for accessibility
			const isOpen = navLinks.classList.contains("open");
			menuButton.setAttribute("aria-expanded", isOpen);
		});
	}
}

// --- Dynamic Footer Year ---
function setFooterYear() {
	const currentYearSpan = document.getElementById("currentyear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedParagraph = document.getElementById("lastModified");
  if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent =
      "Last Modified: " + document.lastModified;
  }
}

// --- Run functions on page load ---
document.addEventListener("DOMContentLoaded", () => {
	handleMenu();
	setFooterYear();
});