"use strict";

/***************
 *  變量設定
 **************/
const secNavMTl = new TimelineMax({ paused: true });
const navMBtn = document.querySelector(SEC_NAVBAR_MOBILE + " #menu_btn");

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
  console.log("!!")
  secNavMTl.reversed(!secNavMTl.reversed());
});
