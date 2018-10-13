function setBackgroundImages(elements, imgs) {
  for (let index = 0; index < elements.length; index++) {
    elements[index].style.backgroundImage = getUrl(imgs[index]);
  }
}

function getUrl(url) {
  return "url('" + url + "')";
}
