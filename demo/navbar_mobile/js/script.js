var t1 = new TimelineMax({ paused: true });

var btn = document.getElementById("btn");

t1.to(".section_navbar_mobile .menu", 0.8, {
  top: "0%",
});

t1.staggerFrom(
  ".section_navbar_mobile .menu a",
  0.8,
  { x: 200, opacity: 0, ease: Expo.easeOut },
  0.3
);

t1.reverse();

btn.onclick = function() {
  t1.reversed(!t1.reversed());
};

$(document).on("click", "a", function() {
  t1.reversed(!t1.reversed());
});


