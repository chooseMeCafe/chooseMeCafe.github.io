'use strict';

var ITEM_CONTENT_CLASS = ".item-content";

var ITEM_CLASS = ".item";
var GRID_CLASS = ".grid";

var MENU_OPTION_CLASS = ".menu_option";

var menuBgImages = [
  "http://www.louisacoffee.co/upload/news/20180120_040034-image().jpg",
  "http://www.louisacoffee.co/upload/news/20180120_040054-image().jpg",
  "http://www.louisacoffee.co/upload/news/20180608_095536-image().png",
  "http://www.louisacoffee.co/upload/news/20180120_040108-image().jpg",
  "http://www.louisacoffee.co/upload/news/20180120_040147-image().jpg",
  "http://www.louisacoffee.co/upload/news/20180120_040131-image().jpg"
];

var grid = new Muuri(GRID_CLASS, {});
var itemContent = document.querySelectorAll(ITEM_CLASS);
var menuOptionClass = document.querySelectorAll(MENU_OPTION_CLASS);

setBackgroundImages(menuOptionClass, menuBgImages);

itemContent.forEach(element => {
  element.onclick = function() {
    itemContent.forEach(e => {
      e.classList.add("item_small");
    });
    grid.refreshItems();
    grid.layout();
  };
});
