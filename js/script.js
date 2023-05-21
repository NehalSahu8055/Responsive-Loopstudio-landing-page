"use strict"; //varibales should be defined etc.

// navbar button variables
const hamburger = document.querySelector("#open-btn"),
  closeBtn = document.querySelector("#close-btn");

// navbar variables
const navbar = document.querySelector(".navbar__nav"),
  mobNav = document.querySelector(".mob-nav-brand");

// navbar toggle functions
const navbarToggleDesk = () => navbar.classList.toggle("active"),
  navbarToggleMob = () => mobNav.classList.toggle("hidden");

//added toggle function on navbar buttons
hamburger.addEventListener("click", () => {
  navbarToggleDesk();
  navbarToggleMob();
});

closeBtn.addEventListener("click", () => {
  navbarToggleDesk();
  navbarToggleMob();
});
