// This file is mandatory and should be used for adding basic JavaScript interactivity (e.g., form validation or simple interactions).
console.log("main.js is running");

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      console.log("clicked");
      navList.classList.toggle("show");
    });
  }
});
