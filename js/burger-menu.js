const hamMenu = document.querySelector(".header__nav-hamenu");
const offScreenMenu = document.querySelector(".header__off-screen-menu");
const menuLinks = document.querySelectorAll(".header__menu-link");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

  const nav = document.querySelector(".header__nav");

  if (offScreenMenu.classList.contains("active")) {
    nav.style.backgroundColor = "transparent";
  } else {
    if (window.scrollY > 2) {
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");

    const nav = document.querySelector(".header__nav");
    if (window.scrollY > 2) {
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });
});

document.addEventListener("scroll", () => {
  const nav = document.querySelector(".header__nav");
  if (window.scrollY > 500) {
    nav.classList.remove("transparent");
    nav.classList.add("scrolled");
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("transparent");
    nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});

window.addEventListener("load", () => {
  const nav = document.querySelector(".header__nav");
  if (window.scrollY > 2) {
    nav.classList.remove("transparent");
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("transparent");
  }
});
