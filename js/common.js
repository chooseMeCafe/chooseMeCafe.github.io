const SEC_BANNER = "#section_banner";
const SEC_COVER = "#section_cover";
const SEC_FOOTER = "#section_footer";
const SEC_INTRO = "#section_intro";
const SEC_NAVBAR_MOBILE = "#section_navbar_mobile";
const SEC_NAVBAR_MENU_MOBILE = "#section_navbar_menu_mobile";
const SEC_NAVBAR = "#section_navbar";
const SEC_COMMUNITY = "#section_community";

const secNavbar = document.querySelector(SEC_NAVBAR);
const secBanner = document.querySelector(SEC_BANNER);
const secCommunity = document.querySelector(SEC_COMMUNITY);

/************
 * 初始化 AOS
 ************/
AOS.init({
  once: true
});
