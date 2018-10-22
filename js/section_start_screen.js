var tl = new TimelineMax();
// tl.to(".logo", 1, {ease:Power4.easeOut, opacity: 1, scale: 2 }, 0.5)
// .to(".logo", 0.8, {ease:Power2.easeOut, opacity: 0, scale: 0.5 }, 3)
// .to(".screen", 1, { ease:Power4.easeOut, height: 0, opacity: 0.5 }, 3.6);

// tl.to(".logo", 1, { ease: Power4.easeOut, opacity: 1, scale: 2 }, 0.5)
//   .to(".logo", 0.8, { ease: Power2.easeOut, opacity: 0, scale: 0.5 }, 3.6)
//   .to(".screen", 1, { ease: Power4.easeOut, height: 0, opacity: 0.5 }, 3.6);

tl.from(".screen_left", 0.4, { height: 0 }, 0)
  .from(".screen_right", 0.4, { height: 0 }, 0)
  .to(".logo", 0.4, { opacity: 1, scale: 2 }, 0.4)
  .to(".logo", 0.4, { opacity: 0, scale: 1 }, 2.8)
  .to(".screen_left", 0.4, { height: 0 }, 3.2)
  .to(".screen_right", 0.4, { height: 0 }, 3.2);
