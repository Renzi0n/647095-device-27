let modalClose = document.querySelectorAll(".modal-close"),
    modalOpenMap = document.querySelector(".modal-open-map"),
    modalOpenWrite = document.querySelector(".modal-open-write"),
    modalMap = document.querySelector(".modal-map"),
    modalWrite = document.querySelector(".modal-write-us"),
    modalInput = document.querySelectorAll(".modal-input"),
    submit = document.querySelector(".btn-submit"),

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

