function CreateSectionSelect(sectionId) {
  return function(selectElement) {
    return "#" + sectionId + " " + selectElement;
  }
}