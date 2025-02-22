const hamMenu = document.querySelector(".header__nav-hamenu");
const offScreenMenu = document.querySelector(".header__off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});