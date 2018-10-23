"use strict";

/***************
 *  變量設定
 **************/
const secNavMTl = new TimelineMax({ paused: true });
const navMBtn = document.querySelector(sectionNavbarMobile("#menu_btn"));

secNavMTl.to(sectionNavbarMenuMobile(), 0.8, {
  top: "0%",
});

secNavMTl.staggerFrom(
  sectionNavbarMenuMobile(".option"),
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

$(document).on("click", sectionNavbarMenuMobile(".option"), function() {
  console.log("!!")
  secNavMTl.reversed(!secNavMTl.reversed());
});
