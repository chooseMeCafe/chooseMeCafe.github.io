"use strict";

// id常量
const MENU_OPTION_PANEL_ID = "menu_option_panel";
const MENU_GAP_ID = "menu_gap";

// class常量
const ITEM_CONTENT_CLASS = ".item-content";
const ITEM_CLASS = ".item";
const GRID_CLASS = ".grid";
const MENU_IMG_CLASS = ".menu_img";
const MENU_OPTION_CLASS = ".menu_option";

// menu選單圖片
const menuBgImages = [
  "./img/menu_option_appetizer.jpg",
  "./img/menu_option_brunch.jpg",
  "./img/menu_option_rice.jpg",
  "./img/menu_option_pasta.jpg",
  "./img/menu_option_dessert.jpg",
  "./img/menu_option_drink.jpg"
];

// 初始化 Murri
const grid = new Muuri(GRID_CLASS);

// 初始化變量
const menuGap = document.getElementById(MENU_GAP_ID);
const menuOptionPanel = document.getElementById(MENU_OPTION_PANEL_ID);

const itemContents = document.querySelectorAll(ITEM_CLASS);
const menuImgs = document.querySelectorAll(MENU_IMG_CLASS);
const menuOptions = document.querySelectorAll(MENU_OPTION_CLASS);

// 設定選單圖片
setBackgroundImages(menuOptions, menuBgImages);

/*
 * 將menu選單綁定onclick事件，點擊任意選單縮小所有選單
 * 並fixed於畫面最上方。
 */
menuOptions.forEach(element => {
  element.onclick = function() {
    itemContents.forEach(e => {
      e.classList.add("item_small");
    });

    // 觸發Murri更新，選單重新排列
    menuOptionPanel.classList.add("fixed");
    menuGap.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
    grid.refreshItems();
    grid.layout();
  };
});

document.getElementById("btn").onclick = function() {
  menuImgs.forEach(element => {
    element.classList.toggle("no_height");
  });
};
