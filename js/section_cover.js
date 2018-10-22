"use strict";

/********************
 *  變量設定
 *******************/
const tl = new TimelineMax();

const coverLeft = sectionCover(".cover_left");
const coverRight = sectionCover(".cover_right");
const coverLogo = sectionCover(".logo");

/********************
 *  過場動畫 
 *******************/
tl.from(coverLeft, 0.4, { height: 0 }, 0)
  .from(coverRight, 0.4, { height: 0 }, 0)
  .to(coverLogo, 0.4, { opacity: 1, scale: 2 }, 0.4)
  .to(coverLogo, 0.4, { opacity: 0, scale: 1 }, 1.5)
  .to(coverLeft, 0.4, { height: 0 }, 2)
  .to(coverRight, 0.4, { height: 0 }, 2);



// tl.to(".logo", 1, {ease:Power4.easeOut, opacity: 1, scale: 2 }, 0.5)
// .to(".logo", 0.8, {ease:Power2.easeOut, opacity: 0, scale: 0.5 }, 3)
// .to(".screen", 1, { ease:Power4.easeOut, height: 0, opacity: 0.5 }, 3.6);
