"use strict";
const secCoverTl = new TimelineMax();
const secCoverT2 = new TimelineMax();
const sectionCover = document.querySelector("#section_cover");
const coverLeft = document.querySelector("#section_cover .cover_left");
const coverRight = document.querySelector("#section_cover .cover_right");
const coverLogo = document.querySelector("#section_cover .logo");



const menuBtns = document.querySelectorAll(".section_menu .menu_btn");
const menus = document.querySelectorAll(".section_menu .menu");

menuBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        menus[index].scrollIntoView({
        block: 'start',
        behavior: 'smooth'
        })
    });
});

unCover();

function unCover() {
    secCoverTl
      .to(sectionCover, 0, { height: 0 }, 0)
      .from(coverLogo, 0.4, { opacity: 1, scale: 2 }, 1)
      .from(coverLeft, 0.4, { height: "100vh" }, 1.5)
      .from(coverRight, 0.4, { height: "100vh" }, 1.5);
  }
  
  function goToMealCover() {
  
    secCoverT2
      .to(coverLeft, 0.4, { height: "100vh" })
      .to(coverRight, 0.4, { height: "100vh" })
      .to(coverLogo, 0.4, { opacity: 1, scale: 2 }, 0.4);
  
    setTimeout(onT2End, 1000);
  }