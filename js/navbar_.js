var navOptions = document.querySelectorAll(sectionNavbar(".option"));

navOptions[0].onclick = function() {
  document.querySelector(sectionIntro(".section_brand")).scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};

navOptions[1].onclick = function() {
  document.querySelector(sectionIntro(".intro_taste")).scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};

navOptions[2].onclick = function() {
  document.querySelector(sectionIntro(".section_beauty_wall")).scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};

navOptions[3].onclick = function() {
  document.querySelector(".section_footer").scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};