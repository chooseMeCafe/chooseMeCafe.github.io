"use strict";
// const btn = document.querySelector('.btn');
// const test = document.querySelector('.container');

// btn.addEventListener('click', function () {
//     test.scrollIntoView({
//         block: 'start',
//         behavior: 'smooth'
//     });
// });

const btns = document.querySelectorAll(".btn");
const menus = document.querySelectorAll(".container");

btns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        menus[index].scrollIntoView({
        block: 'start',
        behavior: 'smooth'
        })
    });
});
