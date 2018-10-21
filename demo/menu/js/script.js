"use strict";

const menuBtns = document.querySelectorAll(".menu_btn");
const menus = document.querySelectorAll(".container");

menuBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        menus[index].scrollIntoView({
        block: 'start',
        behavior: 'smooth'
        })
    });

    btn.addEventListener('mouseenter', function() {
        console.log(index + " in");
    });

    btn.addEventListener('mouseout', function() {
        console.log(index + " out");
    });
});