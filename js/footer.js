var gotop = document.getElementById("gotop")
console.log(gotop);
gotop.onclick = function () {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}