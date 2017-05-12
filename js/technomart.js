var close = document.querySelector(".if-loose__close");
var link = document.querySelector(".companies-contacts__btn");
var popup = document.querySelector(".companies-contacts__form");
if (popup) {
  link.addEventListener("click", function (event) {
    popup.classList.add("contacts-form-show");
    event.preventDefault();
  });
  close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("contacts-form-show");
  });
}
// map modal window
var mapOpen = document.querySelector(".companies-contacts__map");
var mapPopup = document.querySelector(".companies-map-window");
var mapClose = document.querySelector(".about-map__close");
if (mapOpen) {
  mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
  });

  mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-content-show")) {
        mapPopup.classList.remove("modal-content-show");
      }
    }
  });
}

// catalog popup
var buy = document.querySelectorAll(".catalog-items__section .actions-buy");
var catalogPopup = document.querySelector(".cart-form");
var close = document.querySelector(".cart-form__close");
if (buy.length > 0) {

  Array.prototype.map.call(buy, function (item) {
    item.addEventListener("click", function (event) {
      catalogPopup.classList.add("cart-form-show");
      event.preventDefault();
    });
  });

  close.addEventListener("click", function (event) {
    event.preventDefault();
    catalogPopup.classList.remove("cart-form-show");
  });
}

