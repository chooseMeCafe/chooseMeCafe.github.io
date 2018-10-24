const photos = document.querySelectorAll(SEC_COMMUNITY + " .photo");

setBgImgByPath(photos, "./img/community/community_", "jpg", 1);
/***************
 * 初始化 Swiper
 ***************/
const communitySwiper = new Swiper(SEC_COMMUNITY + " .swiper-container", {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1200: {
      slidesPerView: 4
    },
    996: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    540: {
      slidesPerView: 1
    }
  }
});
