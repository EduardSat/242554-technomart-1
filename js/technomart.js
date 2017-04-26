var link = document.querySelector(".companies-contacts__btn");
var popup = document.querySelector(".companies-contacts__form");
var close = document.querySelector(".if-loose__close");
var login = popup.querySelector("[name=login]");
var mapOpen= document.querySelector(".companies-map-window");
  var mapPopup= document.querySelector(".modal-content-map");
  var mapClose= document.querySelector(".about-map__close");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("contacts-form-show");
login.focus;
 });

 close.addEventListener("click", function(event) {
   event.preventDefault();
   popup.classList.remove("contacts-form-show");
 });
 // map modal window
 mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
          }
        }
      });

// catalog popup
var buy = document.querySelector(".actions-buy");
var popup = document.querySelector(".cart-form");
var close = document.querySelector(".cart-form__close");


buy.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("cart-form-show");
});

close.addEventListener("click",function(event) {
  event.preventDefault();
  popup.classList.remove("cart-form-show");
});