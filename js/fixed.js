var goTop = document.getElementById("go_top");
var banner = document.getElementById("section_banner");
var navLogo = document.querySelector("#section_navbar #logo");
var navMobileLogo = document.querySelector("#section_navbar_mobile #logo");

goTop.onclick = goToBanner;
navLogo.onclick  = goToBanner;
navMobileLogo.onclick = goToBanner;

function goToBanner() {
  banner.scrollIntoView({
    block: "start",
    behavior: "smooth"
  })
}