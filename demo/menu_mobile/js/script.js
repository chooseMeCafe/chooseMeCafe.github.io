"use strict";

var MENU_OPTION_CLASS = ".menu_option";
var MENU_COLLAPSE = ".menu_collapse";

var bgImages = [
    "http://www.louisacoffee.co/upload/news/20180120_040034-image().jpg",
    "http://www.louisacoffee.co/upload/news/20180120_040054-image().jpg",
    "http://www.louisacoffee.co/upload/news/20180608_095536-image().png",
    "http://www.louisacoffee.co/upload/news/20180120_040108-image().jpg",
    "http://www.louisacoffee.co/upload/news/20180120_040147-image().jpg",
    "http://www.louisacoffee.co/upload/news/20180120_040131-image().jpg"
];

var menuOptions = document.querySelectorAll(MENU_OPTION_CLASS);
var menuCollapses = document.querySelectorAll(MENU_COLLAPSE);
console.log(menuCollapses);

setBackgroundImages(menuOptions, bgImages);

    // element.onclick = function() {
        // $('#collapse_appetizer').collapse('toggle');
    // };
for (let index = 0; index < menuOptions.length; index++) {
    menuOptions[index].onclick = function() {
        $('#' + menuCollapses[index].id).collapse('toggle');
    }
}

/**
 *
 *
 * @param {*} elements
 * @param {*} imgs
 */
function setBackgroundImages(elements, imgs) {
    for (let index = 0; index < elements.length; index++) {
        elements[index].style.backgroundImage = getUrl(imgs[index]);
    }
}

function getUrl(url) {
    return "url('" + url + "')";
}
