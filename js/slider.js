let sliderInput = document.querySelectorAll(".slider-input"),
    galleryItem = document.querySelectorAll(".gallery-item"),
    sliderBtn = document.querySelectorAll(".service-list .btn"),
    galleryBlock = document.querySelectorAll(".service article");

for (let i = 0; i < galleryItem.length; i++) {
  sliderInput[i].addEventListener('click', function () {
    if (sliderInput[i].checked) {
      galleryItem[i].classList.add("show");
    };
    for (let i = 0; i < galleryItem.length; i++)  {
      if (!sliderInput[i].checked) {
        galleryItem[i].classList.remove("show");
      };
    }
  });
};

for (let i = 0; i < galleryBlock.length; i++) {
  sliderBtn[i].addEventListener('click', function () {
    for (let i = 0; i < galleryBlock.length; i++)  {
      if (galleryBlock[i].classList.contains("show")) {
        galleryBlock[i].classList.remove("show");
        sliderBtn[i].classList.remove("active");
      };
    };
    sliderBtn[i].classList.add("active");
    galleryBlock[i].classList.add("show");
  });
};




