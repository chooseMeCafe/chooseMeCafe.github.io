var bannerMarginTop = 0;

/***************
 * 初始化 Swiper
 ***************/
const bannerSwiper = new Swiper(SEC_BANNER + " .swiper-container", {
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
