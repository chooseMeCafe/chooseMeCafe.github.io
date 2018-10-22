function CreateSectionSelect(sectionId) {
  return function(selectElement) {
    if (selectElement != undefined) {
      return "#" + sectionId + " " + selectElement;
    } else {
      return "#" + sectionId;
    }
  };
}
