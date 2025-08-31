// main.js

// NAVBAR js
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// OUR CLASSES js
document.addEventListener("DOMContentLoaded", function () {
  const classesButtons = document.querySelectorAll(".buton");

  classesButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetId = btn.getAttribute("data-target") + "-content";
      const allContents = document.querySelectorAll('[id$="-content"]');
      allContents.forEach((content) => content.classList.add("d-none"));
      const activeContent = document.getElementById(targetId);
      if (activeContent) {
        activeContent.classList.remove("d-none");
      }
    });
  });
});
