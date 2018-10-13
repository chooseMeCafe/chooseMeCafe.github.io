"use strict";

var MENU_MOBILE_OPTION_CLASS = ".menu_mobile_option";
var MENU_COLLAPSE = ".menu_collapse";

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
    $(stringToId(menuMobileCollapses[index].id)).collapse("toggle");
  };
}

for (let index = 0; index < menuMobileCollapses.length; index++) {
  $(stringToId(menuMobileCollapses[index].id)).on(
    "shown.bs.collapse",
    function() {
      this.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
      });
    }
  );
}
