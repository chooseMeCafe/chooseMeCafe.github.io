// var t1 = new TweenMax();

var btn = document.getElementById("btn");

var isOpen = false;

btn.onclick = function() {
  if (isOpen) {
    TweenMax.to(".menu", 1.5, {
        width: 0,
      });
  } else {
    TweenMax.to(".menu", 1.5, {
      width: "100%",
    });
  }
  isOpen = !isOpen;
};
