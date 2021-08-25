$(document).ready(function () {
  $(".header-items").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: true,
    autoplay: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
});

const burgerBtn = document.querySelector(".burger-menu");
const menu = document.querySelector(".header-menu");
const logo = document.querySelector(".header-top__logo");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("open");
  menu.classList.toggle("visible");
  if (logo.classList.contains("hidden")) {
    logo.classList.remove("hidden");
  } else {
    logo.classList.add("hidden");
  }
});
