function setBackgroundImages(elements, imgs) {
  for (let index = 0; index < elements.length; index++) {
    elements[index].style.backgroundImage = stringToUrl(imgs[index]);
  }
}

function stringToUrl(url) {
  return "url('" + url + "')";
}

function stringToId(id) {
  return "#" + id;
}
