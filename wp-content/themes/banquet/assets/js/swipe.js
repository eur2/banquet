document.addEventListener("DOMContentLoaded", function () {
  var swipeIcon = document.querySelector(".promptBox"); // Sélectionne l'élément avec la classe "promptBox"

  swipeIcon.classList.add("show"); // Ajoutez la classe "show" à l'élément sélectionné pour l'afficher

  setTimeout(function () {
    swipeIcon.classList.add("fade-out");
  }, 3000); // Attend 3 secondes, puis ajoute la classe "fade-out" pour le faire disparaître
});
