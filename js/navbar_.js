var navOptions = document.querySelectorAll(SEC_NAVBAR + " .option");

navOptions[0].onclick = function() {
  document.querySelector(SEC_INTRO + " .section_brand").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navOptions[1].onclick = function() {
  document.querySelector(SEC_INTRO + " .intro_taste").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navOptions[2].onclick = function() {
  document.querySelector(SEC_INTRO + " .intro_beauty_wall").scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};

navOptions[3].onclick = function() {
  document.querySelector(SEC_FOOTER).scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
};
