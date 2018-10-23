function setBackgroundImages(elements, imgs) {
  for (let index = 0; index < elements.length; index++) {
    elements[index].style.backgroundImage = stringToUrl(imgs[index]);
  }
}

function setBgImgByPath(elements, imgUrl, imgType, indexFrom = 0) {
  for (let index = 0; index < elements.length; index++) {

    let number = index + indexFrom;

    if (number < 10) {
      number = "0" + number;
    }

    elements[index].style.backgroundImage = stringToUrl(
      imgUrl + number + "." + imgType
    );
  }
}

function stringToUrl(url) {
  return "url('" + url + "')";
}

function stringToId(id) {
  return "#" + id;
}
