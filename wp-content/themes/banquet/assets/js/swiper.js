document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal", // Définir la direction du défilement
    loop: true, // Activez la lecture en boucle

    navigation: {
      // Ajoutez les boutons de navigation
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    effect: "fade", // Ajoutez l'effet de fondu
    fadeEffect: {
      crossFade: true,
    },

    keyboard: {
      // Activer les touches du clavier
      enabled: true,
      onlyInViewport: false, // Activer les touches du clavier même lorsque Swiper n'est pas en vue
    },
  });
});
