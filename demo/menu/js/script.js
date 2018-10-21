"use strict";

const btns = document.querySelectorAll(".btn");
const menus = document.querySelectorAll(".container");

btns.forEach(function (btn, index) {
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