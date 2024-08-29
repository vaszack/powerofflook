// Toggle mobile menu
const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.style.display = "flex";
  });
}

if (close) {
  close.addEventListener("click", () => {
    navbar.style.display = "none";
  });
}
