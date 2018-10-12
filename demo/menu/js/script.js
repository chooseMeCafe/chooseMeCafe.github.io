var ITEM_CONTENT_CLASS = ".item-content";
var ITEM_CLASS = ".item";
var GRID_CLASS = ".grid";

var grid = new Muuri(".grid", {});

var itemContent = document.querySelectorAll(ITEM_CLASS);
console.log(grid);

itemContent.forEach(element => {
  element.onclick = function() {
    itemContent.forEach(e => {
      e.classList.add("item_small");
    });
    grid.refreshItems();
    grid.layout();
  };
});
