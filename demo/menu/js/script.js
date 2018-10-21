"use strict";

const menuBtns = document.querySelectorAll(".section_menu .menu_btn");
const menus = document.querySelectorAll(".section_menu .menu");

menuBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        menus[index].scrollIntoView({
        block: 'start',
        behavior: 'smooth'
        })
    });
});