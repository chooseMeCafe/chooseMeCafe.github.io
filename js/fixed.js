var goTop = document.getElementById("go_top");
var banner = document.getElementById("section_banner");
const sectionTop = document.getElementById("section_top");
var navLogo = document.querySelector("#section_nav #logo");
console.log(top);

goTop.onclick = goToTop;
navLogo.onclick  = goToTop;

function goToTop() {
  sectionTop.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}
