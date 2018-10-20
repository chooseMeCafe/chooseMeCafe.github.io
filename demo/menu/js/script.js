"use strict";
const btn = document.querySelector('.btn');
const test = document.querySelector('.container');

btn.addEventListener('click', function () {
    test.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
});