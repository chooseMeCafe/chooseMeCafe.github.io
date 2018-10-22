"use strict";

/***************
 *  變量設定
 **************/
const secNavMTl = new TimelineMax({ paused: true });
const navMBtn = document.querySelector(secNavM("#menu_btn"));

secNavMTl.to(secNavMenuM(), 0.8, {
  top: "0%",
});

secNavMTl.staggerFrom(
  secNavMenuM(".option"),
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

$(document).on("click", secNavMenuM(".option"), function() {
  console.log("!!")
  secNavMTl.reversed(!secNavMTl.reversed());
});
