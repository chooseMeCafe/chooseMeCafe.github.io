"use strict";

var MENU_MOBILE_OPTION_CLASS = ".menu_mobile_option";
var MENU_COLLAPSE = ".menu_collapse";

var bgImages = [
"./img/menu_option_appetizer.jpg",
"./img/menu_option_brunch.jpg",
"./img/menu_option_rice.jpg",
"./img/menu_option_pasta.jpg",
"./img/menu_option_dessert.jpg",
"./img/menu_option_drink.jpg",
];

var menuOptions = document.querySelectorAll(MENU_MOBILE_OPTION_CLASS);
var menuCollapses = document.querySelectorAll(MENU_COLLAPSE);

setBackgroundImages(menuOptions, bgImages);

for (let index = 0; index < menuOptions.length; index++) {
  menuOptions[index].onclick = function() {
    $("#" + menuCollapses[index].id).collapse("toggle");
  };
}

function setBackgroundImages(elements, imgs) {
  for (let index = 0; index < elements.length; index++) {
    elements[index].style.backgroundImage = getUrl(imgs[index]);
  }
}

function getUrl(url) {
  return "url('" + url + "')";
}
