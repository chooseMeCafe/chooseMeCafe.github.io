var navOptions = document.querySelectorAll("#section_nav .option");
console.log(navOptions)

navOptions[0].onclick = function() {
  document.querySelector("#section_intro").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navOptions[1].onclick = function() {
  document.querySelector("#section_taste").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navOptions[2].onclick = function() {
  document.querySelector("#beauty_wall").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navOptions[3].onclick = function() {
  document.querySelector("#section_footer").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navOptions[0].onclick = function() {
  document.querySelector("#section_intro").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};
