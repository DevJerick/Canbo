const MenuIcon = document.querySelector("#menu-icon");
const Icon = document.querySelector("#icon");
const NavMenu = document.querySelector(".nav-items");

function ToggleMenu() {
  Icon.classList.toggle("bx-x");
  NavMenu.classList.toggle("open");
}

MenuIcon.addEventListener("click", ToggleMenu);

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
