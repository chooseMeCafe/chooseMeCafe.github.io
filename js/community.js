const photos = document.querySelectorAll(SEC_COMMUNITY + " .photo");

setBgImgByPath(photos, "./img/community/community_", "jpg", 1);
/***************
 * 初始化 Swiper
 ***************/
const communitySwiper  = new Swiper(SEC_COMMUNITY + " .swiper-container", {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    1200: {
        slidesPerView: 4,
    },
    992: {
        slidesPerView: 3,
    },
}
});


