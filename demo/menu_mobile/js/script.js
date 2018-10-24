"use strict";

const MENU_MOBILE_OPTION_CLASS = ".menu_mobile_option";
const MENU_COLLAPSE = ".menu_collapse";


var bgImages = [
  "./img/menu_option_appetizer.jpg",
  "./img/menu_option_brunch.jpg",
  "./img/menu_option_rice.jpg",
  "./img/menu_option_pasta.jpg",
  "./img/menu_option_dessert.jpg",
  "./img/menu_option_drink.jpg"
];

var menuMobileOptions = document.querySelectorAll(MENU_MOBILE_OPTION_CLASS);
var menuMobileCollapses = document.querySelectorAll(MENU_COLLAPSE);


setBackgroundImages(menuMobileOptions, bgImages);

for (let index = 0; index < menuMobileOptions.length; index++) {
  menuMobileOptions[index].onclick = function() {
    $(menuMobileCollapses[index]).collapse("toggle");
  };
}

for (let index = 0; index < menuMobileCollapses.length; index++) {
  let menuMobileCollapse = $(menuMobileCollapses[index]);
  let menuMobileOption = menuMobileOptions[index];

  menuMobileCollapse.on("show.bs.collapse", function() {
    this.classList.add("fadeIn");
  });

  menuMobileCollapse.on("shown.bs.collapse", function() {
    this.classList.remove("fadeIn");
    menuMobileOption.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });

  menuMobileCollapse.on("hide.bs.collapse", function() {
    this.classList.add("fadeOut");
  });

  menuMobileCollapse.on("hidden.bs.collapse", function() {
    this.classList.remove("fadeOut");
  });
}

