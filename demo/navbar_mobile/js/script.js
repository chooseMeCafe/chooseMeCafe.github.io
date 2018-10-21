// var t1 = new TweenMax();

var btn = document.getElementById("btn");

var isOpen = false;

btn.onclick = function() {
  if (isOpen) {
    TweenMax.to(".menu", 0.5, {
      height: "0"
    });

  } else {
    TweenMax.to(".menu", 0.5, {
      height: "100vh"
    });
  }
  isOpen = !isOpen;
  console.log(isOpen);
};
