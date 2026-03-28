const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.classList.toggle("active"); // ⭐ animation
});

/* OPTIONAL: Close menu when clicking a link */
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.classList.remove("active");
  });
});