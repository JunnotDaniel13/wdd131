document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const navMenu = document.querySelector("header nav ul");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      if (navMenu.classList.contains("open")) {
        menuButton.textContent = "x"; 
        menuButton.setAttribute("aria-expanded", "true");
      } else {
        menuButton.textContent = "☰"; 
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
});
