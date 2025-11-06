
// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
  const isOpen = toggle.ariaExpanded === "true";
  const isClosed = !isOpen;
  console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
  
  // Mise à jour des attributs ARIA pour accessibilité
  nav.ariaHidden = isOpen ? "true" : "false";
  toggle.ariaExpanded = isOpen ? "false" : "true";
  
  // Gestion de la classe noscroll sur le body
  document.body.classList.toggle("noscroll", !isOpen);
});