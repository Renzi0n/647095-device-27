let modalClose = document.querySelectorAll(".modal-close"),
    modalOpenMap = document.querySelector(".modal-open-map"),
    modalOpenWrite = document.querySelector(".modal-open-write"),
    modalMap = document.querySelector(".modal-map"),
    modalWrite = document.querySelector(".modal-write-us"),
    modalInput = document.querySelectorAll(".modal-input"),
    submit = document.querySelector(".btn-submit"),
    catalogBtn = document.querySelector(".catalog-btn"),
    catalogNav = document.querySelector(".catalog-nav"),
    sliderInput = document.querySelectorAll(".slider-input"),
    galleryItem = document.querySelectorAll(".gallery-item"),
    sliderBtn = document.querySelectorAll(".service-list .btn"),
    galleryBlock = document.querySelectorAll(".service article"),

    modalParent;

function modalOpen(btn, modal) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("modal-show");
    modal.querySelector(".modal-input").focus();
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        modal.classList.remove("modal-show");
      };
    });
  });
}

catalogBtn.addEventListener("mouseenter", function (evt) {
  catalogNav.classList.add("popup-show");
  catalogBtn.addEventListener("mouseleave", function () {
    catalogNav.classList.remove("popup-show");
  });
});

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener("click", function () {
    modalParent = modalClose[i].parentNode;
    while (!modalParent.classList.contains("modal")){
      modalParent = modalParent.parentNode;
    };
    modalParent.classList.remove("modal-show");
  });
};

modalOpen(modalOpenMap, modalMap);
modalOpen(modalOpenWrite, modalWrite);

submit.addEventListener("click", function (evt) {
  for (let i = 0; i < modalInput.length; i++) {
    if (!modalInput[i].value){
      evt.preventDefault();
      modalInput[i].classList.remove("no-valid");
      modalInput[i].offsetWidth = modalInput[i].offsetWidth;
      modalInput[i].classList.add("no-valid");
    };
  };
});
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



