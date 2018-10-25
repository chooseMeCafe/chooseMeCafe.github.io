"use strict";

/***************
 *  變量設定
 **************/
const secNavMTl = new TimelineMax({ paused: true });
const navMBtn = document.querySelector(SEC_NAVBAR_MOBILE + " #menu_btn");
const navMobileOptions = document.querySelectorAll(SEC_NAVBAR_MENU_MOBILE + " .option");

secNavMTl.to(SEC_NAVBAR_MENU_MOBILE, 0.8, {
  top: "0%",
});

secNavMTl.staggerFrom(
  SEC_NAVBAR_MENU_MOBILE + " .option",
  0.8,
  {
    x: 200,
    opacity: 0,
    ease: Expo.easeOut
  },
  0.3
);

secNavMTl.reverse();

navMBtn.onclick = function() {
  secNavMTl.reversed(!secNavMTl.reversed());
};

$(document).on("click", SEC_NAVBAR_MENU_MOBILE + " .option", function() {
  secNavMTl.reversed(!secNavMTl.reversed());
});

// menu點擊
navMobileOptions[0].onclick = function() {
  document.querySelector(SEC_INTRO + " .intro_brand").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navMobileOptions[1].onclick = function() {
  document.querySelector(SEC_INTRO + " .intro_taste").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navMobileOptions[2].onclick = function() {
  console.log(document.querySelector(SEC_INTRO));
  document.querySelector(SEC_INTRO + " #intro_beauty_wall").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navMobileOptions[3].onclick = function() {
  document.querySelector(SEC_FOOTER).scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};