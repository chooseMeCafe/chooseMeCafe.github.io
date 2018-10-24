"use strict";

/***************
 *  變量設定
 **************/
const secCoverTl = new TimelineMax();
const secCoverT2 = new TimelineMax();
const coverLeft = SEC_COVER + " .cover_left";
const coverRight = SEC_COVER + " .cover_right";
const coverLogo = SEC_COVER + " .logo";

/***************
 *  過場動畫
 **************/

// cover();
unCover();
// goToMealCover();

// 過場開始
function cover() {
  // secCoverTl
  // .to(coverLeft, 0.4, { height: "100vh" }, 0)
  // .to(coverRight, 0.4, { height: "100vh" }, 0)
  // .to(coverLogo, 0.4, { opacity: 1, scale: 2 }, 0.4);
}

// 過場結束
function unCover() {
  secCoverTl
    .to(SEC_COVER, 0, { height: 0 }, 0)
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

function onT2End() {
  window.location.href = "./menu";
}
