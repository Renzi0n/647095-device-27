let catalogBtn = document.querySelector(".catalog-btn"),
    catalogNav = document.querySelector(".catalog-nav");

catalogBtn.addEventListener('mouseenter', function (evt) {
  catalogNav.classList.add("popup-show");
  catalogNav.addEventListener("mouseleave", function () {
    catalogNav.classList.remove("popup-show");
  });
});
