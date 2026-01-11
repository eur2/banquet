document.addEventListener("DOMContentLoaded", function () {
  var lienProjetPrecedent = document.getElementById("lien-projet-precedent");
  var lienProjetSuivant = document.getElementById("lien-projet-suivant");

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      // Si la touche flèche vers le haut est pressée
      if (lienProjetPrecedent) {
        // Si le lien vers le projet précédent existe
        window.location.href = lienProjetPrecedent.href;
        // Redirige vers le lien du projet précédent
      }
    } else if (event.key === "ArrowDown") {
      // Sinon, si la touche flèche vers le bas est pressée
      if (lienProjetSuivant) {
        // Si le lien vers le projet suivant existe
        window.location.href = lienProjetSuivant.href;
        // Redirige vers le lien du projet suivant
      }
    }
  });
});
