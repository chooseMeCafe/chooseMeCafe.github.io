var SWIPER_LEFT_CLASS = ".swiper_left";
var SWIPER_CENTER_CLASS = ".swiper_center";
var SWIPER_RIGHT_CLASS = ".swiper_right";
var IG_PHOTOS_CLASS = ".ig_photos";

var igPhotos = document.querySelectorAll(IG_PHOTOS_CLASS);
var swiperLeft = new Swiper(SWIPER_LEFT_CLASS, getOption());
var swiperCenter = new Swiper(SWIPER_CENTER_CLASS, getOption(400));
var swiperRight = new Swiper(SWIPER_RIGHT_CLASS, getOption(400));

igPhotos.forEach(element => {
  element.onclick = function() {
    window.open("https://www.instagram.com/chooseme_cafe/");
  };
});

swiperCenter.autoplay.stop();
swiperRight.autoplay.stop();

swiperLeft.on("slideChange", function() {
  swiperCenter.autoplay.start();
});

swiperCenter.on("slideChange", function() {
  swiperCenter.autoplay.stop();
  swiperRight.autoplay.start();
});

swiperRight.on("slideChange", function() {
  swiperRight.autoplay.stop();
});

function getOption(delay = 4000) {
  return {
    effect: "fade",
    speed: 1000,
    grabCursor: true,
    onlyExternal: true,
    cubeEffect: {
      shadow: false
    },
    loop: true,
    autoplay: {
      delay: delay
    }
  };
}
