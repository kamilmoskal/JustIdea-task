const links = document.querySelectorAll(".offer__link");

//Add diffrent class for list which depends on index hovered li
links.forEach(function(link, index) {
  link.addEventListener("mouseover", function() {
    document.querySelector(".offer__list").classList.add(`rotate${index + 1}`);
  });
  link.addEventListener("mouseout", function() {
    document
      .querySelector(".offer__list")
      .classList.remove(`rotate${index + 1}`);
  });
});
